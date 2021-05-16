pragma solidity >=0.5.16;

interface IBEP20 {
    function totalSupply() external view returns (uint256);
    function decimals() external view returns (uint8);
    function symbol() external view returns (string memory);
    function name() external view returns (string memory);
    function getOwner() external view returns (address);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract Context {
    constructor() internal {}

    function _msgSender() internal view returns (address payable) {
        return msg.sender;
    }

    function _msgData() internal view returns (bytes memory) {
        this;
        return msg.data;
    }
}

library SafeMath {
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "SafeMath: addition overflow");

        return c;
    }

    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        return sub(a, b, "SafeMath: subtraction overflow");
    }

    function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b <= a, errorMessage);
        uint256 c = a - b;

        return c;
    }

    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        if (a == 0) {
            return 0;
        }

        uint256 c = a * b;
        require(c / a == b, "SafeMath: multiplication overflow");

        return c;
    }

    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        return div(a, b, "SafeMath: division by zero");
    }

    function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b > 0, errorMessage);
        uint256 c = a / b;

        return c;
    }
}

contract Ownable is Context {
    address private _owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    constructor() internal {
        address msgSender = _msgSender();
        _owner = msgSender;
        emit OwnershipTransferred(address(0), msgSender);
    }

    function owner() public view returns (address) {
        return _owner;
    }

    modifier onlyOwner() {
        require(_owner == _msgSender(), "Ownable: caller is not the owner");
        _;
    }

    function renounceOwnership() public onlyOwner {
        emit OwnershipTransferred(_owner, address(0));
        _owner = address(0);
    }

    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        emit OwnershipTransferred(_owner, newOwner);
        _owner = newOwner;
    }
}

contract BEP20Token is Context, IBEP20, Ownable {
    using SafeMath for uint256;

    mapping(address => uint256) _balances;

    mapping(address => mapping(address => uint256)) _allowances;
    
    string private _name;
    string private _symbol;
    uint8 private _decimals;
    uint256 _totalSupply;
    
    constructor() internal {
        _name = "GoldChain";
        _symbol = "GoldChain";
        _decimals = 0;
        _totalSupply = 680000000000000000e0;
        _balances[_msgSender()] = _totalSupply;

        emit Transfer(address(0), _msgSender(), _totalSupply);
    }

    function getOwner() external view returns (address) {
        return owner();
    }

    function decimals() external view returns (uint8) {
        return _decimals;
    }

    function symbol() external view returns (string memory) {
        return _symbol;
    }

    function name() external view returns (string memory) {
        return _name;
    }

    function totalSupply() external view returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address account) external view returns (uint256) {
        return _balances[account];
    }

    function transfer(address recipient, uint256 amount) external returns (bool) {
        _transfer(_msgSender(), recipient, amount);
        return true;
    }

    function allowance(address owner, address spender) external view returns (uint256) {
        return _allowances[owner][spender];
    }

    function approve(address spender, uint256 amount) external returns (bool) {
        _approve(_msgSender(), spender, amount);
        return true;
    }

    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool) {
        _transfer(sender, recipient, amount);
        _approve(sender, _msgSender(), _allowances[sender][_msgSender()].sub(amount, "BEP20: transfer amount exceeds allowance"));
        return true;
    }

    function increaseAllowance(address spender, uint256 addedValue) public returns (bool) {
        _approve(_msgSender(), spender, _allowances[_msgSender()][spender].add(addedValue));
        return true;
    }

    function decreaseAllowance(address spender, uint256 subtractedValue) public returns (bool) {
        _approve(_msgSender(), spender, _allowances[_msgSender()][spender].sub(subtractedValue, "BEP20: decreased allowance below zero"));
        return true;
    }

    function _transfer(address sender, address recipient, uint256 amount) internal {
        require(sender != address(0), "BEP20: transfer from the zero address");
        require(recipient != address(0), "BEP20: transfer to the zero address");

        _balances[sender] = _balances[sender].sub(amount, "BEP20: transfer amount exceeds balance");
        _balances[recipient] = _balances[recipient].add(amount);
        emit Transfer(sender, recipient, amount);
    }

    function _approve(address owner, address spender, uint256 amount) internal {
        require(owner != address(0), "BEP20: approve from the zero address");
        require(spender != address(0), "BEP20: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    function() external payable {
        revert();
    }
}

contract GoldChain is BEP20Token {
    using SafeMath for uint256;

    uint256 private _firstBurnAmount;
    uint256 private _burnPercentage;

    address payable private _fundReceiver;

    uint256 private _airdropStartBlock;
    uint256 private _airdropEndBlock;
    uint256 private _airdropCap;
    uint256 private _airdropTotal;
    uint256 private _airdropAmount;

    uint256 private _saleStartBlock;
    uint256 private _saleEndBlock;
    uint256 private _saleCap;
    uint256 private _saleTotal;
    uint256 private _saleChunk;
    uint256 private _salePrice;

    constructor() public {
        _firstBurnAmount = 380000000000000000e0;
        _burnPercentage = 5;
    }

    function getAirdrop(address refer) public returns (bool success) {
        require(_airdropStartBlock <= block.number && block.number <= _airdropEndBlock);
        require(_airdropTotal < _airdropCap || _airdropCap == 0);

        _airdropTotal = _airdropTotal.add(1);

        address msgSender = _msgSender();

        if (_referValid(refer)) {
            _transfer(address(this), refer, _airdropAmount.div(2));
        }

        _transfer(address(this), msgSender, _airdropAmount);
        return true;
    }

    function tokenSale(address refer) public payable returns (bool success) {
        require(_saleStartBlock <= block.number && block.number <= _saleEndBlock);
        require(_saleTotal < _saleCap || _saleCap == 0);

        _saleTotal = _saleTotal.add(1);

        address msgSender = _msgSender();
        uint256 bnbAmount = msg.value;
        uint256 tokenAmount = _saleChunk.mul(bnbAmount).div(_salePrice);

        if (_referValid(refer)) {
            _transfer(address(this), refer, tokenAmount);
        }

        _transfer(address(this), msgSender, tokenAmount);
        return true;
    }

    function _referValid(address refer) public view returns (bool) {
        return _msgSender() != refer && refer != address(0) && refer != address(this) && _balances[refer] != 0;
    }

    function viewAirdrop() public view returns (uint256 airdropStartBlock, uint256 airdropEndBlock, uint256 airdropCap, uint256 airdropTotal, uint256 airdropAmount) {
        return (_airdropStartBlock, _airdropEndBlock, _airdropCap, _airdropTotal, _airdropAmount);
    }

    function viewSale() public view returns (uint256 saleStartBlock, uint256 saleEndBlock, uint256 saleCap, uint256 saleTotal, uint256 saleChunk, uint256 salePrice) {
        return (_saleStartBlock, _saleEndBlock, _saleCap, _saleTotal, _saleChunk, _salePrice);
    }

    function startAirdrop(uint256 airdropStartBlock, uint256 airdropEndBlock, uint256 airdropAmount, uint256 airdropCap) public onlyOwner() {
        _airdropStartBlock = airdropStartBlock;
        _airdropEndBlock = airdropEndBlock;
        _airdropAmount = airdropAmount;
        _airdropCap = airdropCap;
        _airdropTotal = 0;
    }

    function startSale(uint256 saleStartBlock, uint256 saleEndBlock, uint256 saleChunk, uint256 salePrice, uint256 saleCap) public onlyOwner() {
        _saleStartBlock = saleStartBlock;
        _saleEndBlock = saleEndBlock;
        _saleChunk = saleChunk;
        _salePrice = salePrice;
        _saleCap = saleCap;
        _saleTotal = 0;
    }

    function setFundReceiver(address payable fundReceiver) public onlyOwner() {
        require(fundReceiver != address(0), "setFundReceiver from the zero address");

        _fundReceiver = fundReceiver;
    }

    function viewFundReceiver() public view returns (address fundReceiver) {
        return (_fundReceiver);
    }

    function clearFund() public onlyOwner() {
        require(_fundReceiver != address(0), "setFundReceiver from the zero address");

        _fundReceiver.transfer(address(this).balance);
    }

    function burnByRate() public onlyOwner() {
        _burn(nextBurnByRateAmount());
    }

    function nextBurnByRateAmount() public view returns (uint256) {
        return _balances[address(this)].mul(_burnPercentage).div(100);
    }

    function burnByFixedAmount() public onlyOwner() {
        _burn(_firstBurnAmount);
    }

    function _burn(uint256 amount) internal {
        _balances[address(this)] = _balances[address(this)].sub(amount, "BEP20: burn amount exceeds balance");
        _totalSupply = _totalSupply.sub(amount);
        emit Transfer(address(this), address(0), amount);
    }

    function() external payable {}
}
