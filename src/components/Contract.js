// contract.js
import * as starknet from "starknet"; // Importing all exports as 'starknet'
import { useState } from "react";
import { ethers } from "ethers";
import contractABI from "../Contracts/artifacts/SocialFiNFT.json";

const contractAddress =
  "0x569ad62822cc090cff5b93d7878589b49e8ce1c1eaa8e4e07e6d1b28b812cf7";
const rpcEndpoint =
  "https://starknet-goerli.g.alchemy.com/v2/UKAYg9jv_1wGjWNq2B15U64qHDGzaCMd";

const SocialFiNFTContract = new starknet.Contract(contractAddress, contractABI);

const useStarkNetContract = () => {
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);

  const connectToStarkNet = async () => {
    try {
      const starknetProvider = new ethers.providers.JsonRpcProvider(
        rpcEndpoint
      );
      setProvider(starknetProvider);

      const starknetContract = new ethers.Contract(
        contractAddress,
        contractABI, // Use the imported contractABI directly
        starknetProvider
      );
      setContract(starknetContract);

      console.log("Connected to StarkNet:", starknetProvider, starknetContract);
    } catch (error) {
      console.error("Error connecting to StarkNet:", error);
    }
  };

  const mintPost = async () => {
    try {
      if (!contract || !provider) {
        console.error("Contract or provider not initialized");
        return;
      }

      const privateKey = "0xYourPrivateKey";
      const wallet = new ethers.Wallet(privateKey, provider);
      const connectedContract = contract.connect(wallet);

      const transaction = await connectedContract.mintPost();
      await transaction.wait();

      console.log("Post minted successfully!");
    } catch (error) {
      console.error("Error minting post:", error);
    }
  };

  return {
    connectToStarkNet,
    mintPost,
  };
};

export default useStarkNetContract;
