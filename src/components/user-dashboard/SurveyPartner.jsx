
import { Card, CardContent } from "@/components/ui/card"

const SurveyPartner = () => {
  const partners = [
    { id: 1, name: "TimeWall", logo: "/apple.png", bonus: 20, rating: 5, bg: "bg-gradient-to-b from-[#1f3d2d] to-[#152a1e]" },
    { id: 2, name: "AdGate", logo: "/spotify.png", bonus: 50, rating: 5, bg: "bg-gradient-to-b from-[#1c2c3d] to-[#131e2a]" },
    { id: 3, name: "Monlix", logo: "/netflix.png", bonus: 0, rating: 5, bg: "bg-gradient-to-b from-[#25282c] to-[#1a1c1e]" },
    { id: 4, name: "Torox", logo: "/diceDreams.jpg", bonus: 50, rating: 5, bg: "bg-gradient-to-b from-[#2b2438] to-[#1d1826]" },
    { id: 5, name: "MM WALL", logo: "/paypal.png", bonus: 50, rating: 5, bg: "bg-gradient-to-b from-[#2d2c1f] to-[#1e1d15]" },
    { id: 6, name: "Ayet Studios", logo: "/google-play.webp", bonus: 50, rating: 4, bg: "bg-gradient-to-b from-[#3d2626] to-[#2a1a1a]" },
    { id: 7, name: "Adscend", logo: "/stream.webp", bonus: 50, rating: 3, bg: "bg-gradient-to-b from-[#1f3a3d] to-[#15282a]" },
    { id: 8, name: "Loo", logo: "/dogecoin.png", bonus: 0, rating: 2, bg: "bg-gradient-to-b from-[#25282c] to-[#1a1c1e]" },
  ];

  return (
    <div className="p-2 bg-[#08205D]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 text-[#00e701]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 12 10.125 2.625 2.625 0 0 0 12 4.875Z" />
          </svg>
          Survey Partners
        </h2>
        <button className="text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {partners.map((partner) => (
          <Card key={partner.id} className={`${partner.bg} border-none rounded-lg overflow-hidden`}>
            <CardContent className="p-3 flex flex-col justify-between h-[140px]">
              <div className="flex items-center justify-between">
                <img src={partner.logo} alt={partner.name} className="h-8" />
                {partner.bonus > 0 && (
                  <span className="text-[#00e701] text-xs font-semibold px-2 py-1 bg-[#1e2329] rounded-full">
                    +{partner.bonus}%
                  </span>
                )}
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">{partner.name}</h3>
                <div className="flex text-yellow-400 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>{i < partner.rating ? "★" : "☆"}</span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default SurveyPartner