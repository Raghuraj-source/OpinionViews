import { Card } from "@/components/ui/card";
import Image from 'next/image';

const EarnOption = ({ title, description, earnings, imageSources }) => (
  <Card className="bg-gradient-to-br from-[#4c0a79] to-[#b31fc7] p-6 flex flex-col justify-between rounded-xl overflow-hidden transform transition-all hover:scale-105 duration-300">
    <div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm mb-4">{description}</p>
    </div>
    
    <div className="relative h-40 w-full overflow-hidden rounded-lg mt-4">
      {/* Main Background Image */}
      <Image
        src={imageSources[0]}
        alt={`${title} - main`}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
      
      {/* Overlaying Smaller Images */}
      <div className="absolute bottom-2 left-2 h-16 w-16 rounded-lg overflow-hidden border-2 border-none">
        <Image
          src={imageSources[1]}
          alt={`${title} - secondary`}
          layout="fill"
          objectFit="cover"
          className="animate-float"
        />
      </div>
      <div className="absolute bottom-2 right-2 h-16 w-16 rounded-lg overflow-hidden border-2 border-none">
        <Image
          src={imageSources[2]}
          alt={`${title} - tertiary`}
          layout="fill"
          objectFit="cover"
          className="animate-float"
        />
      </div>
    </div>

    <div className="text-white font-semibold mt-4">
      <p className="text-sm text-slate-400">Earn {earnings.type}</p>
      <p className="text-xl">{earnings.amount}</p>
    </div>
  </Card>
);

export default function EarnSections() {
  return (
    <section className="bg-[#08205D] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#e2ad3b] text-center mb-12">Best ways to earn</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <EarnOption
            title="Play games"
            description="In order to attract more players, gaming companies want to pay you to play their games. Let's play!"
            earnings={{type: "per game", amount: "$0.50 - $120"}}
            imageSources={["/DiceDreams.jpg", "/apple.png", "/DiceDreams.jpg"]}
          />
          <EarnOption
            title="Complete offers"
            description="Get to know new companies by trying their apps while you earn money. It's time to get paid for using apps!"
            earnings={{type: "per app", amount: "$1.00 - $75"}}
            imageSources={["/tiktok-logo-icon.png", "/DiceDreams.jpg", "/netflix-icon.jpg"]}
          />
          <EarnOption
            title="Join surveys"
            description="Companies need your opinion to create better products and services. That's why they pay for your feedback."
            earnings={{type: "per 5-10 min survey", amount: "$1.00"}}
            imageSources={["/survey.jpg", "/spotify.png", "/google-play.webp"]}
          />
        </div>
      </div>
    </section>
  );
}