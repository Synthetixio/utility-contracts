pragma solidity 0.4.24;


import "../Owned.sol";
import "../TokenState.sol";

contract BalanceGiftr is Owned {

    TokenState public havTokenState;
    TokenState public nominTokenState;

    constructor(address _owner, TokenState _havTokenState, TokenState _nominTokenState)
        Owned(_owner)
        public
    {
        havTokenState = _havTokenState;
        nominTokenState = _nominTokenState;
    }

    function setHavBalance(address _address, uint _amount)
      external
    {
        havTokenState.setBalanceOf(_address, _amount);
    }

    function setNominBalance(address _address, uint _amount)
      external
    {
        nominTokenState.setBalanceOf(_address, _amount);
    }

}
