import { TransactionResponse } from '@ethersproject/providers';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { BigNumberish } from 'ethers';

export function shouldBehaveLikeKingAttacker(): void {
  let expectKing: (expected: string) => Promise<void>;
  let sendEth: (
    from: SignerWithAddress,
    to: string,
    amount: BigNumberish,
  ) => Promise<TransactionResponse>;
  beforeEach(async function () {
    expectKing = async (expected: string) => {
      expect(await this.king._king()).to.eq(expected);
    };
    sendEth = (from: SignerWithAddress, to: string, value: BigNumberish) =>
      from.sendTransaction({ to, value, gasLimit: 1000000 });
  });

  it('starts with user as king', async function () {
    await expectKing(this.signers.user.address);
  });

  it('allows attacker to take for 1 wei', async function () {
    await expectKing(this.signers.user.address);
    await sendEth(this.signers.attacker, this.king.address, 1);
    await expectKing(this.signers.attacker.address);
  });

  it('allows attacker to take via KingAttacker for 1 wei', async function () {
    await expectKing(this.signers.user.address);
    await (
      await this.kingAttacker
        .connect(this.signers.attacker)
        .execute(this.king.address, { value: 1 })
    ).wait();
    await expectKing(this.kingAttacker.address);
  });

  it('when KingAttacker is the king, no one else can take it and attacker earns the reward', async function () {
    await expectKing(this.signers.user.address);
    await (
      await this.kingAttacker
        .connect(this.signers.attacker)
        .execute(this.king.address, { value: 1 })
    ).wait();
    await expectKing(this.kingAttacker.address);
    console.log('retaking');
    await expect(sendEth(this.signers.user, this.king.address, 10)).to.be
      .reverted;
    await expectKing(this.kingAttacker.address);
  });
}
