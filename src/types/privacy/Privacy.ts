/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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
} from "../common";

export interface PrivacyInterface extends utils.Interface {
  functions: {
    "ID()": FunctionFragment;
    "locked()": FunctionFragment;
    "unlock(bytes16)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "ID" | "locked" | "unlock"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "ID", values?: undefined): string;
  encodeFunctionData(functionFragment: "locked", values?: undefined): string;
  encodeFunctionData(functionFragment: "unlock", values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: "ID", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "locked", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unlock", data: BytesLike): Result;

  events: {};
}

export interface Privacy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PrivacyInterface;

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
    ID(overrides?: CallOverrides): Promise<[BigNumber]>;

    locked(overrides?: CallOverrides): Promise<[boolean]>;

    unlock(
      _key: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  ID(overrides?: CallOverrides): Promise<BigNumber>;

  locked(overrides?: CallOverrides): Promise<boolean>;

  unlock(
    _key: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ID(overrides?: CallOverrides): Promise<BigNumber>;

    locked(overrides?: CallOverrides): Promise<boolean>;

    unlock(_key: BytesLike, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    ID(overrides?: CallOverrides): Promise<BigNumber>;

    locked(overrides?: CallOverrides): Promise<BigNumber>;

    unlock(
      _key: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    locked(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unlock(
      _key: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
