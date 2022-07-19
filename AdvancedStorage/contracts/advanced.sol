// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract advanced {
 uint[] public arr;
 
 function add(uint id) public{  //send function
    arr.push(id);
 }
 
 function get(uint i) view public returns(uint){
  return arr[i];
 }
 
 function getAll() view public returns(uint[] memory){
  return arr;
 }

 function length() view public returns(uint){
  return arr.length;
 }

}
