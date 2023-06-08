import CryptoCard from "@/components/home/CryptoCard";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <main className="w-full p-4 bg-gray-100 flex flex-col">
      <HeroSection />
      <CryptoCard />
    </main>
  );
}
