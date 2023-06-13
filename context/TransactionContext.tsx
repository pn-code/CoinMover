"use client";
import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "@/smart_contract/utils/constants";

export const TransactionContext = createContext({});
const { ethereum } = window;

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
  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      if (!ethereum) return alert("Please install MetaMask to proceed.");

      const accounts = await ethereum.request({ method: "eth_accounts" });
      console.log(accounts);
    };
    
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider value={"test"}>
      {children}
    </TransactionContext.Provider>
  );
};
