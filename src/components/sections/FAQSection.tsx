"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FAQSection() {
  return (
    <section className="grid items-start grid-cols-1 max-w-[1200px] pt-32 px-4 overflow-hidden mx-auto md:grid-cols-2 gap-20">
      <div className="flex flex-col gap-4 md:pr-8">
        <div>
          <motion.h3
            className="title-quinary mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Welcome to Beyond FAQ!
          </motion.h3>
        </div>

        <div>
          <motion.h2
            className="title-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Everything You Need to Know About Our Speakers
          </motion.h2>
        </div>
      </div>

      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="w-full">
          {[
            {
              question: "What makes your speakers stand out?",
              answer:
                "Our speakers deliver premium sound quality, sleek design, and long-lasting durability, ensuring an unmatched listening experience.",
            },
            {
              question: "Are your speakers compatible with all devices?",
              answer:
                "Yes! Our speakers connect seamlessly via Bluetooth, AUX, and USB, making them compatible with smartphones, tablets, laptops, and more.",
            },
            {
              question: "How long does the battery last?",
              answer:
                "Depending on the model, our speakers offer up to 12–24 hours of continuous playtime on a full charge.",
            },
            {
              question: "Are the speakers waterproof?",
              answer:
                "Many of our models are water-resistant or fully waterproof, making them perfect for outdoor adventures and poolside use.",
            },
            {
              question: "Do you offer a warranty?",
              answer:
                "Yes, all our speakers come with a 1-year warranty, covering manufacturing defects and ensuring peace of mind.",
            },
          ].map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx + 1}`}
              className="pb-6 mb-8"
            >
              <AccordionTrigger>
                <p className="faq-question text-left w-full">{item.question}</p>
              </AccordionTrigger>
              <AccordionContent>
                <motion.p
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  className="text-primary"
                >
                  {item.answer}
                </motion.p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
