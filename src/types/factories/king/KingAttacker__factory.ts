/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  KingAttacker,
  KingAttackerInterface,
} from "../../king/KingAttacker";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "target",
        type: "address",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163317905561034a806100326000396000f3fe60806040526004361061001e5760003560e01c80634b64e49214610023575b600080fd5b61003661003136600461025b565b610038565b005b61005a6040518060600160405280602781526020016102f26027913930610180565b61007c6040518060600160405280602581526020016103196025913933610180565b6001600160a01b0381166100d75760405162461bcd60e51b815260206004820152600a60248201527f626164207461726765740000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b600034116101275760405162461bcd60e51b815260206004820152600860248201527f6e6565642065746800000000000000000000000000000000000000000000000060448201526064016100ce565b61013181346101de565b61017d5760405162461bcd60e51b815260206004820152600960248201527f73656e64206661696c000000000000000000000000000000000000000000000060448201526064016100ce565b50565b6101da828260405160240161019692919061028b565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663319af33360e01b17905261023a565b5050565b6000826001600160a01b03168260405160006040518083038185875af1925050503d806000811461022b576040519150601f19603f3d011682016040523d82523d6000602084013e610230565b606091505b5090949350505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b60006020828403121561026d57600080fd5b81356001600160a01b038116811461028457600080fd5b9392505050565b604081526000835180604084015260005b818110156102b9576020818701810151606086840101520161029c565b818111156102cb576000606083860101525b506001600160a01b0393909316602083015250601f91909101601f19160160600191905056fe5b4b696e6741747461636b65722e657865637574655d2073656c6620616464726573733a2025735b4b696e6741747461636b65722e657865637574655d206d73672e73656e6465723a202573a164736f6c634300080d000a";

type KingAttackerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KingAttackerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KingAttacker__factory extends ContractFactory {
  constructor(...args: KingAttackerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KingAttacker> {
    return super.deploy(overrides || {}) as Promise<KingAttacker>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): KingAttacker {
    return super.attach(address) as KingAttacker;
  }
  override connect(signer: Signer): KingAttacker__factory {
    return super.connect(signer) as KingAttacker__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KingAttackerInterface {
    return new utils.Interface(_abi) as KingAttackerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KingAttacker {
    return new Contract(address, _abi, signerOrProvider) as KingAttacker;
  }
}