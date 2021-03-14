/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { NameMangling } from "../NameMangling";

export class NameMangling__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NameMangling {
    return (new Contract(
      address,
      _abi,
      signerOrProvider
    ) as any) as NameMangling;
  }
}

const _abi = [
  {
    inputs: [],
    name: "provider",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "works",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
