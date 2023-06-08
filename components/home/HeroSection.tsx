import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className="flex flex-col gap-4 lg:flex-row lg:gap-[15%] items-center justify-center pt-[70%] lg:pt-0 h-[90vh]">
      <section className="flex flex-col gap-5 items-center lg:items-start">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Send Crypto Across The World!
        </h2>
        <p className="text-[16px] text-gray-900">
          Explore the crypto world. Buy and sell cryptocurrencies easily on
          CoinMover
        </p>
        <button className="bg-indigo-600 text-white p-4 rounded-md hover:bg-indigo-700 w-full">
          Connect Wallet
        </button>
        {/* Display Characteristics Here */}
        <section className="text-sm mt-10 w-full flex flex-col items-center">
          {/* Top Section */}
          <section className="flex w-full">
            <div className="border-t-2 border-l-2 border-r-2 border-gray-900 rounded-tl-md p-4 flex-1 text-center">
              Reliability
            </div>
            <div className="border-t-2 border-gray-900 p-4 flex-1 text-center">
              Security
            </div>
            <div className="border-t-2 border-l-2 border-r-2 border-gray-900 rounded-tr-md p-4 flex-1 text-center">
              Ethereum
            </div>
          </section>
          {/* Bottom Section */}
          <section className="flex w-full">
            <div className="border-2 border-gray-900 rounded-bl-md p-4 flex-1 text-center">
              Web 3.0
            </div>
            <div className="border-t-2 border-b-2 border-gray-900 p-4 flex-1 text-center">
              Low Fees
            </div>
            <div className="border-2 border-gray-900 rounded-br-md p-4 flex-1 text-center">
              Blockchain
            </div>
          </section>
        </section>
      </section>
      <Image
        src="/hero-img.jpg"
        alt="the moon"
        height={500}
        width={500}
        className="rounded-sm mt-5 lg:mt-0"
      />
    </section>
  );
}
