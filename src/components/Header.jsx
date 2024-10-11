'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, User, UserPlus, Wallet, LogIn } from 'lucide-react';
import Image from 'next/image';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#08075c] text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logoo.png"
              alt="Your Logo"
              width={200}
              height={40}
              className="mr-2"
            />
          </Link>
          <nav className="hidden md:flex items-center ml-20 space-x-10">
            <Link href="/earn" className="flex items-center text-[#2dd327] hover:text-[#227a17] transition-colors">
              <Wallet className="w-7 h-7 mr-2" />
              <span className="text-xl font-bold">Earn</span>
            </Link>
            <Link href="/cashout" className="flex items-center text-[#e47328] hover:text-[#c26a22] transition-colors">
              <LogIn className="w-7 h-7 mr-2" />
              <span className="text-xl font-bold">Cashout</span>
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <Button variant="ghost" className="text-gray-300 hover:text-black">
            <User className="w-5 h-5 mr-2" />
            <span>Sign In</span>
          </Button>
          <Button className="bg-[#00dc81] hover:bg-[#00b368] text-black">
            <UserPlus className="w-5 h-5 mr-2" />
            <span>Sign Up</span>
          </Button>
        </div>
        <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="w-6 h-6" />
        </Button>
      </div>
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-[#08075c] p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="flex flex-col space-y-4">
            <Link href="/earn" className="flex items-center text-gray-300 hover:text-white transition-colors">
              <Wallet className="w-5 h-5 mr-2" />
              <span>Earn</span>
            </Link>
            <Link href="/cashout" className="flex items-center text-gray-300 hover:text-white transition-colors">
              <LogIn className="w-5 h-5 mr-2" />
              <span>Cashout</span>
            </Link>
          </nav>
          <div className="mt-4 space-y-2">
            <Button variant="ghost" className="w-full text-gray-300 hover:text-black justify-start">
              <User className="w-5 h-5 mr-2" />
              <span>Sign In</span>
            </Button>
            <Button className="w-full bg-[#00dc81] hover:bg-[#00b368] text-white justify-start">
              <UserPlus className="w-5 h-5 mr-2" />
              <span>Sign Up</span>
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
}