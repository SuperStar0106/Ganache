/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface } from "ethers";
import type { ContractRunner } from "ethers/providers";
import type { Lib, LibInterface } from "../../../v0.6.4/Library/Lib";

const _abi = [
  {
    inputs: [
      {
        internalType: "enum Lib.BOOL",
        name: "b",
        type: "Lib.BOOL",
      },
    ],
    name: "other",
    outputs: [
      {
        internalType: "enum Lib.BOOL",
        name: "",
        type: "Lib.BOOL",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

export class Lib__factory {
  static readonly abi = _abi;
  static createInterface(): LibInterface {
    return new Interface(_abi) as LibInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Lib {
    return new Contract(address, _abi, runner) as unknown as Lib;
  }
}
