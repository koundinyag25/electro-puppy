contract ElectroPuppy {

    uint256 public carbonCredit = 0;

    Event CarbonCreditsSold(address indexed seller, uint256 value);
    Event CarbonCreditsBoughts(address indexed seller, uint256 value);

    function addCarbonCredit(uint256 value) public {
        carbonCredit += value;
        CarbonCreditsSold(msg.sender, value);
    }

    function consumeCarbonCredit(uint256 value) public {
        carbonCredit -= value;
        CarbonCreditsBoughts(msg.sender, value);
    }

}
