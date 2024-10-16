import { Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredOffers = [
  { name: "Video Poker", reward: "$13.19", icon: "🎰", platform: "android" },
  { name: "Random TD", reward: "$5.08", icon: "🎲", platform: "apple" },
  { name: "Spider Solitaire", reward: "$1.00", icon: "🕷️", platform: "windows" },
  { name: "Chaos Cruise", reward: "$23.15", icon: "🚢", platform: "android" },
  { name: "Vegas Keno", reward: "$46.13", icon: "🎰", platform: "apple" },
  { name: "Mystery Mansion", reward: "$10.00", icon: "🏰", platform: "windows" },
  { name: "Treasure Hunt", reward: "$15.50", icon: "🏴‍☠️", platform: "android" },
  { name: "Candy Crush", reward: "$8.75", icon: "🍬", platform: "apple" },
  { name: "Farm Frenzy", reward: "$12.30", icon: "🚜", platform: "windows" },
  { name: "Puzzle Quest", reward: "$9.99", icon: "🧩", platform: "android" }
];

export default function FeaturedOffers() {
  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="text-2xl font-bold mb-2 sm:mb-0">Earn on</h2>
        <div className="flex space-x-2">
          <Button variant="outline" className="text-[#4caf50] border-[#4caf50] hover:bg-[#4caf50] hover:text-white transition-colors duration-300">💻</Button>
          <Button variant="outline" className="text-[#4caf50] border-[#4caf50] hover:bg-[#4caf50] hover:text-white transition-colors duration-300">🍎</Button>
          <Button variant="outline" className="text-[#4caf50] border-[#4caf50] hover:bg-[#4caf50] hover:text-white transition-colors duration-300">🤖</Button>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Gift className="mr-2 h-5 w-5 text-[#ff9800]" /> Featured Offers
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {featuredOffers.map((offer, index) => (
          <div key={index} className="bg-gradient-to-r from-[#1a3957] to-[#2a4a6b] p-4 rounded-lg shadow-lg border border-[#2a4a6b] hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105">
            <div className="w-16 h-16 bg-[#0f2942] rounded-lg flex items-center justify-center text-3xl mb-2">
              {offer.icon}
            </div>
            <h4 className="font-semibold mb-1 text-white">{offer.name}</h4>
            <p className="text-[#4caf50] font-bold">{offer.reward}</p>
            <div className="mt-2 flex items-center space-x-2">
              {offer.platform === 'android' && <span className="text-xs bg-green-600 text-white px-2 py-1 rounded flex items-center"><span className="mr-1">🤖</span>Android</span>}
              {offer.platform === 'apple' && <span className="text-xs bg-gray-600 text-white px-2 py-1 rounded flex items-center"><span className="mr-1">🍎</span>iOS</span>}
              {offer.platform === 'windows' && <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded flex items-center"><span className="mr-1">💻</span>Windows</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}