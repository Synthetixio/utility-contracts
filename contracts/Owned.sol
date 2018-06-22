/*
-----------------------------------------------------------------
FILE INFORMATION
-----------------------------------------------------------------

file:       Owned.sol
version:    1.2
author:     Anton Jurisevic
            Dominic Romanowski

date:       2018-6-22

-----------------------------------------------------------------
MODULE DESCRIPTION
-----------------------------------------------------------------

A contract with an owner, to be inherited by other contracts.
Requires its owner to be explicitly set in the constructor.
Provides onlyOwner and onlyNominatedOwner access modifiers.

To change owners, the current owner must nominate the next
owner, who must then accept the nomination. A nomination can be
cancelled before it is accepted by nominating the zero
address, for example.

-----------------------------------------------------------------
*/

pragma solidity 0.4.24;

/**
 * @title A contract with an owner.
 * @notice Contract ownership can be transferred by first
 * nominating the new owner, who must then accept ownership,
 * which prevents inadvertent ownership transfers.
 */
contract Owned {
    address public owner;
    address public nominatedOwner;

    /**
     * @dev Owned Constructor
     */
    constructor(address _owner)
        public
    {
        require(_owner != address(0));
        owner = _owner;
        emit OwnerChanged(address(0), _owner);
    }

    /**
     * @notice Nominate a new owner of this contract.
     * @dev Only the current owner may nominate a new owner.
     */
    function nominateNewOwner(address _owner)
        external
        onlyOwner
    {
        nominatedOwner = _owner;
        emit OwnerNominated(_owner);
    }

    /**
     * @notice Accept the nomination to be owner.
     * @dev Only the currently-nominated owner may accept ownership.
     */
    function acceptOwnership()
        external
        onlyNominatedOwner
    {
        // This event must be emitted before the owner is overwritten.
        emit OwnerChanged(owner, nominatedOwner);
        owner = nominatedOwner;
        nominatedOwner = address(0);
    }

    modifier onlyOwner
    {
        require(msg.sender == owner);
        _;
    }

    modifier onlyNominatedOwner
    {
        require(msg.sender == nominatedOwner);
        _;
    }

    event OwnerNominated(address newOwner);
    event OwnerChanged(address oldOwner, address newOwner);
}
