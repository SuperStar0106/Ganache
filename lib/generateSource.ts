import { RawAbiDefinition, parse, Contract, AbiParameter } from "./abiParser";
import { getVersion } from "./utils";
import { EvmType } from "./typeParser";

export function generateSource(abi: Array<RawAbiDefinition>): string {
  const parsedContractAbi = parse(abi);

  return codeGenForContract(abi, parsedContractAbi);
}

// @todo fix formatting of generate code
// @todo better typings for web3
function codeGenForContract(abi: Array<RawAbiDefinition>, input: Contract) {
  return `/* GENERATED BY TYPECHAIN VER. ${getVersion()} */
  
import { BigNumber } from "bignumber.js";

interface ITxParams {
  from?: string; 
  gas?: number | string | BigNumber;
  gasPrice?: number | string | BigNumber;
}

interface IPayableTxParams {
  value: string | BigNumber;
  from?: string; 
  gas?: number | string | BigNumber;
  gasPrice?: number | string | BigNumber;
}

function promisify(func: any, args: any): Promise<any> {
  return new Promise((res,rej) => {
    func(...args, (err: any, data: any) => {
      if (err) return rej(err);
      return res(data);
    })
  })
}

class Contract {
    public readonly rawWeb3Contract: any;
  
    public constructor(web3: any, address: string) {
      this.rawWeb3Contract = web3.eth.contract(${JSON.stringify(abi)}).at(address);
    }
    static async createAndValidate(web3: any, address: string): Promise<Contract> {
      const contract = new Contract(web3, address);
      const code = await promisify(web3.eth.getCode, [address]);
      if (code === "0x0") {
        throw new Error(\`Contract at \${address} doesn't exist!\`);
      }
      return contract; 
    }
    
    ${input.constants
      .map(
        constant =>
          `public get ${constant.name}(): Promise<${constant.output.generateCodeForOutput()}> { return promisify(this.rawWeb3Contract.${constant.name}, []); }`
      )
      .join("\n")} 
      ${input.constantFunctions
        .map(
          constantFunction =>
            `public ${constantFunction.name}(${constantFunction.inputs
              .map(codeGenForParams)
              .join(", ")}): Promise<${codeGenForOutputTypelist(
              constantFunction.outputs
            )}> { return promisify(this.rawWeb3Contract.${constantFunction.name}, [${constantFunction.inputs
              .map(codeGenForArgs)
              .join(", ")}]); }`
        )
        .join(";\n")} 

        ${input.functions
          .map(
            func =>
              `public ${func.name}Tx(${func.inputs.map(codeGenForParams).join(", ") +
                (func.inputs.length === 0 ? "" : ", ")}params?: ${func.payable
                ? "IPayableTxParams"
                : "ITxParams"}): Promise<${codeGenForOutputTypelist(
                func.outputs
              )}> { return promisify(this.rawWeb3Contract.${func.name}, [${func.inputs
                .map(codeGenForArgs)
                .join(", ") + (func.inputs.length === 0 ? "" : ", ")}params ]); }`
          )
          .join(";\n")} 
}

export default Contract;`;
}

function codeGenForParams(param: AbiParameter): string {
  return `${param.name}: ${param.type.generateCodeForInput()}`;
}

function codeGenForArgs(param: AbiParameter): string {
  return `${param.name}`;
}

function codeGenForOutputTypelist(output: Array<EvmType>): string {
  if (output.length === 1) {
    return output[0].generateCodeForOutput();
  } else {
    return `[${output.map((x) => x.generateCodeForOutput()).join(", ")}]`;
  }
}