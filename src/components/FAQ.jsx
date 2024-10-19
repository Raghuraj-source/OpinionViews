'use client';
import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqData = [
  {
    question: "How to make money on Opinion Views?",
    answer: "Answer here...",
  },
  {
    question: "How is Opinion Views able to pay users?",
    answer: "Answer here...",
  },
  {
    question: "How much money can you really earn on Opinion Views?",
    answer: "It is easily possible to earn more than $100 per month on Opinion Views, some users even reach $1000+ each month. You can check out the leaderboard to see how much the most active Opinion Views users earn.",
  },
  {
    question: "How long does it take to cash out your money?",
    answer: "Answer here...",
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#08205D] p-8">
      <h2 className="text-5xl  font-bold mb-6 text-[#e2ad3b] text-center ">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto text-2xl">
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-foreground hover:text-primary">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}