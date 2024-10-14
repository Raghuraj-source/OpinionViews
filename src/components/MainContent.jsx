import { Button } from "@/components/ui/button"
import Ratings from "./hero/Ratings"
import Image from "next/image"

export default function MainContent() {
  return (
    <div className="text-center py-24 bg-gradient-to-b from-navy-900 to-navy-800 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-[#ff6f61] via-[#ff9f1c] to-[#2ec4b6] bg-clip-text text-transparent animate-fade-in drop-shadow-lg">
          Earn money with Opinion Views
          <br />
          in the next <span className="text-teal-400 animate-pulse">15 minutes</span>
        </h1>
        <p className="mb-8 text-lg sm:text-2xl text-gray-300 max-w-2xl mt-4 mx-auto">
          We&apos;ve got an incredible range of money-making opportunities in the form of tasks waiting for you.
        </p>
        <div className="mb-10">
          <Ratings />
        </div>
        <Button className="bg-teal-500 hover:bg-teal-400 text-white text-lg px-10 py-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
          Sign Up Now
        </Button>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-[#e2ad3b] text-center mb-8">Recommended by</h2>
        <div className="flex flex-wrap justify-center items-center space-y-6 sm:space-y-0 sm:space-x-4">
        <div className="relative h-20 w-20">
          <Image src="/DiceDreams.jpg" alt="Paid From Surveys" layout="fill" objectFit="contain" />
        </div>
       
        <div className="relative h-20 w-20">
          <Image src="/netflix.png" alt="Survey Police" layout="fill" objectFit="contain" />
        </div>
        <div className="relative h-20 w-20">
          <Image src="/tiktok-logo-icon.png" alt="inBrain.ai" layout="fill" objectFit="contain" />
        </div>
        </div>
      </div>
    </div>
  )
}