// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract SimpleStorage {

    // this will get initialized to 0
    uint256 favoriteNumber;

    struct People {
        string name;
        uint age;
    }

    People[] public people;
    mapping(string => uint256) public dict_name;

    function store(uint256 arg_FN) public returns(uint256){
        favoriteNumber = arg_FN;
        return arg_FN;
    }

    function retrieve() public view returns(uint256){
        return favoriteNumber;
    }

    function andPerson(string memory arg_name, uint256 arg_age) public{

        people.push(People(arg_name, arg_age));
        dict_name[arg_name] = arg_age;

    }

}