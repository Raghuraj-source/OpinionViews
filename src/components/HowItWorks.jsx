
import Image from 'next/image'
import { Card } from "@/components/ui/card"

const steps = [
  { 
    title: "1. Select an offer",
    description: "Explore our earn page and choose from our wide variety of offers to complete.",
    image: "/netflix.png" 
  },
  { 
    title: "2. Earn coins",
    description: "Watch entertaining videos, play games, fill out surveys, or simply download apps.",
    image: "/DiceDreams.jpg" 
  },
  { 
    title: "3. Get rewarded",
    description: "Once you reach the withdrawal threshold, choose your reward on the Cashout page.",
    image: "/tiktok-logo-icon.png" 
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-[#08205D] p-8 pt-0">
      <h2 className="text-5xl font-bold font-sans mb-6 text-center text-[#e2ad3b] ">How it works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <Card key={index} className="bg-gradient-to-br from-[#6e0f9b] to-[#b22222] text-foreground p-6 flex flex-col items-center">
            <div className="w-full aspect-square relative mb-4">
              <Image
                src={step.image}
                alt={step.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h3 className="font-bold mb-2 text-xl">{step.title}</h3>
            <p className="text-center">{step.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}