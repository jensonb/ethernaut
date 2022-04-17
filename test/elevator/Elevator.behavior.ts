import { expect } from 'chai';

export function shouldBehaveLikeElevatorAttacker(): void {
  it('target starts not at top', async function () {
    expect(await this.elevator.top()).to.be.false;
  });

  it('attacker can get the elevator to the top', async function () {
    await this.elevatorAttacker
      .connect(this.signers.attacker)
      .execute(this.elevator.address, 69);
    expect(await this.elevator.floor()).to.be.eq(69);
    expect(await this.elevator.top()).to.be.true;
  });
}
