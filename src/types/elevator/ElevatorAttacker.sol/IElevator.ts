/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export interface IElevatorInterface extends utils.Interface {
  functions: {
    "floor()": FunctionFragment;
    "goTo(uint256)": FunctionFragment;
    "top()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "floor" | "goTo" | "top"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "floor", values?: undefined): string;
  encodeFunctionData(functionFragment: "goTo", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "top", values?: undefined): string;

  decodeFunctionResult(functionFragment: "floor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "goTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "top", data: BytesLike): Result;

  events: {};
}

export interface IElevator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IElevatorInterface;

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
    floor(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    goTo(
      _floor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    top(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  floor(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  goTo(
    _floor: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  top(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    floor(overrides?: CallOverrides): Promise<BigNumber>;

    goTo(_floor: BigNumberish, overrides?: CallOverrides): Promise<void>;

    top(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    floor(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    goTo(
      _floor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    top(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    floor(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    goTo(
      _floor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    top(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
