"use client";
import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "@/smart_contract/utils/constants";

export const TransactionContext = createContext({
  connectWallet: () => console.log("Populating function"),
});

let ethereum: any

if (typeof window !== 'undefined') {
  ethereum = (window as any).ethereum;
}

const getEthereumContract = async () => {
  const provider = new ethers.WebSocketProvider(ethereum);
  const signer = await provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  console.log({ provider, signer, transactionContract });
};

export const TransactionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [connectedAccount, setConnectedAccount] = useState([]);

  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      if (!ethereum) return alert("Please install MetaMask to proceed.");

      const accounts = await ethereum.request({ method: "eth_accounts" });
      console.log(accounts);
    };

    checkIfWalletIsConnected();
  }, []);

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask to proceed.");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setConnectedAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TransactionContext.Provider value={{ connectWallet }}>
      {children}
    </TransactionContext.Provider>
  );
};
