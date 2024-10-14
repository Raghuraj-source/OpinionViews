"use client"

import Image from 'next/image'
import SignupForm from './SignUpForm'
import Ratings from './Ratings'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#0c2864] via-[#031552] to-[#080f50] py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
        <div className="w-full lg:w-2/3">
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-[#ff6f61] via-[#ff9f1c] to-[#2ec4b6] bg-clip-text text-transparent animate-fade-in drop-shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <motion.span 
                className="text-[#ff6f61] drop-shadow-md"
                whileHover={{ color: "#ff9f1c" }}
              >
                Get rewarded
              </motion.span> for Apps, Playing
              <br />
              games, and Taking Surveys
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-400 animate-fade-in drop-shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              Earn up to <motion.span 
                className="text-[#ff6f61] font-semibold drop-shadow-md"
                whileHover={{ color: "#ff9f1c" }}
              >$30.24</motion.span> per offer • <motion.span 
                className="text-[#ff6f61] font-semibold drop-shadow-md"
                whileHover={{ color: "#ff9f1c" }}
              >520</motion.span> available offers now
            </motion.p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            <OfferCard
              imageSrc="/netflix.png"
              title="Netflix"
              description="Start Free Trial"
              amount="$5.00"
              gradientFrom="#6e0f9b"
              gradientTo="#b22222"
              hoverColor="#ff6f61"
            />
            <OfferCard
              imageSrc="/DiceDreams.jpg"
              title="Dice Dreams"
              description="Reach Level 56"
              amount="$26.00"
              gradientFrom="#4c0a79"
              gradientTo="#b31fc7"
              hoverColor="#FF7F17"
            />
            <OfferCard
              imageSrc="/tiktok-logo-icon.png"
              title="TikTok"
              description="Sign up"
              amount="$25.00"
              gradientFrom="#6e0f9b"
              gradientTo="#b22222"
              hoverColor="#ff6f61"
            />
            {/* Add more offer cards here */}
          </div>
          <Ratings />
        </div>
        <motion.div 
          className="w-full lg:w-1/3 bg-[#2EC4B6] rounded-lg p-1 animate-fade-in-right lg:mt-0 mt-8"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <SignupForm />
        </motion.div>
      </div>
    </section>
  )
}



function OfferCard({ imageSrc, title, description, amount, gradientFrom, gradientTo, hoverColor }) {
  return (
    <motion.div 
      className={`bg-gradient-to-br from-[${gradientFrom}] to-[${gradientTo}] rounded-lg p-6 flex items-center space-x-4 animate-fade-in-up shadow-lg hover:shadow-xl transition-shadow duration-300 group`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <motion.div 
        className="w-16 h-16 bg-white rounded-lg flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <Image src={imageSrc} width={64} height={64} alt={`${title} logo`} className="object-cover" />
      </motion.div>
      <div>
        <motion.h3 
          className={`font-semibold text-white text-lg group-hover:text-[${hoverColor}] transition-colors duration-300`}
          whileHover={{ scale: 1.1 }}
        >
          {title}
        </motion.h3>
        <p className="text-sm text-gray-300">{description}</p>
        <motion.p 
          className="text-[#ff6f61] font-semibold text-lg mt-1"
          whileHover={{ scale: 1.1 }}
        >
          {amount}
        </motion.p>
      </div>
    </motion.div>
  )
}