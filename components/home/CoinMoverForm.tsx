"use client";

import { useState } from "react";
import CryptoCard from "./CryptoCard";

export default function CoinMoverForm() {
  const [recipientAddress, setRecipientAddress] = useState("");
  const [amount, setAmount] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleSubmit() {
    setLoading(true);
    try {
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-4 flex flex-col gap-4 lg:flex-row lg:gap-[30%] items-center justify-center pt-10 lg:pt-0 h-[90vh] bg-gray-900 text-white">
      <section className="max-w-[400px] flex flex-col gap-2">
        <h2 className="text-3xl lg:text-4xl font-bold">Send coins instantly</h2>

        <p className="text-gray-100">
          Simply fill out the form provided and click send to the designated
          address.
        </p>

        <p className="text-amber-300 text-sm">
          Yes, it is that easy. Get started today!
        </p>
      </section>

      <section>
        <CryptoCard />
        <form className="rounded-md flex flex-col gap-4 mt-4">
          <section className="flex flex-col gap-1">
            <label htmlFor="recipient_address">Recipient&apos;s Address</label>
            <input
              type="text"
              id="recipient_address"
              className="bg-blue-900/50 p-1 rounded-sm"
              onChange={(e) => setRecipientAddress(e.target.value)}
              value={recipientAddress}
            />
          </section>

          <section className="flex flex-col gap-1">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              className="bg-blue-900/50 p-1 rounded-sm"
              onChange={(e) => setAmount(Number(e.target.value))}
              value={amount}
            />
          </section>

          <section className="flex flex-col gap-1">
            <label htmlFor="keyword">Keyword (GIF)</label>
            <input
              type="text"
              id="keyword"
              className="bg-blue-900/50 p-1 rounded-sm"
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
            />
          </section>

          <section className="flex flex-col gap-1">
            <label htmlFor="message">Message</label>
            <input
              type="text"
              id="message"
              className="bg-blue-900/50 p-1 rounded-sm"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </section>

          <button
            className="bg-indigo-600 p-4 rounded-md hover:bg-indigo-800 mt-4 disabled:bg-gray-700"
            type="button"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Now"}
          </button>
        </form>
      </section>
    </div>
  );
}
