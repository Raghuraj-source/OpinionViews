'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { DollarSign, Gift, MessageSquare, Award, Users } from "lucide-react"

const menuItems = [
  { name: 'Earn', icon: DollarSign, href: '/dashboard' },
  { name: 'Offers', icon: Gift, href: '/dashboard/offers' },
  { name: 'Surveys', icon: MessageSquare, href: '/surveys' },
  { name: 'Cashout', icon: DollarSign, href: '/cashout' },
  { name: 'Leaderboard', icon: Award, href: '/leaderboard' },
  { name: 'Rewards', icon: Gift, href: '/rewards' },
  { name: 'Affiliates', icon: Users, href: '/affiliates' },
]

export default function UserSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-[#08075c] p-4 space-y-2 overflow-y-auto flex-shrink-0">
      {menuItems.map((item) => (
        <Link href={item.href} key={item.name}>
          <Button
            variant="ghost"
            className={`w-full justify-start ${
              pathname === item.href
                ? 'bg-[#1a3957] text-[#4caf50]'
                : 'text-white hover:bg-[#1a3957] hover:text-[#4caf50]'
            } transition-colors duration-300`}
          >
            <item.icon className="mr-2 h-4 w-4" /> {item.name}
          </Button>
        </Link>
      ))}
    </aside>
  )
}