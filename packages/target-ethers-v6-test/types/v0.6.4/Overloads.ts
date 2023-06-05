/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface OverloadsInterface extends Interface {
  getFunction(
    nameOrSignature: "overload1(int256)" | "overload1(uint256,uint256)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "overload1(int256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "overload1(uint256,uint256)",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "overload1(int256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "overload1(uint256,uint256)",
    data: BytesLike
  ): Result;
}

export interface Overloads extends BaseContract {
  connect(runner?: ContractRunner | null): Overloads;
  waitForDeployment(): Promise<this>;

  interface: OverloadsInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  "overload1(int256)": TypedContractMethod<
    [input1: BigNumberish],
    [bigint],
    "view"
  >;

  "overload1(uint256,uint256)": TypedContractMethod<
    [input1: BigNumberish, input2: BigNumberish],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "overload1(int256)"
  ): TypedContractMethod<[input1: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "overload1(uint256,uint256)"
  ): TypedContractMethod<
    [input1: BigNumberish, input2: BigNumberish],
    [bigint],
    "view"
  >;

  filters: {};
}
