import {
  AbiParameter,
  Contract,
  EventArgDeclaration,
  EventDeclaration,
  FunctionDeclaration,
  AbiOutputParameter,
  EvmType,
  TupleType,
  EvmOutputType,
} from "typechain";
import { values } from "lodash";
import { UnreachableCaseError } from "ts-essentials";

export function codegenContractTypings(contract: Contract) {
  const template = `
  import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
  import { Listener, Provider } from 'ethers/providers';
  import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
  import { TransactionOverrides, TypedEventDescription, TypedFunctionDescription } from ".";

  interface ${contract.name}Interface extends Interface {
    functions: {
      ${values(contract.functions)
        .map(v => v[0])
        .map(generateInterfaceFunctionDescription)
        .join("\n")}
    };

    events: {
      ${values(contract.events)
        .map(v => v[0])
        .map(generateInterfaceEventDescription)
        .join("\n")}
    };
  }

  export class ${contract.name} extends Contract {
    connect(signerOrProvider: Signer | Provider | string): ${contract.name};
    attach(addressOrName: string): ${contract.name};
    deployed(): Promise<${contract.name}>;

    on(event: EventFilter | string, listener: Listener): ${contract.name};
    once(event: EventFilter | string, listener: Listener): ${contract.name};
    addListener(eventName: EventFilter | string, listener: Listener): ${contract.name};
    removeAllListeners(eventName: EventFilter | string): ${contract.name};
    removeListener(eventName: any, listener: Listener): ${contract.name};

    interface: ${contract.name}Interface;

    functions: {
      ${values(contract.functions)
        .map(v => v[0])
        .map(generateFunction)
        .join("\n")}
    };

    filters: {
      ${values(contract.events)
        .map(v => v[0])
        .map(generateEvents)
        .join("\n")}
    };

    estimate: {
      ${values(contract.functions)
        .map(v => v[0])
        .map(generateEstimateFunction)
        .join("\n")}
    };
  }`;

  return template;
}

export function codegenContractFactory(contract: Contract, abi: any, bytecode: string): string {
  const constructorArgs =
    contract.constructor && contract.constructor[0]
      ? generateInputTypes(contract.constructor[0].inputs)
      : "";
  const constructorArgNames =
    contract.constructor && contract.constructor[0]
      ? generateParamNames(contract.constructor[0].inputs)
      : "";
  if (!bytecode) return codegenAbstractContractFactory(contract, abi);

  // tsc with noUnusedLocals would complain about unused imports
  const ethersUtilsImports: string[] = [];
  if (constructorArgs.match(/\WArrayish(\W|$)/)) ethersUtilsImports.push("Arrayish");
  if (constructorArgs.match(/\WBigNumberish(\W|$)/)) ethersUtilsImports.push("BigNumberish");
  const ethersUtilsImportLine =
    ethersUtilsImports.length > 0
      ? `import { ${ethersUtilsImports.join(", ")} } from "ethers/utils";`
      : "";

  return `
  import { Contract, ContractFactory, Signer } from "ethers";
  import { Provider } from "ethers/providers";
  import { UnsignedTransaction } from "ethers/utils/transaction";
  ${ethersUtilsImportLine}

  import { ${contract.name} } from "./${contract.name}";

  export class ${contract.name}Factory extends ContractFactory {
    constructor(signer?: Signer) {
      super(_abi, _bytecode, signer);
    }
    deploy(${constructorArgs}): Promise<${contract.name}> {
      return super.deploy(${constructorArgNames}) as Promise<${contract.name}>;
    }
    getDeployTransaction(${constructorArgs}): UnsignedTransaction {
      return super.getDeployTransaction(${constructorArgNames});
    };
    attach(address: string): ${contract.name} {
      return super.attach(address) as ${contract.name};
    }
    connect(signer: Signer): ${contract.name}Factory {
      return super.connect(signer) as ${contract.name}Factory;
    }
    static connect(address: string, signerOrProvider: Signer | Provider): ${contract.name} {
      return new Contract(address, _abi, signerOrProvider) as ${contract.name};
    }
  }

  const _abi = ${JSON.stringify(abi, null, 2)};

  const _bytecode = "${bytecode}";
  `;
}

export function codegenAbstractContractFactory(contract: Contract, abi: any): string {
  return `
  import { Contract, Signer } from "ethers";
  import { Provider } from "ethers/providers";

  import { ${contract.name} } from "./${contract.name}";

  export class ${contract.name}Factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ${contract.name} {
      return new Contract(address, _abi, signerOrProvider) as ${contract.name};
    }
  }

  const _abi = ${JSON.stringify(abi, null, 2)};
  `;
}

function generateFunction(fn: FunctionDeclaration): string {
  return `
  ${fn.name}(${generateInputTypes(fn.inputs)}overrides?: TransactionOverrides): Promise<${
    fn.stateMutability === "pure" || fn.stateMutability === "view"
      ? generateOutputTypes(fn.outputs)
      : "ContractTransaction"
  }>;
`;
}

function generateEstimateFunction(fn: FunctionDeclaration): string {
  return `
  ${fn.name}(${generateInputTypes(fn.inputs)}): Promise<BigNumber>;
`;
}

function generateInterfaceFunctionDescription(fn: FunctionDeclaration): string {
  return `
  ${fn.name}: TypedFunctionDescription<{ encode(${generateParamArrayNames(
    fn.inputs,
  )}: ${generateParamArrayTypes(fn.inputs)}): string; }>;
`;
}

function generateInputTypes(input: Array<AbiParameter>): string {
  if (input.length === 0) {
    return "";
  }
  return (
    input
      .map((input, index) => `${input.name || `arg${index}`}: ${generateInputType(input.type)}`)
      .join(", ") + ", "
  );
}

function generateOutputTypes(outputs: Array<AbiOutputParameter>): string {
  if (outputs.length === 1) {
    return generateOutputType(outputs[0].type);
  } else {
    return `{ 
      ${outputs.map(t => t.name && `${t.name}: ${generateOutputType(t.type)}, `).join("")}
      ${outputs.map((t, i) => `${i}: ${generateOutputType(t.type)}`).join(", ")}
      }`;
  }
}

function generateParamArrayTypes(params: Array<AbiParameter>): string {
  return `[${params.map(param => generateInputType(param.type)).join(", ")}]`;
}

function generateParamNames(params: Array<AbiParameter | EventArgDeclaration>): string {
  return `${params.map(param => param.name).join(", ")}`;
}

function generateParamArrayNames(params: Array<AbiParameter | EventArgDeclaration>): string {
  return `[${generateParamNames(params)}]`;
}

function generateEvents(event: EventDeclaration) {
  return `
  ${event.name}(${generateEventTypes(event.inputs)}): EventFilter;
`;
}

function generateInterfaceEventDescription(event: EventDeclaration): string {
  return `
  ${event.name}: TypedEventDescription<{ encodeTopics(${generateParamArrayNames(
    event.inputs,
  )}: ${generateEventTopicTypes(event.inputs)}): string[]; }>;
`;
}

function generateEventTopicTypes(eventArgs: Array<EventArgDeclaration>): string {
  return `[${eventArgs.map(generateEventArgType).join(", ")}]`;
}

function generateEventTypes(eventArgs: EventArgDeclaration[]) {
  if (eventArgs.length === 0) {
    return "";
  }
  return (
    eventArgs
      .map(arg => {
        return `${arg.name}: ${generateEventArgType(arg)}`;
      })
      .join(", ") + ", "
  );
}

function generateEventArgType(eventArg: EventArgDeclaration): string {
  return eventArg.isIndexed ? `${generateInputType(eventArg.type)} | null` : "null";
}

// https://docs.ethers.io/ethers.js/html/api-contract.html#types
function generateInputType(evmType: EvmType): string {
  switch (evmType.type) {
    case "integer":
      return "BigNumberish";
    case "uinteger":
      return "BigNumberish";
    case "address":
      return "string";
    case "bytes":
    case "dynamic-bytes":
      return "Arrayish";
    case "array":
      return `(${generateInputType(evmType.itemType)})[]`;
    case "boolean":
      return "boolean";
    case "string":
      return "string";
    case "tuple":
      return generateTupleType(evmType, generateInputType);
    default:
      throw new UnreachableCaseError(evmType);
  }
}

function generateOutputType(evmType: EvmOutputType): string {
  switch (evmType.type) {
    case "integer":
    case "uinteger":
      return evmType.bits <= 48 ? "number" : "BigNumber";
    case "address":
      return "string";
    case "void":
      return "void";
    case "bytes":
    case "dynamic-bytes":
      return "string";
    case "array":
      return `(${generateOutputType(evmType.itemType)})[]`;
    case "boolean":
      return "boolean";
    case "string":
      return "string";
    case "tuple":
      return generateTupleType(evmType, generateOutputType);
    default:
      throw new UnreachableCaseError(evmType);
  }
}

function generateTupleType(tuple: TupleType, generator: (evmType: EvmType) => string) {
  return (
    "{" +
    tuple.components
      .map(component => `${component.name}: ${generator(component.type)}`)
      .join(", ") +
    "}"
  );
}
