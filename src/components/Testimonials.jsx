"use client"

import Image from 'next/image';
import { Card } from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    rating: 5,
    title: "If you need some extra cash this is your app",
    content: "Here is my honest review of Freecash. You are not going to earn a full time income from this app (unless you have a lot",
    author: "Alvaro de la Llave",
    date: "May 07, 2024",
    avatar: "/user.png"
  },
  {
    rating: 5,
    title: "Is the good application and Im so happy",
    content: "Is the good application and Im so happy to start download this application thank you so much",
    author: "Oussama Abida",
    date: "May 08, 2024",
    avatar: "/user.png"
  },
  {
    rating: 5,
    title: "Great Service",
    content: "Great Service, good Games",
    author: "Marcello Blümel",
    date: "May 07, 2024",
    avatar: "/user.png"
  },
  {
    rating: 5,
    title: "Earn some money on the side",
    content: "Great games with which you can earn some \"pocket money\" on the side.",
    author: "Ricardo",
    date: "May 07, 2024",
    avatar: "/user.png"
  },
  {
    rating: 5,
    title: "100% authentic",
    content: "100% authentic, read the user terms and conditions for the apps",
    author: "100% authentic",
    date: "May 06, 2024",
    avatar: "/user.png"
  },
  {
    rating: 5,
    title: "Great offers and great games",
    content: "Honestly so thankful for sites like this! I have a full time job and it's still hard to make ends meet",
    author: "Megan",
    date: "May 05, 2024",
    avatar: "/user.png"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

export default function Testimonials() {
  return (
    <section className="bg-[#08205D] py-2 px-4 sm:px-2 lg:px-8 pt-2 pb-0">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold font-sans mb-2 mt-0 text-center text-[#e2ad3b]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Everyone's talking about Opinion Views
        </motion.h2>
        <motion.p 
          className="text-2xl font-bold font-sans mb-6 text-center text-[#e23bda]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join the Opinion Views Revolution Discover Why Everyone's Talking About Our Money-Making Platform!
        </motion.p>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                transition: { duration: 0.2 } 
              }}
            >
              <Card className="bg-gradient-to-br from-[#6e0f9b] to-[#b22222] text-foreground p-6 flex flex-col items-start h-full">
                <motion.div 
                  className="flex mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-primary fill-current" />
                  ))}
                </motion.div>
                <motion.h3 
                  className="text-lg font-semibold text-foreground mb-2"
                  whileHover={{ scale: 1.05, color: "#e2ad3b" }}
                >
                  {testimonial.title}
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground mb-4 flex-grow"
                  whileHover={{ color: "#ffffff" }}
                >
                  {testimonial.content}
                </motion.p>
                {testimonial.author && (
                  <motion.div 
                    className="flex items-center mt-auto"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex-shrink-0 mr-3">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <motion.p 
                        className="text-sm font-medium text-foreground"
                        whileHover={{ color: "#e2ad3b" }}
                      >
                        {testimonial.author}
                      </motion.p>
                      <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                    </div>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}