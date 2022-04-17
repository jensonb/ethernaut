import type { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address';
import { expect } from 'chai';
import { artifacts, ethers, waffle } from 'hardhat';

import { Reentrance, ReentranceAttacker } from '../../src/types';
import { Signers } from '../types';
import { shouldBehaveLikeReentranceAttacker } from './Reentrance.behavior';

describe('[10. Reentrance] tests', function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.attacker = signers[0];
    this.signers.user = signers[1];
  });

  describe('Reentrance', function () {
    beforeEach(async function () {
      const reentranceArtifact = await artifacts.readArtifact('Reentrance');
      this.reentrance = <Reentrance>(
        await waffle.deployContract(this.signers.user, reentranceArtifact)
      );
      await (
        await this.reentrance
          .connect(this.signers.user)
          .donate(this.signers.user.address, { value: 1111 })
      ).wait();
      expect(await ethers.provider.getBalance(this.reentrance.address)).to.eq(
        1111,
      );

      const reentranceAttackerArtifact = await artifacts.readArtifact(
        'ReentranceAttacker',
      );
      this.reentranceAttacker = <ReentranceAttacker>(
        await waffle.deployContract(
          this.signers.attacker,
          reentranceAttackerArtifact,
        )
      );
    });

    shouldBehaveLikeReentranceAttacker();
  });
});
