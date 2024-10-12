// import EarnSection from "@/components/EarnSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import MainContent from "@/components/MainContent";
import NumberOne from "@/components/NumberOne";
import Testimonials from "@/components/Testimonials";
import { Ear, Import } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#08205D]">
      <Header />
      {/* <EarnSection /> */}
      <MainContent />
      <HowItWorks />
      <div className="mb-2"> {/* Reduced bottom margin */}
        <NumberOne />
      </div>
      <div className="mt-2"> {/* Reduced top margin */}
        <Testimonials />
      </div>
      <FAQ />
      <Footer />
    </div>
  );
}