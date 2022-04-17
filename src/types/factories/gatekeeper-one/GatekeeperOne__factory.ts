/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GatekeeperOne,
  GatekeeperOneInterface,
} from "../../gatekeeper-one/GatekeeperOne";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "_gateKey",
        type: "bytes8",
      },
    ],
    name: "enter",
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
    inputs: [],
    name: "entrant",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610586806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80633370204e1461003b5780639db31d771461009a575b600080fd5b6100826004803603602081101561005157600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506100ce565b60405180821515815260200191505060405180910390f35b6100a26102f6565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60003273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561010957600080fd5b60005a905061014d6040518060400160405280600b81526020017f6761736c6566743a2025730000000000000000000000000000000000000000008152508261031a565b6000610164611fff8361042190919063ffffffff16565b1461016e57600080fd5b828060c01c61ffff168160c01c63ffffffff16146101d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806104d46029913960400191505060405180910390fd5b8060c01c67ffffffffffffffff168160c01c63ffffffff161415610246576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806104fd6029913960400191505060405180910390fd5b3261ffff168160c01c63ffffffff16146102ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180610526602b913960400191505060405180910390fd5b326000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600192505050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61041d82826040516024018080602001838152602001828103825284818151815260200191508051906020019080838360005b8381101561036857808201518184015260208101905061034d565b50505050905090810190601f1680156103955780820380516001836020036101000a031916815260200191505b5093505050506040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506104aa565b5050565b6000808211610498576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f536166654d6174683a206d6f64756c6f206279207a65726f000000000000000081525060200191505060405180910390fd5b8183816104a157fe5b06905092915050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa505050505056fe476174656b65657065724f6e653a20696e76616c6964206761746554687265652070617274206f6e65476174656b65657065724f6e653a20696e76616c69642067617465546872656520706172742074776f476174656b65657065724f6e653a20696e76616c6964206761746554687265652070617274207468726565a26469706673582212205d5fda2404719f200661a65383cd09a856e850f144a85573adff0912c776737c64736f6c634300060c0033";

type GatekeeperOneConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GatekeeperOneConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GatekeeperOne__factory extends ContractFactory {
  constructor(...args: GatekeeperOneConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GatekeeperOne> {
    return super.deploy(overrides || {}) as Promise<GatekeeperOne>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): GatekeeperOne {
    return super.attach(address) as GatekeeperOne;
  }
  override connect(signer: Signer): GatekeeperOne__factory {
    return super.connect(signer) as GatekeeperOne__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GatekeeperOneInterface {
    return new utils.Interface(_abi) as GatekeeperOneInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GatekeeperOne {
    return new Contract(address, _abi, signerOrProvider) as GatekeeperOne;
  }
}
