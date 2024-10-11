import { Button } from "@/components/ui/button"
import Ratings from "./hero/Ratings"

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
          We've got an incredible range of money-making opportunities in the form of tasks waiting for you.
        </p>
        <div className="mb-10">
          <Ratings />
        </div>
        <Button className="bg-teal-500 hover:bg-teal-400 text-white text-lg px-10 py-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
          Sign Up Now
        </Button>
      </div>
    </div>
  )
}