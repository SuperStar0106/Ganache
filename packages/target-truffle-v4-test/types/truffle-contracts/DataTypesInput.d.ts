/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BigNumber } from "bignumber.js";

export interface DataTypesInputContract
  extends Truffle.Contract<DataTypesInputInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<DataTypesInputInstance>;
}

type AllEvents = never;

export interface DataTypesInputInstance extends Truffle.ContractInstance {
  input_uint8(
    input1: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  input_uint256(
    input1: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  input_int8(
    input1: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  input_int256(
    input1: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  input_bool(
    input1: boolean,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  input_address(
    input1: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  input_bytes1(
    input1: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  input_bytes(
    input1: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  input_string(
    input1: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  input_stat_array(
    input1: (number | BigNumber | string)[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber[]>;

  input_tuple(
    input1: number | BigNumber | string,
    input2: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<[BigNumber, BigNumber]>;

  input_struct(
    input1: {
      uint256_0: number | BigNumber | string;
      uint256_1: number | BigNumber | string;
    },
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ uint256_0: BigNumber; uint256_1: BigNumber }>;

  input_enum(
    input1: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;
}
