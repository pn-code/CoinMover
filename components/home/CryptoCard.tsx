import Image from "next/image";
import React from "react";
import { Info } from "lucide-react";

export default function CryptoCard() {
  return (
    <div className="relative w-fit">
      <Image
        className="rounded-md border-2 border-white"
        src="/card-img.jpg"
        alt="space picture"
        width={400}
        height={400}
      />
      <section className="text-white absolute bottom-4 left-4">
        <span className="text-sm">Address</span>
        <p className="font-bold">Ethereum</p>
      </section>
      <Info className="right-4 absolute top-4" color="white"/>
    </div>
  );
}
