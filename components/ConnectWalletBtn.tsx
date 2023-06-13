"use client";
import { TransactionContext } from "@/context/TransactionContext";
import React, { useContext } from "react";

export default function ConnectWalletBtn() {
  const { connectWallet } = useContext(TransactionContext);
  return (
    <button
      onClick={connectWallet}
      type="button"
      className="bg-indigo-600 text-white p-4 rounded-md hover:bg-indigo-700 w-full"
    >
      Connect Wallet
    </button>
  );
}
