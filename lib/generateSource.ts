import { RawAbiDefinition, parse, Contract, AbiParameter, EventArgDeclaration } from "./abiParser";
import { getVersion } from "./utils";
import { EvmType, ArrayType } from "./typeParser";

export interface IContext {
  fileName: string;
  relativeRuntimePath: string;
}

export function generateSource(abi: Array<RawAbiDefinition>, context: IContext): string {
  const parsedContractAbi = parse(abi);

  return codeGenForContract(abi, parsedContractAbi, context);
}

// @todo better typings for web3
function codeGenForContract(abi: Array<RawAbiDefinition>, input: Contract, context: IContext) {
  const typeName = `${context.fileName}`;
  return `/* GENERATED BY TYPECHAIN VER. ${getVersion()} */
/* tslint:disable */
  
import { BigNumber } from "bignumber.js";
import { TypeChainContract, promisify, ITxParams, IPayableTxParams, DeferredTransactionWrapper, DeferredEventWrapper } from '${
    context.relativeRuntimePath
  }'

export class ${typeName} extends TypeChainContract {
    public readonly rawWeb3Contract: any;
  
    public constructor(web3: any, address: string | BigNumber) {
      const abi = ${JSON.stringify(abi)};
      super(web3, address, abi);
    }

    static async createAndValidate(web3: any, address: string | BigNumber): Promise<${typeName}> {
      const contract = new ${typeName}(web3, address);
      const code = await promisify(web3.eth.getCode, [address]);
      if (code === "0x0") {
        throw new Error(\`Contract at \${address} doesn't exist!\`);
      }
      return contract; 
    }
    
    ${input.constants
      .map(
        constant =>
          `public get ${
            constant.name
          }(): Promise<${constant.output.generateCodeForOutput()}> { return promisify(this.rawWeb3Contract.${
            constant.name
          }, []); }`,
      )
      .join("\n")} 
      ${input.constantFunctions
        .map(
          constantFunction =>
            `public ${constantFunction.name}(${constantFunction.inputs
              .map(codeGenForParams)
              .join(", ")}): Promise<${codeGenForOutputTypeList(
              constantFunction.outputs,
            )}> { return promisify(this.rawWeb3Contract.${
              constantFunction.name
            }, [${constantFunction.inputs.map(codeGenForArgs).join(", ")}]); }`,
        )
        .join(";\n")} 

        ${input.functions
          .map(func => {
            const txParamsType = func.payable ? "IPayableTxParams" : "ITxParams";
            return `public ${func.name}Tx(${func.inputs
              .map(codeGenForParams)
              .join(
                ", ",
              )}): DeferredTransactionWrapper<${txParamsType}> { return new DeferredTransactionWrapper<${txParamsType}>(this, "${
              func.name
            }", [${func.inputs.map(codeGenForArgs).join(", ")}]);
                }`;
          })
          .join(";\n")} 

        ${input.events
          .map(event => {
            const filterableEventParams = codeGenForEventArgs(event.inputs, true);
            const eventParams = codeGenForEventArgs(event.inputs, false);

            return `public ${
              event.name
            }Event(eventFilter: ${filterableEventParams}): DeferredEventWrapper<${eventParams}, ${filterableEventParams}> {
                return new DeferredEventWrapper<${eventParams}, ${filterableEventParams}>(this, '${
              event.name
            }', eventFilter);
              }`;
          })
          .join(";\n")}
  }`;
}

function codeGenForParams(param: AbiParameter, index: number): string {
  return `${param.name || `arg${index}`}: ${param.type.generateCodeForInput()}`;
}

function codeGenForArgs(param: AbiParameter, index: number): string {
  const isArray = param.type instanceof ArrayType;
  const paramName = param.name || `arg${index}`;
  return isArray ? `${paramName}.map(val => val.toString())` : `${paramName}.toString()`;
}

function codeGenForOutputTypeList(output: Array<EvmType>): string {
  if (output.length === 1) {
    return output[0].generateCodeForOutput();
  } else {
    return `[${output.map(x => x.generateCodeForOutput()).join(", ")}]`;
  }
}

function codeGenForEventArgs(args: EventArgDeclaration[], onlyIndexed: boolean) {
  return `{${args
    .filter(arg => arg.isIndexed || !onlyIndexed)
    .map(arg => {
      const inputCodegen = arg.type.generateCodeForInput();

      // if we're specifying a filter, you can take a single value or an array of values to check for
      const argType = `${inputCodegen}${onlyIndexed ? ` | Array<${inputCodegen}>` : ""}`;
      return `${arg.name}${onlyIndexed ? "?" : ""}: ${argType}`;
    })
    .join(`, `)}}`;
}
