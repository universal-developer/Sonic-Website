"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function ProductFeatureSection() {
  return (
    <section className="flex flex-col items-center justify-start pt-32 pb-32 px-4 overflow-hidden gap-12">
      {/* First section. Image to the right, image to the left  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1440px] mx-auto">
        {/* Image Container - First on Mobile */}
        <Image
          src="/Product-image-2.png"
          alt="Portable speaker"
          width={800}
          height={800}
          className="order-1 md:order-2 object-cover w-full h-auto rounded-2xl"
        />

        {/* Text Content - Second on Mobile */}
        <div className="order-2 md:order-1 flex flex-col items-start justify-center gap-4 md:gap-6">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 text-gray-600"
            >
              <path d="M2 10v3" />
              <path d="M6 6v11" />
              <path d="M10 3v18" />
              <path d="M14 8v7" />
              <path d="M18 5v13" />
              <path d="M22 10v3" />
            </svg>
            <span className="text-highlight text-base md:text-lg">
              The Perfect Sound, Anywhere
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl">
            Experience crystal-clear audio with deep bass and immersive sound.
          </h2>
          <p className="text-primary text-base md:text-lg">
            Our smart speaker is designed to fill your space with rich,
            high-fidelity sound—whether youre at home or on the go.
          </p>
          <Button
            href="/buy"
            className="bg-black text-white hover:bg-gray-800 w-full md:w-auto"
            size="lg"
            variant="filled"
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
          </Button>
        </div>
      </div>

      {/* Second section. Image to the left, image to the right  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1440px] mx-auto">
        {/* Image Container - First on Mobile */}
        <Image
          src="/Product-Image-3.png"
          alt="Portable speaker"
          width={800}
          height={800}
          className="order-2 md:order-1 object-cover w-full h-auto rounded-2xl"
        />

        {/* Text Content - Second on Mobile */}
        <div className="order-2 md:order-1 flex flex-col items-start justify-center gap-4 md:gap-6">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 text-gray-600"
            >
              <path d="M2 10v3" />
              <path d="M6 6v11" />
              <path d="M10 3v18" />
              <path d="M14 8v7" />
              <path d="M18 5v13" />
              <path d="M22 10v3" />
            </svg>
            <span className="text-highlight text-base md:text-lg">
              Smart. Sleek. Powerful.
            </span>
          </div>
          <h2 className="text-3xl md:text-3xl">
            Seamless connectivity, voice control, and a sleek, modern design
            make this speaker the perfect addition to any room.
          </h2>
          <p className="text-primary text-base md:text-lg">
            Designed for modern living, this speaker blends premium sound with
            intuitive controls.
          </p>
          <Button
            href="/buy"
            className="bg-black text-white hover:bg-gray-800 w-full md:w-auto"
            size="lg"
            variant="filled"
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
          </Button>
        </div>
      </div>
    </section>
  );
}
