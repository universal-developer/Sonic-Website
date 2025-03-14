"use client";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  // Add overflow-hidden to body when component mounts
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = "";
    };
  }, []);

  return (
    <section className="flex flex-col items-center justify-start min-h-screen pt-32 px-4 overflow-hidden">
      <motion.div
        className="max-w-2xl mx-auto flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Heading with staggered animation for each line */}
        <motion.h1 className="title-primary text-center mb-6">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            Engrossing Audio,
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            Streamlined
          </motion.span>
        </motion.h1>

        {/* Description with fade-in animation */}
        <motion.p
          className="text-primary text-center max-w-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          Our most recent breakthrough in audio devices blends exceptional audio
          performance with unparalleled toughness and elegance.
        </motion.p>

        {/* CTA Button with scale animation on hover */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            href="/buy"
            variant="filled"
            size="lg"
            rightIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            }
            className="bg-black text-white hover:bg-gray-800"
          >
            Buy now
          </Button>
        </motion.div>
      </motion.div>

      {/* Product Image Container with proper floating animation */}
      <motion.div
        className="mt-16 flex justify-center w-full mx-auto relative"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0.215, 0.61, 0.355, 1],
        }}
      >
        <motion.div
          className="relative w-full max-w-3xl"
          animate={{
            y: [0, -10, 0], // Subtle floating effect
          }}
          transition={{
            duration: 4.5, // Corrected duration value
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <Image
            src="/Product-image.png"
            alt="Sonic audio device"
            width={1200}
            height={1200}
            priority
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Optional: Subtle glow effect behind product */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-full bg-teal-400/20 blur-3xl -z-10"
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
}
