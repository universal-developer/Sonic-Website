"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const features = [
  {
    tag: "The Perfect Sound, Anywhere",
    title: "Experience crystal-clear audio with deep bass and immersive sound.",
    description:
      "Our smart speaker is designed to fill your space with rich, high-fidelity sound—whether you're at home or on the go.",
    image: "/Product-Image-2.png",
  },
  {
    tag: "Smart. Sleek. Powerful.",
    title:
      "Seamless connectivity, voice control, and a sleek, modern design make this speaker the perfect addition to any room.",
    description:
      "Designed for modern living, this speaker blends premium sound with intuitive controls.",
    image: "/Product-Image-3.png",
  },
];

export default function ProductFeatureSection() {
  return (
    <section className="flex flex-col items-center pt-32 pb-32 px-4 gap-20 overflow-hidden">
      {features.map((feature, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-[1200px] mx-auto"
          >
            {/* Image */}
            <div
              className={`order-1 ${
                isEven ? "md:order-2" : "md:order-1"
              } w-full`}
            >
              <Image
                src={feature.image}
                alt={feature.tag}
                width={800}
                height={800}
                className="object-cover w-full h-auto rounded-2xl"
              />
            </div>

            {/* Text */}
            <div
              className={`order-2 ${
                isEven ? "md:order-1" : "md:order-2"
              } flex flex-col items-start justify-center gap-4 md:gap-6`}
            >
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
                  className="text-gray-600"
                >
                  <path d="M2 10v3" />
                  <path d="M6 6v11" />
                  <path d="M10 3v18" />
                  <path d="M14 8v7" />
                  <path d="M18 5v13" />
                  <path d="M22 10v3" />
                </svg>
                <span className="text-highlight">{feature.tag}</span>
              </div>

              <h2 className="title-tertiary">{feature.title}</h2>
              <p className="text-primary">{feature.description}</p>

              <Button
                href="/buy"
                className="bg-black text-white hover:bg-gray-800 w-full sm:w-auto text-secondary"
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
        );
      })}
    </section>
  );
}
