"use client"

import { Card } from "@/components/ui/card";
import { 
  GamepadIcon, 
  ClipboardListIcon, 
  SmartphoneIcon, 
  DicesIcon, 
  UserPlusIcon, 
  GiftIcon,
  ArrowRightIcon
} from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    icon: <GamepadIcon className="w-6 h-6" />,
    title: "Games",
    description: "Play sought-after games and earn while you do it.",
    action: "Play Games and earn",
    link: "#"
  },
  {
    icon: <ClipboardListIcon className="w-6 h-6" />,
    title: "Surveys",
    description: "Fill out different surveys online to earn cash.",
    action: "Go to Surveys",
    link: "#"
  },
  {
    icon: <SmartphoneIcon className="w-6 h-6" />,
    title: "App",
    description: "Complete simple tasks in apps and earn money.",
    action: "Complete App tasks",
    link: "#"
  },
  {
    icon: <DicesIcon className="w-6 h-6" />,
    title: "Casino",
    description: "Get lucky with casino offers and win big!",
    action: "Casino Offers",
    link: "#"
  },
  {
    icon: <UserPlusIcon className="w-6 h-6" />,
    title: "Sign up",
    description: "Simply sign up for different products and get rewarded.",
    action: "Sign up to win",
    link: "#"
  },
  {
    icon: <GiftIcon className="w-6 h-6" />,
    title: "Free Trial",
    description: "Complete free trial offers and withdraw funds into your account.",
    action: "Free trials",
    link: "#"
  }
];

export default function Categories() {
  return (
    <section className="bg-[#08205D] py-2">
      <div className="container mx-auto px-2">
        <h2 className="text-4xl font-bold text-amber-500 text-center mb-4">Categories</h2>
        <p className="text-amber-500 text-center mb-12 max-w-2xl mx-auto">
          Discover the perfect offer tailored just for you. Explore our categories below to find offers that match your interests.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="h-full"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Card className="bg-gradient-to-br from-[#2e095f] to-[#880d78] border-[#e71acc] shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden h-full flex flex-col">
                <motion.div
                  className="absolute inset-0 border-4 border-transparent rounded-lg"
                  whileHover={{
                    borderColor: ["#ff6f61", "#ff9f1c", "#2ec4b6", "#ff6f61"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <div className="p-6 relative z-10 flex flex-col h-full">
                  <div className="text-[#4ade80] mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                  <p className="text-gray-400 mb-4 flex-grow">{category.description}</p>
                  <motion.a
                    href={category.link}
                    className="text-[#4ade80] hover:underline inline-flex items-center mt-auto"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {category.action}
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </motion.a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}