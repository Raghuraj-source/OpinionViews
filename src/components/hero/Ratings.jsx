import { Star } from 'lucide-react'

export default function Ratings() {
  return (
    <div className="mt-8 text-white text-center">
      <p className="text-sm mb-2">See our 1,000 reviews on</p>
      <div className="flex items-center justify-center">
        <span className="mr-2 font-bold">TRUSTPILOT</span>
        <div className="flex">
          {[1, 2, 3, 4].map((_, index) => (
            <Star key={index} className="w-5 h-5 fill-green-500 text-green-500" />
          ))}
          <Star className="w-5 h-5 fill-green-500 text-green-500" strokeWidth={3} />
        </div>
      </div>
    </div>
  )
}