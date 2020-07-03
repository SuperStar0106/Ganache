/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface NameManglingInterface extends ethers.utils.Interface {
  functions: {
    "works()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "works", values?: undefined): string;

  decodeFunctionResult(functionFragment: "works", data: BytesLike): Result;

  events: {};
}

export class NameMangling extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: NameManglingInterface;

  functions: {
    works(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;
  };

  works(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    works(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    works(): Promise<BigNumber>;
  };

  populateTransaction: {
    works(): Promise<PopulatedTransaction>;
  };
}
