/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IElevator,
  IElevatorInterface,
} from "../../../gatekeeper-one/ElevatorAttacker.sol/IElevator";

const _abi = [
  {
    inputs: [],
    name: "floor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_floor",
        type: "uint256",
      },
    ],
    name: "goTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "top",
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
];

export class IElevator__factory {
  static readonly abi = _abi;
  static createInterface(): IElevatorInterface {
    return new utils.Interface(_abi) as IElevatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IElevator {
    return new Contract(address, _abi, signerOrProvider) as IElevator;
  }
}
