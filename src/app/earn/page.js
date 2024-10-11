// import EarnSection from "@/components/EarnSection";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import MainContent from "@/components/MainContent";
import { Ear, Import } from "lucide-react";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#08205D]">
      <Header />
      {/* <EarnSection /> */}
      <MainContent />
      <Footer />
    </div>
  );
}