// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract simplestorage {
    string public data;
    
function setting(string memory _data) public {
    data = _data;
}
function getting() public view returns(string memory){
    return data;
}
}

