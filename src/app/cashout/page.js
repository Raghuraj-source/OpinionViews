import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Hero from "@/components/hero";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import WithdrawalOptions from "@/components/WithdrawalOptions";
import { Import } from "lucide-react";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#08205D]">
      <Header />
      
     <Hero />
     <WithdrawalOptions />
     <HowItWorks />
     <Testimonials />
     <FAQ />
     <Footer  />
    </div>
  );
}