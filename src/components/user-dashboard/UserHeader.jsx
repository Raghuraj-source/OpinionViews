import { Button } from "@/components/ui/button";
import { Bell, MessageSquare, Gift, ChevronRight, DollarSign, Menu } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';

export default function Header({ toggleSidebar }) {
  return (
    <header className="bg-[#08075c] p-4 flex justify-between items-center shadow-lg fixed w-full z-10">
      <div className="flex items-center space-x-2 md:space-x-4">
        <Button variant="ghost" className="md:hidden" onClick={toggleSidebar}>
          <Menu className="h-6 w-6 text-[#4caf50]" />
        </Button>
        <Link href="/" className="flex items-center">
          <Image
            src="/logoo.png"
            alt="Your Logo"
            width={200}
            height={40}
            className="mr-2"
          />
        </Link>
        <Button variant="outline" className="hidden md:flex text-[#ff9800] border-[#ff9800] hover:bg-[#ff9800] hover:text-white transition-colors duration-300">
          <Gift className="mr-2 h-4 w-4" /> Win up to $100!
        </Button>
        {/* <Button variant="outline" className="hidden lg:flex text-[#4caf50] border-[#4caf50] hover:bg-[#4caf50] hover:text-white transition-colors duration-300">
          <ChevronRight className="mr-2 h-4 w-4" /> Download our app
        </Button> */}
      </div>
      <div className="flex items-center space-x-2 md:space-x-4">
        <div className="bg-[#1a3957] rounded-full px-2 py-1 md:px-4 md:py-2 flex items-center">
          <DollarSign className="text-[#4caf50] mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5" />
          <span className="text-[#4caf50] font-bold text-sm md:text-base">$0.05</span>
        </div>
        <Button variant="ghost" className="hidden md:flex text-white hover:text-[#000000] transition-colors duration-300">Raghuraj</Button>
        <Bell className="text-[#4caf50] cursor-pointer hover:text-[#ff9800] transition-colors duration-300 h-5 w-5 md:h-6 md:w-6" />
        <MessageSquare className="text-[#4caf50] cursor-pointer hover:text-[#ff9800] transition-colors duration-300 h-5 w-5 md:h-6 md:w-6" />
      </div>
    </header>
  );
}