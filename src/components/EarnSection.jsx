"use client"

import { motion } from 'framer-motion';
import { FaGift, FaTrophy, FaDollarSign } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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
};

export default function EarnSection() {
  return (
    <section className="py-12 bg-[#08205D] text-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-white"
        >
          How to Earn
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="text-center p-6 bg-gray-100 rounded-lg shadow-md"
          >
            <motion.div
              whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
            >
              <FaGift className="w-12 h-12 mx-auto text-blue-500 mb-4" />
            </motion.div>
            <motion.h3
              whileHover={{ scale: 1.1, color: "#3B82F6", transition: { duration: 0.2 } }}
              className="text-xl font-semibold mb-2"
            >
              Complete Offers
            </motion.h3>
            <p>Participate in surveys, watch videos, and complete other offers to earn points.</p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="text-center p-6 bg-gray-100 rounded-lg shadow-md"
          >
            <motion.div
              whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
            >
              <FaTrophy className="w-12 h-12 mx-auto text-green-500 mb-4" />
            </motion.div>
            <motion.h3
              whileHover={{ scale: 1.1, color: "#10B981", transition: { duration: 0.2 } }}
              className="text-xl font-semibold mb-2"
            >
              Daily Challenges
            </motion.h3>
            <p>Complete daily challenges to earn bonus points and rewards.</p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="text-center p-6 bg-gray-100 rounded-lg shadow-md"
          >
            <motion.div
              whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
            >
              <FaDollarSign className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
            </motion.div>
            <motion.h3
              whileHover={{ scale: 1.1, color: "#F59E0B", transition: { duration: 0.2 } }}
              className="text-xl font-semibold mb-2"
            >
              Cash Out
            </motion.h3>
            <p>Redeem your points for cash, gift cards, and other rewards.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}