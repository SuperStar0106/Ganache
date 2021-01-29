/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { PayableFactory } from "../PayableFactory";

export class PayableFactory__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PayableFactory {
    return (new Contract(
      address,
      _abi,
      signerOrProvider
    ) as unknown) as PayableFactory;
  }
}

const _abi = [
  {
    inputs: [],
    name: "newPayable",
    outputs: [
      {
        internalType: "contract Payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
