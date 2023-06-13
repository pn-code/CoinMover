"use client"
import CoinMoverForm from "@/components/home/CoinMoverForm";
import HeroSection from "@/components/home/HeroSection";
import { TransactionContext } from "@/context/TransactionContext";
import { useContext } from "react";

export default function Home() {
  const value = useContext(TransactionContext);
  console.log(value);
  return (
    <main className="w-full bg-gray-100 flex flex-col">
      <HeroSection />
      <CoinMoverForm />
    </main>
  );
}
