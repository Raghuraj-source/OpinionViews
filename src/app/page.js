import { Button } from "@/components/ui/button";
// import { Hero } from '@/components/Hero' 
import { Header } from '@/components/Header'
import HeroSection from "@/components/hero/HeroSection";
import Statistics from "@/components/Statistics";
// import SignupForm from "@/components/SignUp";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#08205D]">
      <Header />
      {/* <Hero /> */}
      <HeroSection />
      <Statistics/>
    </div>
  );
}