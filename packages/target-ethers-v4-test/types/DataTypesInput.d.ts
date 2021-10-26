/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { TypedEventDescription, TypedFunctionDescription } from ".";

interface DataTypesInputInterface extends Interface {
  functions: {
    input_address: TypedFunctionDescription<{
      encode([input1]: [string]): string;
    }>;

    input_bool: TypedFunctionDescription<{
      encode([input1]: [boolean]): string;
    }>;

    input_bytes: TypedFunctionDescription<{
      encode([input1]: [Arrayish]): string;
    }>;

    input_bytes1: TypedFunctionDescription<{
      encode([input1]: [Arrayish]): string;
    }>;

    input_enum: TypedFunctionDescription<{
      encode([input1]: [BigNumberish]): string;
    }>;

    input_int256: TypedFunctionDescription<{
      encode([input1]: [BigNumberish]): string;
    }>;

    input_int8: TypedFunctionDescription<{
      encode([input1]: [BigNumberish]): string;
    }>;

    input_stat_array: TypedFunctionDescription<{
      encode([input1]: [BigNumberish[]]): string;
    }>;

    input_string: TypedFunctionDescription<{
      encode([input1]: [string]): string;
    }>;

    input_struct: TypedFunctionDescription<{
      encode([input1]: [
        { uint256_0: BigNumberish; uint256_1: BigNumberish }
      ]): string;
    }>;

    input_struct2: TypedFunctionDescription<{
      encode([input1]: [
        {
          input1: BigNumberish;
          input2: { uint256_0: BigNumberish; uint256_1: BigNumberish };
        }
      ]): string;
    }>;

    input_struct2_array: TypedFunctionDescription<{
      encode([input1]: [
        {
          input1: BigNumberish;
          input2: { uint256_0: BigNumberish; uint256_1: BigNumberish };
        }[]
      ]): string;
    }>;

    input_tuple: TypedFunctionDescription<{
      encode([input1, input2]: [BigNumberish, BigNumberish]): string;
    }>;

    input_uint256: TypedFunctionDescription<{
      encode([input1]: [BigNumberish]): string;
    }>;

    input_uint8: TypedFunctionDescription<{
      encode([input1]: [BigNumberish]): string;
    }>;
  };

  events: {};
}

export class DataTypesInput extends Contract {
  connect(signerOrProvider: Signer | Provider | string): DataTypesInput;
  attach(addressOrName: string): DataTypesInput;
  deployed(): Promise<DataTypesInput>;

  on(event: EventFilter | string, listener: Listener): DataTypesInput;
  once(event: EventFilter | string, listener: Listener): DataTypesInput;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): DataTypesInput;
  removeAllListeners(eventName: EventFilter | string): DataTypesInput;
  removeListener(eventName: any, listener: Listener): DataTypesInput;

  interface: DataTypesInputInterface;

  functions: {
    input_address(
      input1: string,
      overrides?: UnsignedTransaction
    ): Promise<string>;

    "input_address(address)"(
      input1: string,
      overrides?: UnsignedTransaction
    ): Promise<string>;

    input_bool(
      input1: boolean,
      overrides?: UnsignedTransaction
    ): Promise<boolean>;

    "input_bool(bool)"(
      input1: boolean,
      overrides?: UnsignedTransaction
    ): Promise<boolean>;

    input_bytes(
      input1: Arrayish,
      overrides?: UnsignedTransaction
    ): Promise<string>;

    "input_bytes(bytes)"(
      input1: Arrayish,
      overrides?: UnsignedTransaction
    ): Promise<string>;

    input_bytes1(
      input1: Arrayish,
      overrides?: UnsignedTransaction
    ): Promise<string>;

    "input_bytes1(bytes1)"(
      input1: Arrayish,
      overrides?: UnsignedTransaction
    ): Promise<string>;

    input_enum(
      input1: BigNumberish,
      overrides?: UnsignedTransaction
    ): Promise<number>;

    "input_enum(uint8)"(
      input1: BigNumberish,
      overrides?: UnsignedTransaction
    ): Promise<number>;

    input_int256(
      input1: BigNumberish,
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    "input_int256(int256)"(
      input1: BigNumberish,
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    input_int8(
      input1: BigNumberish,
      overrides?: UnsignedTransaction
    ): Promise<number>;

    "input_int8(int8)"(
      input1: BigNumberish,
      overrides?: UnsignedTransaction
    ): Promise<number>;

    input_stat_array(
      input1: BigNumberish[],
      overrides?: UnsignedTransaction
    ): Promise<number[]>;

    "input_stat_array(uint8[3])"(
      input1: BigNumberish[],
      overrides?: UnsignedTransaction
    ): Promise<number[]>;

    input_string(
      input1: string,
      overrides?: UnsignedTransaction
    ): Promise<string>;

    "input_string(string)"(
      input1: string,
      overrides?: UnsignedTransaction
    ): Promise<string>;

    input_struct(
      input1: { uint256_0: BigNumberish; uint256_1: BigNumberish },
      overrides?: UnsignedTransaction
    ): Promise<
      [BigNumber, BigNumber] & { uint256_0: BigNumber; uint256_1: BigNumber }
    >;

    "input_struct((uint256,uint256))"(
      input1: { uint256_0: BigNumberish; uint256_1: BigNumberish },
      overrides?: UnsignedTransaction
    ): Promise<
      [BigNumber, BigNumber] & { uint256_0: BigNumber; uint256_1: BigNumber }
    >;

    input_struct2(
      input1: {
        input1: BigNumberish;
        input2: { uint256_0: BigNumberish; uint256_1: BigNumberish };
      },
      overrides?: UnsignedTransaction
    ): Promise<
      [
        BigNumber,
        [BigNumber, BigNumber] & { uint256_0: BigNumber; uint256_1: BigNumber }
      ] & {
        input1: BigNumber;
        input2: [BigNumber, BigNumber] & {
          uint256_0: BigNumber;
          uint256_1: BigNumber;
        };
      }
    >;

    "input_struct2((uint256,(uint256,uint256)))"(
      input1: {
        input1: BigNumberish;
        input2: { uint256_0: BigNumberish; uint256_1: BigNumberish };
      },
      overrides?: UnsignedTransaction
    ): Promise<
      [
        BigNumber,
        [BigNumber, BigNumber] & { uint256_0: BigNumber; uint256_1: BigNumber }
      ] & {
        input1: BigNumber;
        input2: [BigNumber, BigNumber] & {
          uint256_0: BigNumber;
          uint256_1: BigNumber;
        };
      }
    >;

    input_struct2_array(
      input1: {
        input1: BigNumberish;
        input2: { uint256_0: BigNumberish; uint256_1: BigNumberish };
      }[],
      overrides?: UnsignedTransaction
    ): Promise<
      ([
        BigNumber,
        [BigNumber, BigNumber] & { uint256_0: BigNumber; uint256_1: BigNumber }
      ] & {
        input1: BigNumber;
        input2: [BigNumber, BigNumber] & {
          uint256_0: BigNumber;
          uint256_1: BigNumber;
        };
      })[]
    >;

    "input_struct2_array((uint256,(uint256,uint256))[])"(
      input1: {
        input1: BigNumberish;
        input2: { uint256_0: BigNumberish; uint256_1: BigNumberish };
      }[],
      overrides?: UnsignedTransaction
    ): Promise<
      ([
        BigNumber,
        [BigNumber, BigNumber] & { uint256_0: BigNumber; uint256_1: BigNumber }
      ] & {
        input1: BigNumber;
        input2: [BigNumber, BigNumber] & {
          uint256_0: BigNumber;
          uint256_1: BigNumber;
        };
      })[]
    >;

    input_tuple(
      input1: BigNumberish,
      input2: BigNumberish,
      overrides?: UnsignedTransaction
    ): Promise<[BigNumber, BigNumber]>;

    "input_tuple(uint256,uint256)"(
      input1: BigNumberish,
      input2: BigNumberish,
      overrides?: UnsignedTransaction
    ): Promise<[BigNumber, BigNumber]>;

    input_uint256(
      input1: BigNumberish,
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    "input_uint256(uint256)"(
      input1: BigNumberish,
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    input_uint8(
      input1: BigNumberish,
      overrides?: UnsignedTransaction
    ): Promise<number>;

    "input_uint8(uint8)"(
      input1: BigNumberish,
      overrides?: UnsignedTransaction
    ): Promise<number>;
  };

  input_address(
    input1: string,
    overrides?: UnsignedTransaction
  ): Promise<string>;

  "input_address(address)"(
    input1: string,
    overrides?: UnsignedTransaction
  ): Promise<string>;

  input_bool(
    input1: boolean,
    overrides?: UnsignedTransaction
  ): Promise<boolean>;

  "input_bool(bool)"(
    input1: boolean,
    overrides?: UnsignedTransaction
  ): Promise<boolean>;

  input_bytes(
    input1: Arrayish,
    overrides?: UnsignedTransaction
  ): Promise<string>;

  "input_bytes(bytes)"(
    input1: Arrayish,
    overrides?: UnsignedTransaction
  ): Promise<string>;

  input_bytes1(
    input1: Arrayish,
    overrides?: UnsignedTransaction
  ): Promise<string>;

  "input_bytes1(bytes1)"(
    input1: Arrayish,
    overrides?: UnsignedTransaction
  ): Promise<string>;

  input_enum(
    input1: BigNumberish,
    overrides?: UnsignedTransaction
  ): Promise<number>;

  "input_enum(uint8)"(
    input1: BigNumberish,
    overrides?: UnsignedTransaction
  ): Promise<number>;

  input_int256(
    input1: BigNumberish,
    overrides?: UnsignedTransaction
  ): Promise<BigNumber>;

  "input_int256(int256)"(
    input1: BigNumberish,
    overrides?: UnsignedTransaction
  ): Promise<BigNumber>;

  input_int8(
    input1: BigNumberish,
    overrides?: UnsignedTransaction
  ): Promise<number>;

  "input_int8(int8)"(
    input1: BigNumberish,
    overrides?: UnsignedTransaction
  ): Promise<number>;

  input_stat_array(
    input1: BigNumberish[],
    overrides?: UnsignedTransaction
  ): Promise<number[]>;

  "input_stat_array(uint8[3])"(
    input1: BigNumberish[],
    overrides?: UnsignedTransaction
  ): Promise<number[]>;

  input_string(
    input1: string,
    overrides?: UnsignedTransaction
  ): Promise<string>;

  "input_string(string)"(
    input1: string,
    overrides?: UnsignedTransaction
  ): Promise<string>;

  input_struct(
    input1: { uint256_0: BigNumberish; uint256_1: BigNumberish },
    overrides?: UnsignedTransaction
  ): Promise<
    [BigNumber, BigNumber] & { uint256_0: BigNumber; uint256_1: BigNumber }
  >;

  "input_struct((uint256,uint256))"(
    input1: { uint256_0: BigNumberish; uint256_1: BigNumberish },
    overrides?: UnsignedTransaction
  ): Promise<
    [BigNumber, BigNumber] & { uint256_0: BigNumber; uint256_1: BigNumber }
  >;

  input_struct2(
    input1: {
      input1: BigNumberish;
      input2: { uint256_0: BigNumberish; uint256_1: BigNumberish };
    },
    overrides?: UnsignedTransaction
  ): Promise<
    [
      BigNumber,
      [BigNumber, BigNumber] & { uint256_0: BigNumber; uint256_1: BigNumber }
    ] & {
      input1: BigNumber;
      input2: [BigNumber, BigNumber] & {
        uint256_0: BigNumber;
        uint256_1: BigNumber;
      };
    }
  >;

  "input_struct2((uint256,(uint256,uint256)))"(
    input1: {
      input1: BigNumberish;
      input2: { uint256_0: BigNumberish; uint256_1: BigNumberish };
    },
    overrides?: UnsignedTransaction
  ): Promise<
    [
      BigNumber,
      [BigNumber, BigNumber] & { uint256_0: BigNumber; uint256_1: BigNumber }
    ] & {
      input1: BigNumber;
      input2: [BigNumber, BigNumber] & {
        uint256_0: BigNumber;
        uint256_1: BigNumber;
      };
    }
  >;

  input_struct2_array(
    input1: {
      input1: BigNumberish;
      input2: { uint256_0: BigNumberish; uint256_1: BigNumberish };
    }[],
    overrides?: UnsignedTransaction
  ): Promise<
    ([
      BigNumber,
      [BigNumber, BigNumber] & { uint256_0: BigNumber; uint256_1: BigNumber }
    ] & {
      input1: BigNumber;
      input2: [BigNumber, BigNumber] & {
        uint256_0: BigNumber;
        uint256_1: BigNumber;
      };
    })[]
  >;

  "input_struct2_array((uint256,(uint256,uint256))[])"(
    input1: {
      input1: BigNumberish;
      input2: { uint256_0: BigNumberish; uint256_1: BigNumberish };
    }[],
    overrides?: UnsignedTransaction
  ): Promise<
    ([
      BigNumber,
      [BigNumber, BigNumber] & { uint256_0: BigNumber; uint256_1: BigNumber }
    ] & {
      input1: BigNumber;
      input2: [BigNumber, BigNumber] & {
        uint256_0: BigNumber;
        uint256_1: BigNumber;
      };
    })[]
  >;

  input_tuple(
    input1: BigNumberish,
    input2: BigNumberish,
    overrides?: UnsignedTransaction
  ): Promise<[BigNumber, BigNumber]>;

  "input_tuple(uint256,uint256)"(
    input1: BigNumberish,
    input2: BigNumberish,
    overrides?: UnsignedTransaction
  ): Promise<[BigNumber, BigNumber]>;

  input_uint256(
    input1: BigNumberish,
    overrides?: UnsignedTransaction
  ): Promise<BigNumber>;

  "input_uint256(uint256)"(
    input1: BigNumberish,
    overrides?: UnsignedTransaction
  ): Promise<BigNumber>;

  input_uint8(
    input1: BigNumberish,
    overrides?: UnsignedTransaction
  ): Promise<number>;

  "input_uint8(uint8)"(
    input1: BigNumberish,
    overrides?: UnsignedTransaction
  ): Promise<number>;

  filters: {};

  estimate: {
    input_address(
      input1: string,
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    "input_address(address)"(
      input1: string,
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    input_bool(
      input1: boolean,
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    "input_bool(bool)"(
      input1: boolean,
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    input_bytes(
      input1: Arrayish,
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    "input_bytes(bytes)"(
      input1: Arrayish,
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    input_bytes1(
      input1: Arrayish,
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    "input_bytes1(bytes1)"(
      input1: Arrayish,
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    input_enum(
      input1: BigNumberish,
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    "input_enum(uint8)"(
      input1: BigNumberish,
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    input_int256(
      input1: BigNumberish,
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    "input_int256(int256)"(
      input1: BigNumberish,
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    input_int8(
      input1: BigNumberish,
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    "input_int8(int8)"(
      input1: BigNumberish,
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    input_stat_array(
      input1: BigNumberish[],
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    "input_stat_array(uint8[3])"(
      input1: BigNumberish[],
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    input_string(
      input1: string,
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    "input_string(string)"(
      input1: string,
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    input_struct(
      input1: { uint256_0: BigNumberish; uint256_1: BigNumberish },
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    "input_struct((uint256,uint256))"(
      input1: { uint256_0: BigNumberish; uint256_1: BigNumberish },
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    input_struct2(
      input1: {
        input1: BigNumberish;
        input2: { uint256_0: BigNumberish; uint256_1: BigNumberish };
      },
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    "input_struct2((uint256,(uint256,uint256)))"(
      input1: {
        input1: BigNumberish;
        input2: { uint256_0: BigNumberish; uint256_1: BigNumberish };
      },
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    input_struct2_array(
      input1: {
        input1: BigNumberish;
        input2: { uint256_0: BigNumberish; uint256_1: BigNumberish };
      }[],
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    "input_struct2_array((uint256,(uint256,uint256))[])"(
      input1: {
        input1: BigNumberish;
        input2: { uint256_0: BigNumberish; uint256_1: BigNumberish };
      }[],
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    input_tuple(
      input1: BigNumberish,
      input2: BigNumberish,
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    "input_tuple(uint256,uint256)"(
      input1: BigNumberish,
      input2: BigNumberish,
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    input_uint256(
      input1: BigNumberish,
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    "input_uint256(uint256)"(
      input1: BigNumberish,
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    input_uint8(
      input1: BigNumberish,
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    "input_uint8(uint8)"(
      input1: BigNumberish,
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;
  };
}
