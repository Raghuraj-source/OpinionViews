import { Rocket, Flame } from 'lucide-react'

export default function Statistics() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-gradient-to-br from-[#6e0f9b] to-[#b22222] rounded-lg shadow-lg p-6 flex justify-between items-center">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Rocket className="w-6 h-6 text-white mr-2" />
            <span className="text-2xl font-bold text-white">17m 12s</span>
          </div>
          <p className="text-sm text-gray-400">Average time until user makes<br />first cashout</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Flame className="w-6 h-6 text-white mr-2" />
            <span className="text-2xl font-bold text-white">$37.95</span>
          </div>
          <p className="text-sm text-gray-400">Average money earned by<br />users yesterday</p>
        </div>
        <div className="text-center">
          <span className="text-2xl font-bold text-white">$50,000+</span>
          <p className="text-sm text-gray-400">Total USD earned on OpinionViews</p>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Recommended by</h2>
        <div className="flex justify-between items-center">
          <img src="/paid-from-surveys.png" alt="Paid From Surveys" className="h-8" />
          <img src="/benzinga.png" alt="Benzinga" className="h-8" />
          <img src="/surveypolice.png" alt="Survey Police" className="h-8" />
          <img src="/inbrain-ai.png" alt="inBrain.ai" className="h-8" />
        </div>
      </div>
    </div>
  )
}