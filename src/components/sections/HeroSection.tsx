"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Parallax from "@/components/animations/parallax";

export default function HeroSection() {
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = "";
    };
  }, []);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -30]);

  return (
    <section
      ref={sectionRef}
      className="snap-section flex flex-col items-center justify-start pt-32 sm:pt-40 px-6 sm:px-8 overflow-hidden relative"
    >
      {/* Glows (only on desktop) */}
      <Parallax
        speed={0.15}
        direction="left"
        className="hidden sm:block absolute top-20 left-10 opacity-20 pointer-events-none"
      >
        <div className="w-64 h-64 rounded-full bg-gradient-to-r from-teal-200 to-blue-200 blur-3xl" />
      </Parallax>

      <Parallax
        speed={0.1}
        direction="right"
        className="hidden sm:block absolute bottom-40 right-10 opacity-20 pointer-events-none"
      >
        <div className="w-56 h-56 rounded-full bg-gradient-to-r from-purple-200 to-pink-200 blur-3xl" />
      </Parallax>

      {/* Text Content */}
      <Parallax speed={0.3} direction="up" className="z-10 w-full">
        <motion.div
          className="mx-auto flex flex-col items-center text-center max-w-[90%] sm:max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ y: textY }}
        >
          <motion.h1 className="text-[28px] sm:text-5xl font-extrabold leading-tight mb-4">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Engrossing Audio,
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Streamlined
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-lg text-gray-500 mb-6 sm:mb-8 leading-relaxed sm:leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our most recent breakthrough in audio devices blends exceptional
            audio performance with unparalleled toughness and elegance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
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
              className="bg-black text-white hover:bg-gray-800 px-6 py-3 text-sm sm:text-base rounded-full"
            >
              Buy now
            </Button>
          </motion.div>
        </motion.div>
      </Parallax>

      {/* Product Image */}
      <Parallax
        speed={0.2}
        direction="down"
        className="mt-10 sm:mt-16 w-full z-0"
      >
        <motion.div
          className="flex justify-center mx-auto relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.215, 0.61, 0.355, 1],
          }}
        >
          <motion.div
            className="relative w-4/5 max-w-[280px] sm:max-w-2xl"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            <Image
              src="/Product-image.png"
              alt="Sonic audio device"
              width={800}
              height={800}
              priority
              className="w-full h-auto object-contain"
              sizes="(max-width: 768px) 80vw, 600px"
            />
          </motion.div>

          {/* Glow behind image (only on desktop) */}
          <motion.div
            className="hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-full bg-teal-400/20 blur-3xl -z-10"
            style={{ opacity: bgOpacity, scale: bgScale }}
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
      </Parallax>
    </section>
  );
}
