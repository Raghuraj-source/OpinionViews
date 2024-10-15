import { Button } from "@/components/ui/button"
import { Bell, MessageSquare, Gift, ChevronRight, DollarSign } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function UserHeader() {
  return (
    <header className="bg-[#08075c] p-6 px-10 py-4 flex justify-between items-center shadow-lg">
      <div className="flex items-center space-x-4">
      <Link href="/" className="flex items-center">
            <Image
              src="/logoo.png"
              alt="Your Logo"
              width={200}
              height={40}
              className="mr-2"
            />
          </Link>
        <Button variant="outline" className="text-[#ff9800] border-[#ff9800] hover:bg-[#ff9800] hover:text-white transition-colors duration-300">
          <Gift className="mr-2 h-4 w-4" /> Win up to $250!
        </Button>
        <Button variant="outline" className="text-[#4caf50] border-[#4caf50] hover:bg-[#4caf50] hover:text-white transition-colors duration-300">
          <ChevronRight className="mr-2 h-4 w-4" /> Download our app
        </Button>
      </div>
      <div className="flex items-center space-x-4">
        <div className="bg-[#1a3957] rounded-full px-4 py-2 flex items-center">
          <DollarSign className="text-[#4caf50] mr-2" />
          <span className="text-[#4caf50] font-bold">$0.05</span>
        </div>
        <Button variant="ghost" className="text-white hover:text-[#041104] transition-colors duration-300">Raghuraj</Button>
        <Bell className="text-[#4caf50] cursor-pointer hover:text-[#ff9800] transition-colors duration-300" />
        <MessageSquare className="text-[#4caf50] cursor-pointer hover:text-[#ff9800] transition-colors duration-300" />
      </div>
    </header>
  )
}