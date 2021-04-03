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
  Contract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface DataTypesPureInterface extends ethers.utils.Interface {
  functions: {
    "pure_address()": FunctionFragment;
    "pure_bool()": FunctionFragment;
    "pure_bytes()": FunctionFragment;
    "pure_bytes1()": FunctionFragment;
    "pure_enum()": FunctionFragment;
    "pure_int256()": FunctionFragment;
    "pure_int8()": FunctionFragment;
    "pure_named()": FunctionFragment;
    "pure_stat_array()": FunctionFragment;
    "pure_string()": FunctionFragment;
    "pure_struct()": FunctionFragment;
    "pure_tuple()": FunctionFragment;
    "pure_uint256()": FunctionFragment;
    "pure_uint8()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "pure_address",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pure_bool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pure_bytes",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pure_bytes1",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pure_enum", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pure_int256",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pure_int8", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pure_named",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pure_stat_array",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pure_string",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pure_struct",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pure_tuple",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pure_uint256",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pure_uint8",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "pure_address",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pure_bool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pure_bytes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pure_bytes1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pure_enum", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pure_int256",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pure_int8", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pure_named", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pure_stat_array",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pure_string",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pure_struct",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pure_tuple", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pure_uint256",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pure_uint8", data: BytesLike): Result;

  events: {};
}

export class DataTypesPure extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

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

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: DataTypesPureInterface;

  functions: {
    pure_address(overrides?: CallOverrides): Promise<[string]>;

    pure_bool(overrides?: CallOverrides): Promise<[boolean]>;

    pure_bytes(overrides?: CallOverrides): Promise<[string]>;

    pure_bytes1(overrides?: CallOverrides): Promise<[string]>;

    pure_enum(overrides?: CallOverrides): Promise<[number]>;

    pure_int256(overrides?: CallOverrides): Promise<[BigNumber]>;

    pure_int8(overrides?: CallOverrides): Promise<[number]>;

    pure_named(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { uint256_1: BigNumber; uint256_2: BigNumber }
    >;

    pure_stat_array(
      overrides?: CallOverrides
    ): Promise<[[number, number, number]]>;

    pure_string(overrides?: CallOverrides): Promise<[string]>;

    pure_struct(
      overrides?: CallOverrides
    ): Promise<
      [[BigNumber, BigNumber] & { uint256_0: BigNumber; uint256_1: BigNumber }]
    >;

    pure_tuple(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    pure_uint256(overrides?: CallOverrides): Promise<[BigNumber]>;

    pure_uint8(overrides?: CallOverrides): Promise<[number]>;
  };

  pure_address(overrides?: CallOverrides): Promise<string>;

  pure_bool(overrides?: CallOverrides): Promise<boolean>;

  pure_bytes(overrides?: CallOverrides): Promise<string>;

  pure_bytes1(overrides?: CallOverrides): Promise<string>;

  pure_enum(overrides?: CallOverrides): Promise<number>;

  pure_int256(overrides?: CallOverrides): Promise<BigNumber>;

  pure_int8(overrides?: CallOverrides): Promise<number>;

  pure_named(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { uint256_1: BigNumber; uint256_2: BigNumber }
  >;

  pure_stat_array(overrides?: CallOverrides): Promise<[number, number, number]>;

  pure_string(overrides?: CallOverrides): Promise<string>;

  pure_struct(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { uint256_0: BigNumber; uint256_1: BigNumber }
  >;

  pure_tuple(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

  pure_uint256(overrides?: CallOverrides): Promise<BigNumber>;

  pure_uint8(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    pure_address(overrides?: CallOverrides): Promise<string>;

    pure_bool(overrides?: CallOverrides): Promise<boolean>;

    pure_bytes(overrides?: CallOverrides): Promise<string>;

    pure_bytes1(overrides?: CallOverrides): Promise<string>;

    pure_enum(overrides?: CallOverrides): Promise<number>;

    pure_int256(overrides?: CallOverrides): Promise<BigNumber>;

    pure_int8(overrides?: CallOverrides): Promise<number>;

    pure_named(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { uint256_1: BigNumber; uint256_2: BigNumber }
    >;

    pure_stat_array(
      overrides?: CallOverrides
    ): Promise<[number, number, number]>;

    pure_string(overrides?: CallOverrides): Promise<string>;

    pure_struct(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { uint256_0: BigNumber; uint256_1: BigNumber }
    >;

    pure_tuple(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    pure_uint256(overrides?: CallOverrides): Promise<BigNumber>;

    pure_uint8(overrides?: CallOverrides): Promise<number>;
  };

  filters: {};

  estimateGas: {
    pure_address(overrides?: CallOverrides): Promise<BigNumber>;

    pure_bool(overrides?: CallOverrides): Promise<BigNumber>;

    pure_bytes(overrides?: CallOverrides): Promise<BigNumber>;

    pure_bytes1(overrides?: CallOverrides): Promise<BigNumber>;

    pure_enum(overrides?: CallOverrides): Promise<BigNumber>;

    pure_int256(overrides?: CallOverrides): Promise<BigNumber>;

    pure_int8(overrides?: CallOverrides): Promise<BigNumber>;

    pure_named(overrides?: CallOverrides): Promise<BigNumber>;

    pure_stat_array(overrides?: CallOverrides): Promise<BigNumber>;

    pure_string(overrides?: CallOverrides): Promise<BigNumber>;

    pure_struct(overrides?: CallOverrides): Promise<BigNumber>;

    pure_tuple(overrides?: CallOverrides): Promise<BigNumber>;

    pure_uint256(overrides?: CallOverrides): Promise<BigNumber>;

    pure_uint8(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    pure_address(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pure_bool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pure_bytes(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pure_bytes1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pure_enum(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pure_int256(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pure_int8(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pure_named(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pure_stat_array(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pure_string(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pure_struct(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pure_tuple(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pure_uint256(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pure_uint8(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
