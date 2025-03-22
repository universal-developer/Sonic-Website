// components/ui/StatCard.tsx
import React from "react";

interface StatCardProps {
  icon: React.ReactNode;
  stat: string;
  description: string;
}

export function StatCard({ icon, stat, description }: StatCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-2">{stat}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
