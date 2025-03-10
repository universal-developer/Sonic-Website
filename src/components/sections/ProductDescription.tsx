"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ProductDescription() {
  return (
    <div className="flex m-0 w-auto h-[273px] md:h-[413px] lg:h-[530px] bg-sonic-gray items-center justify-center">
      <motion.h1
        className="title-primary text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Our latest innovation in portable speakers
        <br />
        combines superior sound quality <br />
        with unmatched durability
      </motion.h1>
    </div>
  );
}
