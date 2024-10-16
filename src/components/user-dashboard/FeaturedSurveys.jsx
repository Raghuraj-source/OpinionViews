import { MessageSquare } from "lucide-react"

export default function FeaturedSurveys() {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <MessageSquare className="mr-2 h-5 w-5 text-[#ff9800]" /> Featured Surveys
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="bg-[#1a3957] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#0f2942] rounded-lg flex items-center justify-center text-3xl mb-2">
              📝
            </div>
            <h4 className="font-semibold mb-1">Survey {index + 1}</h4>
            <p className="text-[#4caf50] font-bold">${(Math.random() * 5).toFixed(2)}</p>
            <div className="mt-2">
              <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">5 min</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}