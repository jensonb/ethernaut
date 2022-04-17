/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TelephoneAttack,
  TelephoneAttackInterface,
} from "../../../telephone/Telephone.sol/TelephoneAttack";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163317905561022e806100326000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631cff79cd14610030575b600080fd5b61004361003e366004610173565b610045565b005b60005473ffffffffffffffffffffffffffffffffffffffff1633146100b15760405162461bcd60e51b815260206004820152600c60248201527f756e617574686f72697a6564000000000000000000000000000000000000000060448201526064015b60405180910390fd5b60008373ffffffffffffffffffffffffffffffffffffffff1683836040516100da929190610211565b6000604051808303816000865af19150503d8060008114610117576040519150601f19603f3d011682016040523d82523d6000602084013e61011c565b606091505b505090508061016d5760405162461bcd60e51b815260206004820152600660248201527f6661696c6564000000000000000000000000000000000000000000000000000060448201526064016100a8565b50505050565b60008060006040848603121561018857600080fd5b833573ffffffffffffffffffffffffffffffffffffffff811681146101ac57600080fd5b9250602084013567ffffffffffffffff808211156101c957600080fd5b818601915086601f8301126101dd57600080fd5b8135818111156101ec57600080fd5b8760208285010111156101fe57600080fd5b6020830194508093505050509250925092565b818382376000910190815291905056fea164736f6c634300080d000a";

type TelephoneAttackConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TelephoneAttackConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TelephoneAttack__factory extends ContractFactory {
  constructor(...args: TelephoneAttackConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TelephoneAttack> {
    return super.deploy(overrides || {}) as Promise<TelephoneAttack>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TelephoneAttack {
    return super.attach(address) as TelephoneAttack;
  }
  override connect(signer: Signer): TelephoneAttack__factory {
    return super.connect(signer) as TelephoneAttack__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TelephoneAttackInterface {
    return new utils.Interface(_abi) as TelephoneAttackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TelephoneAttack {
    return new Contract(address, _abi, signerOrProvider) as TelephoneAttack;
  }
}
