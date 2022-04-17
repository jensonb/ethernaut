import type { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address';
import hre from 'hardhat';

import { GatekeeperOne } from '../../src/types';
import { testDeploy } from '../../tasks/deploy/utils';
import { Signers } from '../types';
import { shouldBehaveLikeGatekeeperOneAttacker } from './GatekeeperOne.behavior';

describe('[12. Gatekeeper One] tests', function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await hre.ethers.getSigners();
    this.signers.attacker = signers[0];
    this.signers.user = signers[1];
  });

  describe('GatekeeperOne', function () {
    beforeEach(async function () {
      this.gatekeeperOne = await testDeploy<GatekeeperOne>(
        hre,
        'GatekeeperOne',
        this.signers.user,
      );

      // this.elevatorAttacker = await testDeploy<ElevatorAttacker>(
      //   hre,
      //   'ElevatorAttacker',
      //   this.signers.attacker,
      // );
    });

    shouldBehaveLikeGatekeeperOneAttacker();
  });
});
