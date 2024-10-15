import { Gift } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredOffers = [
  { name: "Video Poker", reward: "$13.19", icon: "🎰", platform: "android" },
  { name: "Random TD", reward: "$5.08", icon: "🎲", platform: "apple" },
  { name: "Spider Solitaire", reward: "$1.00", icon: "🕷️", platform: "windows" },
  { name: "Chaos Cruise", reward: "$23.15", icon: "🚢", platform: "android" },
  { name: "Vegas Keno", reward: "$46.13", icon: "🎰", platform: "apple" },
]

export default function FeaturedOffers() {
  return (
    <div className="mb-8">
      
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Gift className="mr-2 h-5 w-5 text-[#ff9800]" /> Featured Offers
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {featuredOffers.map((offer, index) => (
          <div key={index} className="bg-[#1a3957] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#0f2942] rounded-lg flex items-center justify-center text-3xl mb-2">
              {offer.icon}
            </div>
            <h4 className="font-semibold mb-1">{offer.name}</h4>
            <p className="text-[#4caf50] font-bold">{offer.reward}</p>
            <div className="mt-2">
              {offer.platform === 'android' && <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">Android</span>}
              {offer.platform === 'apple' && <span className="text-xs bg-gray-600 text-white px-2 py-1 rounded">iOS</span>}
              {offer.platform === 'windows' && <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">Windows</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}