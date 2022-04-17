import { expect } from 'chai';
import { ethers } from 'hardhat';

export function shouldBehaveLikeGatekeeperOneAttacker(): void {
  it('has no entrant at the start', async function () {
    expect(await this.gatekeeperOne.entrant()).to.eq(
      ethers.constants.AddressZero,
    );
    const one = ethers.BigNumber.from(this.signers.attacker.address);
    console.log('one: ', one.toString());
    const two = one.mask(16);
    console.log('two: ', two.toString());
    const three = ethers.BigNumber.from('25');
    console.log('three: ', three.toString());
    console.log('three hex: ', three.toHexString());
    const four = three.mask(128);
    console.log('four: ', four.toString());
  });

  // it('attacker can get the elevator to the top', async function () {
  //   await this.elevatorAttacker
  //     .connect(this.signers.attacker)
  //     .execute(this.elevator.address, 69);
  //   expect(await this.elevator.floor()).to.be.eq(69);
  //   expect(await this.elevator.top()).to.be.true;
  // });
}
