import React from "react";
import { useWallet } from "../context/walletcontext";
import { ethers } from "ethers";
import { VotingABI } from "../abi/Voting";

const VotingContract = () => {
    const { signer } = useWallet();
    const [contract, setContract] = React.useState<ethers.Contract | null>(null);


    const CONTRACT_ADDRESS = '0x30A06DaD0858a86624bAa3bFA9F260aAa13d4ED4';


    React.useEffect(() => {
        if (signer) {
            const votingContract = new ethers.Contract(CONTRACT_ADDRESS, VotingABI[0].abi, signer);
            setContract(votingContract);
        }
    }, [signer]);


    async function makeAdmin() {
        const admin = '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4';
        if (!contract) return console.warn("Contract not ready yet");
        try {
            const tx = await contract.makeAdmin(admin);
            await tx.wait();
            console.log("Admin made:", tx);
        } catch (error) {
            console.error(error);
        }
    }


    const checkIsAdmin = async () => {
        const admin = '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4';
        if (!contract) return console.warn("Contract not ready yet");
        try {
            const isAdmin = await contract.isAdmin(admin);
            console.log("Is admin?", isAdmin);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div>
                <button onClick={makeAdmin} disabled={!contract}>Make Admin</button>
                <button onClick={checkIsAdmin} disabled={!contract}>Check Admin</button>
            </div>
            <div>

            </div>
        </>
    );
}

export default VotingContract;
