const VotingABIc = [
    {
        "type": "constructor",
        "inputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "addCampaignCandidate",
        "inputs": [
            { "name": "_name", "type": "string", "internalType": "string" },
            { "name": "_campaign", "type": "string", "internalType": "string" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "addCandidate",
        "inputs": [
            { "name": "_name", "type": "string", "internalType": "string" },
            { "name": "_description", "type": "string", "internalType": "string" },
            { "name": "_feature", "type": "string", "internalType": "string" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "admins",
        "inputs": [
            { "name": "", "type": "address", "internalType": "address" }
        ],
        "outputs": [
            { "name": "", "type": "bool", "internalType": "bool" }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "createCampaign",
        "inputs": [
            { "name": "_startTime", "type": "uint104", "internalType": "uint104" },
            { "name": "_endTime", "type": "uint104", "internalType": "uint104" },
            { "name": "_name", "type": "string", "internalType": "string" },
            { "name": "_reason", "type": "string", "internalType": "string" },
            { "name": "initial", "type": "string", "internalType": "string" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "deletCandidate",
        "inputs": [
            { "name": "_name", "type": "string", "internalType": "string" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "deleteCampaign",
        "inputs": [
            { "name": "_name", "type": "string", "internalType": "string" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "getCandidateVotes",
        "inputs": [
            { "name": "_name", "type": "string", "internalType": "string" }
        ],
        "outputs": [
            { "name": "", "type": "uint256", "internalType": "uint256" }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "isAdmin",
        "inputs": [
            { "name": "_address", "type": "address", "internalType": "address" }
        ],
        "outputs": [
            { "name": "", "type": "bool", "internalType": "bool" }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "makeAdmin",
        "inputs": [
            { "name": "_newAdmin", "type": "address", "internalType": "address" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "owner",
        "inputs": [],
        "outputs": [
            { "name": "", "type": "address", "internalType": "address" }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "vote",
        "inputs": [
            { "name": "_name", "type": "string", "internalType": "string" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    }
]
export const VotingABI = [
    { "abi": [{ "type": "constructor", "inputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "addCampaignCandidate", "inputs": [{ "name": "_name", "type": "string", "internalType": "string" }, { "name": "_campaign", "type": "string", "internalType": "string" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "addCandidate", "inputs": [{ "name": "_name", "type": "string", "internalType": "string" }, { "name": "_description", "type": "string", "internalType": "string" }, { "name": "_feature", "type": "string", "internalType": "string" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "admins", "inputs": [{ "name": "", "type": "address", "internalType": "address" }], "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }], "stateMutability": "view" }, { "type": "function", "name": "createCampaign", "inputs": [{ "name": "_startTime", "type": "uint104", "internalType": "uint104" }, { "name": "_endTime", "type": "uint104", "internalType": "uint104" }, { "name": "_name", "type": "string", "internalType": "string" }, { "name": "_reason", "type": "string", "internalType": "string" }, { "name": "initial", "type": "string", "internalType": "string" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "deletCandidate", "inputs": [{ "name": "_name", "type": "string", "internalType": "string" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "deleteCampaign", "inputs": [{ "name": "_name", "type": "string", "internalType": "string" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "getCandidateVotes", "inputs": [{ "name": "_name", "type": "string", "internalType": "string" }], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }, { "type": "function", "name": "isAdmin", "inputs": [{ "name": "_address", "type": "address", "internalType": "address" }], "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }], "stateMutability": "view" }, { "type": "function", "name": "makeAdmin", "inputs": [{ "name": "_newAdmin", "type": "address", "internalType": "address" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "owner", "inputs": [], "outputs": [{ "name": "", "type": "address", "internalType": "address" }], "stateMutability": "view" }, { "type": "function", "name": "vote", "inputs": [{ "name": "_name", "type": "string", "internalType": "string" }], "outputs": [], "stateMutability": "nonpayable" }], "address": "0x9C0dDfBdEaEeAeEeEeEeEeEeEeEeEeEeEeEeEeEe" }
]