import { groupBy } from "lodash";

import debug from "../utils/debug";
import { MalformedAbiError } from "../utils/errors";
import { EvmType, parseEvmType, EvmOutputType } from "./parseEvmType";
import { Dictionary } from "ts-essentials";

export interface AbiParameter {
  name: string;
  type: EvmType;
}

export interface AbiOutputParameter {
  name: string;
  type: EvmOutputType;
}

export type Named<T> = {
  name: string;
  values: T;
};

export type StateMutability = "pure" | "view" | "nonpayable" | "payable";

export interface FunctionDeclaration {
  name: string;
  stateMutability: StateMutability;
  inputs: AbiParameter[];
  outputs: AbiOutputParameter[];
}

export interface FunctionWithoutOutputDeclaration extends FunctionDeclaration {
  outputs: [];
}

export interface FunctionWithoutInputDeclaration extends FunctionDeclaration {
  inputs: [];
}

export interface Contract {
  name: string;

  fallback?: FunctionWithoutInputDeclaration;
  constructor: FunctionWithoutOutputDeclaration[];
  functions: Dictionary<FunctionDeclaration[]>;
  events: Dictionary<EventDeclaration[]>;
}

export interface RawAbiParameter {
  name: string;
  type: string;
  components?: RawAbiParameter[];
}

export interface RawAbiDefinition {
  name: string;
  constant: boolean;
  payable: boolean;
  stateMutability?: StateMutability; // for older ABIs this will be undefined
  inputs: RawAbiParameter[];
  outputs: RawAbiParameter[];
  type: string;
}

export interface EventDeclaration {
  name: string;
  inputs: EventArgDeclaration[];
}

export interface EventArgDeclaration {
  isIndexed: boolean;
  name: string;
  type: EvmType;
}

export interface RawEventAbiDefinition {
  type: "event";
  anonymous: boolean;
  name: string;
  inputs: RawEventArgAbiDefinition[];
}

export interface RawEventArgAbiDefinition {
  indexed: boolean;
  name: string;
  type: string;
}

export function parse(abi: Array<RawAbiDefinition>, name: string): Contract {
  const constructors: FunctionWithoutOutputDeclaration[] = [];
  let fallback: FunctionWithoutInputDeclaration | undefined;
  const functions: FunctionDeclaration[] = [];
  const events: EventDeclaration[] = [];

  abi.forEach(abiPiece => {
    if (abiPiece.type === "fallback") {
      if (fallback) {
        throw new Error(
          `Fallback function can't be defined more than once! ${JSON.stringify(
            abiPiece,
          )} Previously defined: ${JSON.stringify(fallback)}`,
        );
      }
      fallback = parseFallback(abiPiece);
      return;
    }

    if (abiPiece.type === "constructor") {
      constructors.push(parseConstructor(abiPiece));
      return;
    }

    if (abiPiece.type === "function") {
      functions.push(parseFunctionDeclaration(abiPiece));
      return;
    }

    if (abiPiece.type === "event") {
      const eventAbi = (abiPiece as any) as RawEventAbiDefinition;
      if (eventAbi.anonymous) {
        debug(`Skipping anonymous event... ${JSON.stringify(eventAbi)}`);
        return;
      }

      events.push(parseEvent(eventAbi));
      return;
    }

    throw new Error(`Unrecognized abi element: ${abiPiece.type}`);
  });

  return {
    name,
    fallback,
    constructor: constructors,
    functions: groupBy(functions, f => f.name),
    events: groupBy(events, e => e.name),
  };
}

function parseOutputs(outputs: Array<RawAbiParameter>): AbiOutputParameter[] {
  if (outputs.length === 0) {
    return [{ name: "", type: { type: "void" } }];
  } else {
    return outputs.map(parseRawAbiParameter);
  }
}

export function parseEvent(abiPiece: RawEventAbiDefinition): EventDeclaration {
  debug(`Parsing event "${abiPiece.name}"`);

  return {
    name: abiPiece.name,
    inputs: abiPiece.inputs.map(parseRawEventArg),
  };
}

function parseRawEventArg(eventArg: RawEventArgAbiDefinition): EventArgDeclaration {
  return {
    name: eventArg.name,
    isIndexed: eventArg.indexed,
    type: parseRawAbiParameterType(eventArg),
  };
}

// if stateMutability is not available we will use old spec containing constant and payable
function findStateMutability(abiPiece: RawAbiDefinition): StateMutability {
  if (abiPiece.stateMutability) {
    return abiPiece.stateMutability;
  }

  if (abiPiece.constant) {
    return "view";
  }
  return abiPiece.payable ? "payable" : "nonpayable";
}

function parseConstructor(abiPiece: RawAbiDefinition): FunctionWithoutOutputDeclaration {
  debug(`Parsing constructor declaration`);
  return {
    name: "constructor",
    inputs: abiPiece.inputs.map(parseRawAbiParameter),
    outputs: [],
    stateMutability: findStateMutability(abiPiece),
  };
}

function parseFallback(abiPiece: RawAbiDefinition): FunctionWithoutInputDeclaration {
  debug(`Parsing fallback declaration`);

  return {
    name: "fallback",
    inputs: [],
    outputs: parseOutputs(abiPiece.outputs),
    stateMutability: findStateMutability(abiPiece),
  };
}

function parseFunctionDeclaration(abiPiece: RawAbiDefinition): FunctionDeclaration {
  debug(`Parsing function declaration "${abiPiece.name}"`);
  return {
    name: abiPiece.name,
    inputs: abiPiece.inputs.map(parseRawAbiParameter),
    outputs: parseOutputs(abiPiece.outputs),
    stateMutability: findStateMutability(abiPiece),
  };
}

function parseRawAbiParameter(rawAbiParameter: RawAbiParameter): AbiParameter {
  return {
    name: rawAbiParameter.name,
    type: parseRawAbiParameterType(rawAbiParameter),
  };
}

function parseRawAbiParameterType(rawAbiParameter: RawAbiParameter): EvmType {
  const components =
    rawAbiParameter.components &&
    rawAbiParameter.components.map(component => ({
      name: component.name,
      type: parseRawAbiParameterType(component),
    }));
  return parseEvmType(rawAbiParameter.type, components);
}

export function extractAbi(rawJson: string): RawAbiDefinition[] {
  let json;
  try {
    json = JSON.parse(rawJson);
  } catch {
    throw new MalformedAbiError("Not a json");
  }

  if (!json) {
    throw new MalformedAbiError("Not a json");
  }

  if (Array.isArray(json)) {
    return json;
  }

  if (Array.isArray(json.abi)) {
    return json.abi;
  }

  throw new MalformedAbiError("Not a valid ABI");
}

export function extractBytecode(rawContents: string): string | undefined {
  const bytecodeRegex = /^(0x)?([0-9a-fA-F][0-9a-fA-F])+$/;
  // First try to see if this is a .bin file with just the bytecode, otherwise a json
  if (rawContents.match(bytecodeRegex)) return ensure0xPrefix(rawContents);

  let json;
  try {
    json = JSON.parse(rawContents);
  } catch {
    return undefined;
  }

  if (!json) return undefined;

  if (json.bytecode && json.bytecode.match(bytecodeRegex)) {
    return ensure0xPrefix(json.bytecode);
  }

  if (
    json.evm &&
    json.evm.bytecode &&
    json.evm.bytecode.object &&
    json.evm.bytecode.object.match(bytecodeRegex)
  ) {
    return ensure0xPrefix(json.evm.bytecode.object);
  }

  return undefined;
}

export function ensure0xPrefix(hexString: string): string {
  if (hexString.startsWith("0x")) return hexString;
  return "0x" + hexString;
}

export function isConstant(fn: FunctionDeclaration): boolean {
  return (
    (fn.stateMutability === "pure" || fn.stateMutability === "view") &&
    fn.inputs.length === 0 &&
    fn.outputs.length === 1
  );
}

export function isConstantFn(fn: FunctionDeclaration): boolean {
  return (
    ((fn.stateMutability === "pure" || fn.stateMutability === "view") && fn.inputs.length !== 0) ||
    fn.outputs.length !== 1
  );
}
