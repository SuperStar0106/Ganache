/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface OverloadsInterface extends ethers.utils.Interface {
  functions: {
    "overload1(int256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "overload1",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "overload1", data: BytesLike): Result;

  events: {};
}

export class Overloads extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: OverloadsInterface;

  functions: {
    "overload1(int256)"(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "overload1(uint256,uint256)"(
      input1: BigNumberish,
      input2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  "overload1(int256)"(
    input1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "overload1(uint256,uint256)"(
    input1: BigNumberish,
    input2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    "overload1(int256)"(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "overload1(uint256,uint256)"(
      input1: BigNumberish,
      input2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    "overload1(int256)"(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "overload1(uint256,uint256)"(
      input1: BigNumberish,
      input2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    "overload1(int256)"(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "overload1(uint256,uint256)"(
      input1: BigNumberish,
      input2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
