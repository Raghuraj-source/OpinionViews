import { Card, CardContent } from "@/components/ui/card"
import { Wallet } from "lucide-react"

export default function CashoutWallet() {
  return (
    <div className="bg-[#14161B] p-4 sm:p-6 ">
      <h1 className="text-2xl font-bold text-white mb-4 sm:mb-6">Cashout</h1>
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <Card className="bg-[#1C1F26] w-full sm:w-auto sm:flex-grow">
          <CardContent className="p-4 sm:p-6">
            <p className="text-[#9BA1AE] text-sm leading-relaxed">
              Use your earned coins on Opinion Views.com to withdraw PayPal, Bitcoin, VISA, Amazon & much more! Crypto withdrawals start from $0.50, Stake withdrawals at $0.25
            </p>
          </CardContent>
        </Card>
        <Card className="bg-[#1C1F26] w-full sm:w-40">
          <CardContent className="p-4 flex flex-row sm:flex-col items-center justify-between sm:justify-center">
            <div className="flex items-center sm:flex-col">
              <Wallet className="w-8 h-8 text-[#00DC8A] mr-3 sm:mr-0 sm:mb-2" />
              <p className="text-[#9BA1AE] text-sm sm:mb-1">Balance</p>
            </div>
            <p className="text-white text-2xl font-bold">$0.05</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}