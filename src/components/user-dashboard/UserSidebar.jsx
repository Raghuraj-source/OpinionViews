'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { DollarSign, Gift, MessageSquare, Award, Users } from "lucide-react";

const menuItems = [
  { name: 'Earn', icon: DollarSign, href: '/dashboard' },
  { name: 'Offers', icon: Gift, href: '/dashboard/offers' },
  { name: 'Surveys', icon: MessageSquare, href: '/dashboard/surveys' },
  { name: 'Cashout', icon: DollarSign, href: '/dashboard/user-cashout' },
  { name: 'Leaderboard', icon: Award, href: '/dashboard/leaderboard' },
  { name: 'Rewards', icon: Gift, href: '/dashboard/rewards' },
  { name: 'Affiliates', icon: Users, href: '/dashboard/affiliates' },
];

export default function Sidebar({ isOpen }) {
  const pathname = usePathname();

  return (
    <aside className={`fixed top-16 left-0 h-[calc(100%-4rem)] bg-[#08075c] p-4 space-y-2 overflow-y-auto flex-shrink-0 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 w-40 z-20`}>
      {menuItems.map((item) => (
        <Link href={item.href} key={item.name}>
          <Button
            variant="ghost"
            className={`w-full justify-start ${pathname === item.href
                ? 'bg-[#7842db] text-[#000000]'
                : 'text-white hover:bg-[#1a3957] hover:text-[#4caf50]'
              } transition-colors duration-300`}
          >
            <item.icon className="mr-2 h-4 w-4" /> {item.name}
          </Button>
        </Link>
      ))}
    </aside>
  );
}