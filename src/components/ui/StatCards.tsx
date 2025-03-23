// components/ui/StatCard.tsx
import React from "react";
import { motion } from "framer-motion";

interface StatCardProps {
  icon: React.ReactNode;
  stat: string;
  description: string;
}

export function StatCard({ icon, stat, description }: StatCardProps) {
  return (
    <motion.div
      className="bg-[#FAFAFA] p-8 rounded-2xl w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 mb-6 border border-gray-200">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-2">{stat}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}
