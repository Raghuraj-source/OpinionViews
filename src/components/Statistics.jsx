"use client"

import { Rocket, Flame, DollarSign } from 'lucide-react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Statistics() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="bg-gradient-to-br from-[#6e0f9b] to-[#b22222] rounded-2xl shadow-2xl p-8 flex flex-col sm:flex-row justify-between items-center space-y-8 sm:space-y-0 sm:space-x-8"
      >
        <motion.div 
          variants={itemVariants} 
          className="text-center flex-1"
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <motion.div 
            className="flex items-center justify-center mb-4"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Rocket className="w-8 h-8 text-yellow-300 mr-3" />
            <motion.span 
              className="text-3xl font-bold text-white"
              whileHover={{ scale: 1.1, color: "#FDE68A", transition: { duration: 0.2 } }}
            >
              17m 12s
            </motion.span>
          </motion.div>
          <p className="text-sm text-gray-200">Average time until user makes<br />first cashout</p>
        </motion.div>
        <motion.div 
          variants={itemVariants} 
          className="text-center flex-1"
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <motion.div 
            className="flex items-center justify-center mb-4"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Flame className="w-8 h-8 text-orange-400 mr-3" />
            <motion.span 
              className="text-3xl font-bold text-white"
              whileHover={{ scale: 1.1, color: "#FDBA74", transition: { duration: 0.2 } }}
            >
              $37.95
            </motion.span>
          </motion.div>
          <p className="text-sm text-gray-200">Average money earned by<br />users yesterday</p>
        </motion.div>
        <motion.div 
          variants={itemVariants} 
          className="text-center flex-1"
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <motion.div 
            className="flex items-center justify-center mb-4"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <DollarSign className="w-8 h-8 text-green-400 mr-3" />
            <motion.span 
              className="text-3xl font-bold text-white"
              whileHover={{ scale: 1.1, color: "#86EFAC", transition: { duration: 0.2 } }}
            >
              $50,000+
            </motion.span>
          </motion.div>
          <p className="text-sm text-gray-200">Total USD earned on OpinionViews</p>
        </motion.div>
      </motion.div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mt-16"
      >
        <motion.h2 
          variants={itemVariants} 
          className="text-3xl font-bold text-white text-center mb-10"
          whileHover={{ scale: 1.05, color: "#E2AD3B", transition: { duration: 0.2 } }}
        >
          Recommended by
        </motion.h2>
        <motion.div variants={containerVariants} className="flex flex-wrap justify-center items-center gap-8">
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.2 } }}
            className="relative h-24 w-24 bg-white rounded-full p-2 shadow-lg"
          >
            <Image src="/DiceDreams.jpg" alt="Paid From Surveys" layout="fill" objectFit="contain" className="rounded-full" />
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: -5, transition: { duration: 0.2 } }}
            className="relative h-24 w-24 bg-white rounded-full p-2 shadow-lg"
          >
            <Image src="/netflix.png" alt="Survey Police" layout="fill" objectFit="contain" className="rounded-full" />
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.2 } }}
            className="relative h-24 w-24 bg-white rounded-full p-2 shadow-lg"
          >
            <Image src="/tiktok-logo-icon.png" alt="inBrain.ai" layout="fill" objectFit="contain" className="rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}