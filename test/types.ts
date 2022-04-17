import type { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address';
import type { Fixture } from 'ethereum-waffle';

import {
  Elevator,
  ElevatorAttacker,
  GatekeeperOne,
  King,
  KingAttacker,
  Reentrance,
  ReentranceAttacker,
} from '../src/types';

declare module 'mocha' {
  export interface Context {
    // 9 King
    king: King;
    kingAttacker: KingAttacker;

    // 10 Re-entrancy
    reentrance: Reentrance;
    reentranceAttacker: ReentranceAttacker;

    // 11 Elevator
    elevator: Elevator;
    elevatorAttacker: ElevatorAttacker;

    // 13 Gatekeeper One
    gatekeeperOne: GatekeeperOne;

    loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
    signers: Signers;
  }
}

export interface Signers {
  attacker: SignerWithAddress;
  user: SignerWithAddress;
}
