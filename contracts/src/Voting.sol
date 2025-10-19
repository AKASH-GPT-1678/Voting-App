// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Voting {
    address public owner;
    mapping(address => bool) admins;

    struct Candidate {
        string name;
        string description;
        string feature;
        uint votes;
    }
    struct Campaign {
        string name;
        uint104 startTime;
        uint104 endTime;
        Candidate[] candidates;
        string reason;
    }

    mapping(string => Candidate) candidates;
    mapping(string => Campaign) campaigns;

    constructor() {
        owner = msg.sender;
    }

    function makeAdmin(address _newAdmin) public {
        require(
            msg.sender == owner || admins[msg.sender],
            "Only owner or admins can make admin"
        );
        admins[_newAdmin] = true;
    }

    function isAdmin(address _address) public view returns (bool) {
        return admins[_address];
    }
    function addCandidate(
        string memory _name,
        string memory _description,
        string memory _feature
    ) public {
        candidates[_name] = Candidate({
            name: _name,
            description: _description,
            feature: _feature,
            votes: 0
        });
    }

    function addCampaignCandidate(string memory _name, string memory _campaign) public {
        require(bytes(candidates[_name].name).length > 0, "Candidate does not exist");
        require(bytes(campaigns[_campaign].name).length > 0, "Campaign does not exist");

        campaigns[_campaign].candidates.push(Candidate({
            name: _name,
            description: candidates[_name].description,
            feature: candidates[_name].feature,
            votes: 0
        }));


    }

    function createCampaign(uint _startTime, uint _endTime) public {}
}
