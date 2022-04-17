/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IReentrance,
  IReentranceInterface,
} from "../../../reentrancy/ReentranceAttacker.sol/IReentrance";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_who",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "donate",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IReentrance__factory {
  static readonly abi = _abi;
  static createInterface(): IReentranceInterface {
    return new utils.Interface(_abi) as IReentranceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IReentrance {
    return new Contract(address, _abi, signerOrProvider) as IReentrance;
  }
}