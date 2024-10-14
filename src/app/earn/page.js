// import EarnSection from "@/components/EarnSection";
import Categories from "@/components/Categories";
import EarnSections from "@/components/EarnSections";
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
      <Categories />
      <HowItWorks />
      <EarnSections />
      <NumberOne />
      <FAQ />
      <Footer />
    </div>
  );
}