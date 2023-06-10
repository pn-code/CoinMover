"use client";

import CryptoCard from "./CryptoCard";

export default function CoinMoverForm() {
  function handleSubmit() {}

  return (
    <div className="p-4 flex flex-col gap-4 lg:flex-row lg:gap-[30%] items-center justify-center lg:pt-0 h-[90vh] bg-gray-900 text-white">
      <section className="max-w-[400px] flex flex-col gap-2">
        <h2 className="text-2xl">Send coins instantly</h2>

        <p className="text-gray-100">
          Simply fill out the form provided and click send to the designated
          address.
        </p>

        <p className="text-amber-300 text-sm">Yes, it is that easy. Get started today!</p>
      </section>

      <section>
        <CryptoCard />
        <form className="rounded-md flex flex-col gap-4 mt-4">
          <section className="flex flex-col gap-1">
            <label htmlFor="recepient_address">Recepient's Address</label>
            <input
              type="text"
              id="recepient_address"
              className="bg-blue-900/50 p-1 rounded-sm"
            />
          </section>

          <section className="flex flex-col gap-1">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              id="amount"
              className="bg-blue-900/50 p-1 rounded-sm"
            />
          </section>

          <section className="flex flex-col gap-1">
            <label htmlFor="keyword">Keyword (GIF)</label>
            <input
              type="text"
              id="keyword"
              className="bg-blue-900/50 p-1 rounded-sm"
            />
          </section>

          <section className="flex flex-col gap-1">
            <label htmlFor="message">Message</label>
            <input
              type="text"
              id="message"
              className="bg-blue-900/50 p-1 rounded-sm"
            />
          </section>

          <button
            className="bg-indigo-600 p-4 rounded-md hover:bg-indigo-800 mt-4"
            type="button"
            onClick={handleSubmit}
          >
            Send Now
          </button>
        </form>
      </section>
    </div>
  );
}
