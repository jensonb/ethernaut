import type { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address';
import type { Fixture } from 'ethereum-waffle';

import { King, KingAttacker } from '../src/types';

declare module 'mocha' {
  export interface Context {
    king: King;
    kingAttacker: KingAttacker;
    loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
    signers: Signers;
  }
}

export interface Signers {
  attacker: SignerWithAddress;
  user: SignerWithAddress;
}
