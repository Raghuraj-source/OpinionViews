import { Card } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons"

const surveyPartners = [
  { name: 'BitLabs', logo: '/spotify.png', rating: 5 },
  { name: 'CPX Research', logo: '/dogecoin.png', rating: 5 },
  { name: 'Your-Surveys', logo: '/survey.jpg', rating: 5 },
  { name: 'Inbrain', logo: '/zalando.png', rating: 2 },
  { name: 'Pollfish', logo: '/apple.png', rating: 3 },
  { name: 'TapResearch', logo: '/google-play.webp', rating: 3 },
]

export default function SurveyPartnersSection() {
  return (
    <div className="bg-gradient-to-br from-[#6e0f9b] to-[#a52424] p-6 rounded-lg">
      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-bold text-[#3bdf50] mr-2">Survey Partners</h2>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <QuestionMarkCircledIcon className="text-gray-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Our trusted survey partners</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {surveyPartners.map((partner) => (
          <SurveyPartnerCard key={partner.name} partner={partner} />
        ))}
      </div>
    </div>
  )
}

function SurveyPartnerCard({ partner }) {
  return (
    <Card className="bg-[#31097c] p-4 flex flex-col items-center">
      <img src={partner.logo} alt={partner.name} className="h-12 mb-2" />
      <h3 className="text-white text-sm font-semibold mb-1">{partner.name}</h3>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} filled={i < partner.rating} />
        ))}
      </div>
    </Card>
  )
}

function Star({ filled }) {
  return (
    <svg
      className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-600'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}