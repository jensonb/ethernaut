import type { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address';
import { artifacts, ethers, waffle } from 'hardhat';

import { King, KingAttacker } from '../../src/types';
import { Signers } from '../types';
import { shouldBehaveLikeKingAttacker } from './King.behavior';

describe('[9. King] tests', function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.attacker = signers[0];
    this.signers.user = signers[1];
  });

  describe('King', function () {
    beforeEach(async function () {
      const kingArtifact = await artifacts.readArtifact('King');
      this.king = <King>(
        await waffle.deployContract(this.signers.user, kingArtifact)
      );

      const kingAttackerArtifact = await artifacts.readArtifact('KingAttacker');
      this.kingAttacker = <KingAttacker>(
        await waffle.deployContract(this.signers.attacker, kingAttackerArtifact)
      );
    });

    shouldBehaveLikeKingAttacker();
  });
});
