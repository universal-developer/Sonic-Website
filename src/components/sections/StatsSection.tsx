"use client";

import React from "react";
import { motion } from "framer-motion";

export default function StatsSection() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-16 bg-white grid md:grid-cols-2 gap-6 md:gap-12">
      {/* Left Column */}
      <div className="flex flex-col justify-end">
        {/* Why us? Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex self-start items-center space-x-2 px-4 py-2 mb-6 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors duration-300"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-45"
          >
            <rect
              x="6"
              y="6"
              width="12"
              height="12"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          <span className="text-sm font-medium">Why us?</span>
        </motion.button>

        {/* Headline */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Trusted by Thousands,
          <br />
          Engineered for Excellence
        </motion.h2>
      </div>

      {/* Right Column */}
      <motion.p
        className="flex flex-col justify-end text-lg md:text-xl text-gray-600 leading-relaxed self-end"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Our commitment to innovation and quality has earned the trust of
        customers worldwide. Sleek design, our products are built to impress.
      </motion.p>

      <div className="flex flex-row items-center justify-center gap-5 mx-auto">
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          voluptas.
        </h1>
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          voluptas.
        </h1>
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          voluptas.
        </h1>
      </div>
    </section>
  );
}
