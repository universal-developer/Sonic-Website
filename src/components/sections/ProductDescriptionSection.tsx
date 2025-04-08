"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ProductDescriptionSection() {
  return (
    <div className="flex m-0 w-full min-h-[273px] md:min-h-[413px] lg:min-h-[530px] bg-sonic-gray items-center justify-center px-4">
      <motion.h1
        className="text-center text-[28px] sm:text-5xl font-extrabold leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Our latest innovation in portable speakers
        <br />
        combines superior sound quality
        <br />
        with unmatched durability
      </motion.h1>
    </div>
  );
}
