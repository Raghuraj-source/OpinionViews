import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full bg-[#08205D] text-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-[#ff6f61] via-[#ff9f1c] to-[#2ec4b6] bg-clip-text text-transparent animate-fade-in drop-shadow-lg">
          Sign up and cashout
          <br />
          <span className="text-green-400">your earnings</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8 mt-4 max-w-2xl mx-auto">
          Use your earned coins on Opinion Views.com to withdraw PayPal, Bitcoin, VISA, Amazon & much more!
          <br />
          Crypto withdrawals start from $0.50, Stake withdrawals at $0.25
        </p>
        <Button className="bg-green-400 text-[#08205D] hover:bg-green-500 text-lg px-8 py-3">
          Sign up
        </Button>
      </div>
    </section>
  )
}