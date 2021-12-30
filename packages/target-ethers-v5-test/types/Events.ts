/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type EventDataStruct = { index: BigNumberish; name: string };

export type EventDataStructOutput = [BigNumber, string] & {
  index: BigNumber;
  name: string;
};

export interface EventsInterface extends utils.Interface {
  functions: {
    "emit_anon1()": FunctionFragment;
    "emit_event1()": FunctionFragment;
    "emit_event2()": FunctionFragment;
    "emit_event3()": FunctionFragment;
    "emit_event3_overloaded()": FunctionFragment;
    "emit_event4()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "emit_anon1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emit_event1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emit_event2",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emit_event3",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emit_event3_overloaded",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emit_event4",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "emit_anon1", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emit_event1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emit_event2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emit_event3",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emit_event3_overloaded",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emit_event4",
    data: BytesLike
  ): Result;

  events: {
    "AnonEvent1(uint256)": EventFragment;
    "Event1(uint256,uint256)": EventFragment;
    "Event2(uint256)": EventFragment;
    "Event3(bool,uint256)": EventFragment;
    "Event4(tuple)": EventFragment;
    "NoArgsEvent()": EventFragment;
    "UpdateFrequencySet(address[],uint256[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AnonEvent1"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Event1"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Event2"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Event3"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Event4"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NoArgsEvent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateFrequencySet"): EventFragment;
}

export type AnonEvent1Event = TypedEvent<[BigNumber], { value1: BigNumber }>;

export type AnonEvent1EventFilter = TypedEventFilter<AnonEvent1Event>;

export type Event1Event = TypedEvent<
  [BigNumber, BigNumber],
  { value1: BigNumber; value2: BigNumber }
>;

export type Event1EventFilter = TypedEventFilter<Event1Event>;

export type Event2Event = TypedEvent<[BigNumber], { arg0: BigNumber }>;

export type Event2EventFilter = TypedEventFilter<Event2Event>;

export type Event3_bool_uint256_Event = TypedEvent<
  [boolean, BigNumber],
  { value1: boolean; value2: BigNumber }
>;

export type Event3_bool_uint256_EventFilter = TypedEventFilter<
  Event3_bool_uint256_Event
>;

export type Event3_uint256_Event = TypedEvent<
  [BigNumber],
  { value1: BigNumber }
>;

export type Event3_uint256_EventFilter = TypedEventFilter<Event3_uint256_Event>;

export type Event4Event = TypedEvent<
  [EventDataStructOutput],
  { data: EventDataStructOutput }
>;

export type Event4EventFilter = TypedEventFilter<Event4Event>;

export type NoArgsEventEvent = TypedEvent<[], {}>;

export type NoArgsEventEventFilter = TypedEventFilter<NoArgsEventEvent>;

export type UpdateFrequencySetEvent = TypedEvent<
  [string[], BigNumber[]],
  { arg0: string[]; arg1: BigNumber[] }
>;

export type UpdateFrequencySetEventFilter = TypedEventFilter<
  UpdateFrequencySetEvent
>;

export interface Events extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EventsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    emit_anon1(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emit_event1(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emit_event2(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emit_event3(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emit_event3_overloaded(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emit_event4(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  emit_anon1(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emit_event1(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emit_event2(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emit_event3(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emit_event3_overloaded(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emit_event4(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    emit_anon1(overrides?: CallOverrides): Promise<void>;

    emit_event1(overrides?: CallOverrides): Promise<void>;

    emit_event2(overrides?: CallOverrides): Promise<void>;

    emit_event3(overrides?: CallOverrides): Promise<void>;

    emit_event3_overloaded(overrides?: CallOverrides): Promise<void>;

    emit_event4(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "AnonEvent1(uint256)"(value1?: BigNumberish | null): AnonEvent1EventFilter;
    AnonEvent1(value1?: BigNumberish | null): AnonEvent1EventFilter;

    "Event1(uint256,uint256)"(
      value1?: BigNumberish | null,
      value2?: null
    ): Event1EventFilter;
    Event1(value1?: BigNumberish | null, value2?: null): Event1EventFilter;

    "Event2(uint256)"(arg0?: null): Event2EventFilter;
    Event2(arg0?: null): Event2EventFilter;

    "Event3(bool,uint256)"(
      value1?: boolean | null,
      value2?: null
    ): Event3_bool_uint256_EventFilter;
    "Event3(uint256)"(value1?: BigNumberish | null): Event3_uint256_EventFilter;

    "Event4(tuple)"(data?: null): Event4EventFilter;
    Event4(data?: null): Event4EventFilter;

    "NoArgsEvent()"(): NoArgsEventEventFilter;
    NoArgsEvent(): NoArgsEventEventFilter;

    "UpdateFrequencySet(address[],uint256[])"(
      arg0?: null,
      arg1?: null
    ): UpdateFrequencySetEventFilter;
    UpdateFrequencySet(arg0?: null, arg1?: null): UpdateFrequencySetEventFilter;
  };

  estimateGas: {
    emit_anon1(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emit_event1(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emit_event2(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emit_event3(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emit_event3_overloaded(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emit_event4(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    emit_anon1(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emit_event1(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emit_event2(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emit_event3(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emit_event3_overloaded(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emit_event4(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
