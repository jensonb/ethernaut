import { expect } from 'chai';
import { BigNumber } from 'ethers';
import { ethers } from 'hardhat';

export function shouldBehaveLikeReentranceAttacker(): void {
  let targetBalanceInitial: BigNumber;
  beforeEach(async function () {
    targetBalanceInitial = await ethers.provider.getBalance(
      this.reentrance.address,
    );
  });

  it('target starts with a balance', async function () {
    console.log(
      'starting balance: ',
      ethers.utils.formatEther(targetBalanceInitial),
    );
    expect(targetBalanceInitial).to.be.gt(0);
  });

  it('attacker can successfully drain by sending full balance', async function () {
    await expect(
      await this.reentranceAttacker
        .connect(this.signers.attacker)
        .execute(this.reentrance.address, { value: targetBalanceInitial }),
    ).to.changeEtherBalance(this.signers.attacker, targetBalanceInitial);
    expect(await ethers.provider.getBalance(this.reentrance.address)).to.eq(0);
  });

  it('attacker can successfully drain by sending less than full balance', async function () {
    await expect(
      await this.reentranceAttacker
        .connect(this.signers.attacker)
        .execute(this.reentrance.address, {
          value: targetBalanceInitial.div(3).add(1),
        }),
    ).to.changeEtherBalance(this.signers.attacker, targetBalanceInitial);
    expect(await ethers.provider.getBalance(this.reentrance.address)).to.eq(0);
  });
}
