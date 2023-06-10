import CoinMoverForm from "@/components/home/CoinMoverForm";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <main className="w-full bg-gray-100 flex flex-col">
      <HeroSection />
      <CoinMoverForm />
    </main>
  );
}
