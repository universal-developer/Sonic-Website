import React from "react";

export function SpeakerPromoSection() {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-16">
        <div className="flex flex-col justify-start md:pt-2 space-y-8 md:max-w-[48%]">
          <h2 className="text-[48px] font-bold leading-[1.2] tracking-tight text-[#1c1c1e]">
            Get your perfect
            <br />
            speaker now!
          </h2>
          <button className="inline-flex items-center justify-between px-7 py-4 rounded-full bg-[#1c1c1e] text-white font-medium text-[16px]">
            Get yours – 30% off
            <span className="ml-3 w-10 h-10 flex items-center justify-center rounded-full bg-white text-black">
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
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </span>
          </button>
        </div>
        <div className="flex flex-col justify-start md:pt-2 space-y-4 md:max-w-[48%]">
          <h3 className="text-[24px] font-semibold text-[#1c1c1e]">
            Bring every room together
          </h3>
          <p className="text-[18px] font-normal leading-[1.6] text-[#6e6e73]">
            Experience our latest portable speaker innovation, delivering
            exceptional sound quality, unbeatable durability, and sleek design.
          </p>
        </div>
      </div>
    </section>
  );
}
