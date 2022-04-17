import type { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address';
import { expect } from 'chai';
import hre from 'hardhat';

import { Elevator, ElevatorAttacker } from '../../src/types';
import { testDeploy } from '../../tasks/deploy/utils';
import { Signers } from '../types';
import { shouldBehaveLikeElevatorAttacker } from './Elevator.behavior';

describe('[11. Elevator] tests', function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await hre.ethers.getSigners();
    this.signers.attacker = signers[0];
    this.signers.user = signers[1];
  });

  describe('Elevator', function () {
    beforeEach(async function () {
      this.elevator = await testDeploy<Elevator>(
        hre,
        'Elevator',
        this.signers.user,
      );
      expect(await this.elevator.top()).to.be.false;

      this.elevatorAttacker = await testDeploy<ElevatorAttacker>(
        hre,
        'ElevatorAttacker',
        this.signers.attacker,
      );
    });

    shouldBehaveLikeElevatorAttacker();
  });
});
