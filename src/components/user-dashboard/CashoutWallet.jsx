import { Card, CardContent } from "@/components/ui/card";
import { Wallet } from "lucide-react";

export default function CashoutWallet() {
  return (
    <div className="bg-gradient-to-r from-[#0e2763] to-[#4b73d8] p-8 sm:p-5 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-white mb-8 sm:mb-10">Cashout</h1>
      <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
        <Card className="bg-[#0f265e] w-full sm:w-auto sm:flex-grow rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-8 sm:p-10">
            <p className="text-[#9BA1AE] text-base leading-relaxed font-semibold font-sans">
              Use your earned coins on Opinion Views.com to withdraw PayPal, Bitcoin, VISA, Amazon & much more! Crypto withdrawals start from $0.50, Stake withdrawals at $0.25
            </p>
          </CardContent>
        </Card>
        <Card className="bg-[#0a1f50] w-full sm:w-64 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-8 flex flex-row sm:flex-col items-center justify-between sm:justify-center">
            <div className="flex items-center sm:flex-col">
              <Wallet className="w-12 h-12 text-[#00DC8A] mr-4 sm:mr-0 sm:mb-4" />
              <p className="text-[#9BA1AE] text-base sm:mb-2">Balance</p>
            </div>
            <p className="text-white text-4xl font-bold">$0.05</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}