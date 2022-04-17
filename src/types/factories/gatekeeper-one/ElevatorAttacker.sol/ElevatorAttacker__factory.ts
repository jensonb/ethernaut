/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ElevatorAttacker,
  ElevatorAttackerInterface,
} from "../../../gatekeeper-one/ElevatorAttacker.sol/ElevatorAttacker";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "contract IElevator",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "floor",
        type: "uint256",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "isLastFloor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "toggle",
        type: "uint256",
      },
    ],
    name: "setToggle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526001805534801561001457600080fd5b50600080546001600160a01b0319163317905561029a806100366000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633b89bb86146100465780635f9a4bca1461005b578063eb47350914610082575b600080fd5b61005961005436600461020a565b610095565b005b61006e61006936600461024f565b610100565b604051901515815260200160405180910390f35b61005961009036600461024f565b610116565b604051633b669c4d60e21b81526004810182905273ffffffffffffffffffffffffffffffffffffffff83169063ed9a713490602401600060405180830381600087803b1580156100e457600080fd5b505af11580156100f8573d6000803e3d6000fd5b505050505050565b600061010a61018e565b50506001546002141590565b60005473ffffffffffffffffffffffffffffffffffffffff1633146101825760405162461bcd60e51b815260206004820152600c60248201527f756e617574686f72697a6564000000000000000000000000000000000000000060448201526064015b60405180910390fd5b61018b816101a1565b50565b60015461019c906003610268565b600155565b80600114806101b05750806002145b6101fc5760405162461bcd60e51b815260206004820152600a60248201527f62616420746f67676c65000000000000000000000000000000000000000000006044820152606401610179565b806001541461018b57600155565b6000806040838503121561021d57600080fd5b823573ffffffffffffffffffffffffffffffffffffffff8116811461024157600080fd5b946020939093013593505050565b60006020828403121561026157600080fd5b5035919050565b60008282101561028857634e487b7160e01b600052601160045260246000fd5b50039056fea164736f6c634300080d000a";

type ElevatorAttackerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ElevatorAttackerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ElevatorAttacker__factory extends ContractFactory {
  constructor(...args: ElevatorAttackerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ElevatorAttacker> {
    return super.deploy(overrides || {}) as Promise<ElevatorAttacker>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ElevatorAttacker {
    return super.attach(address) as ElevatorAttacker;
  }
  override connect(signer: Signer): ElevatorAttacker__factory {
    return super.connect(signer) as ElevatorAttacker__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ElevatorAttackerInterface {
    return new utils.Interface(_abi) as ElevatorAttackerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ElevatorAttacker {
    return new Contract(address, _abi, signerOrProvider) as ElevatorAttacker;
  }
}
