import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type Candidate, candidateSchema } from "../validations/candidate";
import { useWallet } from "../context/walletcontext";
import { ethers } from "ethers";
import React from "react";
import { VotingABI } from "../abi/Voting";
const CandidateForm = () => {
    const { signer } = useWallet();
    const [contract, setContract] = React.useState<ethers.Contract | null>(null);


    const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;


    React.useEffect(() => {
        if (signer) {
            const votingContract = new ethers.Contract(CONTRACT_ADDRESS, VotingABI[0].abi, signer);
            setContract(votingContract);
        }
    }, [signer]);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<Candidate>({
        defaultValues: {
            name: "",
            description: "",
            feature: "",
        },
        resolver: zodResolver(candidateSchema),
    });

    const onSubmit: SubmitHandler<Candidate> = async (data) => {
        console.log("✅ Submitted Data:", data);
        const tx = await contract?.addCandidate(data.name, data.description, data.feature);
        await tx.wait();
        console.log("Candidate added:", tx);

        reset();
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6 border">
            <h2 className="text-2xl font-semibold mb-6 text-center">
                Candidate Form
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
         
                <div>
                    <label className="block font-medium mb-1">Name</label>
                    <input
                        {...register("name")}
                        type="text"
                        placeholder="Enter candidate name"
                        className={`w-full p-2 border rounded-xl focus:outline-none focus:ring-2 ${errors.name ? "border-red-500" : "border-gray-300"
                            }`}
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                </div>


                <div>
                    <label className="block font-medium mb-1">Description</label>
                    <textarea
                        {...register("description")}
                        placeholder="Enter candidate description"
                        className={`w-full p-2 border rounded-xl focus:outline-none focus:ring-2 ${errors.description ? "border-red-500" : "border-gray-300"
                            }`}
                        rows={3}
                    />
                    {errors.description && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.description.message}
                        </p>
                    )}
                </div>


                <div>
                    <label className="block font-medium mb-1">Feature</label>
                    <input
                        {...register("feature")}
                        type="text"
                        placeholder="Enter candidate feature"
                        className={`w-full p-2 border rounded-xl focus:outline-none focus:ring-2 ${errors.feature ? "border-red-500" : "border-gray-300"
                            }`}
                    />
                    {errors.feature && (
                        <p className="text-red-500 text-sm mt-1">{errors.feature.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition disabled:opacity-60"
                >
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default CandidateForm;
