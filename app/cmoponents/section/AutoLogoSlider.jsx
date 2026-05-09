"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const realLogos = [
  {
    name: "Next",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Next_plc_logo.svg",
  },
  {
    name: "Revolution",
    url: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Revolution_Beauty_Logo.png",
  },
  {
    name: "PlayStation",
    url: "https://upload.wikimedia.org/wikipedia/commons/0/00/PlayStation_logo.svg",
  },
  {
    name: "AXA",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/94/AXA_Logo.svg",
  },
  {
    name: "Emirates",
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg",
  },
  {
    name: "Shark",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/64/SharkNinja_Logo.png",
  },
];

const ExactLogoSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const el = sliderRef.current;
    const scrollWidth = el.scrollWidth;

    // GSAP দিয়ে নিরবচ্ছিন্ন লুপ
    gsap.to(el, {
      x: `-${scrollWidth / 2}`,
      duration: 25,
      ease: "none",
      repeat: -1,
    });
  }, []);

  // লুপ ঠিক রাখতে লোগো লিস্ট ডাবল করা হলো
  const allLogos = [...realLogos, ...realLogos];

  return (
    <section className="bg-[#eeeeee] py-14 flex items-center overflow-hidden border-y border-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Title */}
        <div className="whitespace-nowrap px-12 text-lg font-medium text-black z-10 bg-[#eeeeee]">
          The agency behind
        </div>

        {/* Sliding Area with Blurry Edges */}
        <div className="relative w-full overflow-hidden mask-blur-edge">
          <div
            ref={sliderRef}
            className="flex items-center gap-24 md:gap-32 min-w-max">
            {allLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-10 md:h-12 w-auto object-contain grayscale opacity-90 contrast-125"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExactLogoSlider;
