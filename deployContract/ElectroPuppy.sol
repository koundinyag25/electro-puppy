pragma solidity ^0.4.4;

contract ElectroPuppy {

    uint256 public carbonCredit = 1000;

    event CarbonCreditsSold(address indexed seller, uint256 value);
    event CarbonCreditsBoughts(address indexed seller, uint256 value);

    function addCarbonCredit(uint256 value) returns(uint256 newValue) {
        carbonCredit += value;
        return carbonCredit;
        CarbonCreditsSold(msg.sender, value);
    }

    function consumeCarbonCredit(uint256 value) returns (uint newValue) {
        carbonCredit -= value;
        return carbonCredit;
        CarbonCreditsBoughts(msg.sender, value);
    }

}
