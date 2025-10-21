// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test} from "../lib/forge-std/src/Test.sol";
import {Voting} from "../src/Voting.sol";

contract VotingTest is Test {
    Voting public voting;
    address public newAdmin = 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2;

    function setUp() public {
        voting = new Voting();
    }

    function testMakeAdmin() public {
        
        voting.makeAdmin(newAdmin);

        (bool success, bytes memory data) = address(voting).call(abi.encodeWithSignature("admins(address)", newAdmin));
        require(success, "call to admins failed");
        bool isAdmin = abi.decode(data, (bool));
        assertTrue(isAdmin, "newAdmin should be true in admins mapping");
    }
}
