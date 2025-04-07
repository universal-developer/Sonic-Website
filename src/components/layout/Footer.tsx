import React from "react";
import { Instagram, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111113] text-white px-8 md:px-20 pt-16 pb-12 relative overflow-hidden flex flex-col gap-20">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Logo and Slogan */}
        <div className="flex items-center gap-3">
          <h2 className="font-bold text-xl">SONIC</h2>
          <div className="w-px h-5 bg-gray-600" />
          <p className="text-sm text-gray-300">The Perfect Sound, Anywhere</p>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-sm">Company</h3>
          <a
            href="#"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Contact us
          </a>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-sm">Legal</h3>
          <a
            href="#"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Privacy Policy
          </a>
        </div>
      </div>

      {/* Giant SONIC (Middle Layer) */}
      <div className="w-full text-center select-none pointer-events-none">
        <h1 className="text-[28vw] md:text-[20vw] font-bold text-[#1c1c1e] leading-none tracking-tight">
          SONIC
        </h1>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-gray-400 text-sm gap-4">
        <p>© 2025. All rights reserved. SONIC</p>

        {/* Socials */}
        <div className="flex items-center gap-4">
          <span>@sonic</span>
          <a href="#" className="hover:text-white transition">
            <X size={18} />
          </a>
          <a href="#" className="hover:text-white transition">
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
