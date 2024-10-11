import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Hero from "@/components/hero";
import { Import } from "lucide-react";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#08205D]">
      <Header />
     <Hero />
     <Footer  />
    </div>
  );
}