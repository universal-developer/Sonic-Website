"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full bg-white z-50 transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-4xl font-bold">
              SONIC
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/features"
              className="text-gray-600 hover:text-gray-900 relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/products"
              className="text-gray-600 hover:text-gray-900 relative group"
            >
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-gray-900 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Buy Now Button - Desktop */}
          <div className="hidden md:block">
            <Link
              href="/buy"
              className="inline-flex items-center px-8 py-3 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 hover:scale-105 transition-all duration-300"
            >
              Buy now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
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
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="bg-white px-2 pt-2 pb-3 space-y-6 flex flex-col items-center">
          <Link
            href="/about"
            className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium relative group"
            onClick={() => setIsOpen(false)}
          >
            About
            <span className="absolute -bottom-1 left-1/4 right-1/4 w-1/2 h-0.5 bg-gray-900 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link
            href="/features"
            className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium relative group"
            onClick={() => setIsOpen(false)}
          >
            Features
            <span className="absolute -bottom-1 left-1/4 right-1/4 w-1/2 h-0.5 bg-gray-900 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link
            href="/products"
            className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium relative group"
            onClick={() => setIsOpen(false)}
          >
            Products
            <span className="absolute -bottom-1 left-1/4 right-1/4 w-1/2 h-0.5 bg-gray-900 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium relative group"
            onClick={() => setIsOpen(false)}
          >
            Contact
            <span className="absolute -bottom-1 left-1/4 right-1/4 w-1/2 h-0.5 bg-gray-900 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>

          {/* Buy Now Button - Mobile */}
          <Link
            href="/buy"
            className="inline-flex items-center px-8 py-3 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 hover:scale-105 transition-all duration-300 mt-4"
            onClick={() => setIsOpen(false)}
          >
            Buy now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
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
          </Link>
        </div>
      </div>
    </nav>
  );
}
