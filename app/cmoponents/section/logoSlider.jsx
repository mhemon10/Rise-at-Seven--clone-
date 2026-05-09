"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const logos = [
  {
    name: "Emirates",
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg",
  },
  {
    name: "Shark Ninja",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/64/SharkNinja_Logo.png",
  },
  {
    name: "Capital One",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Capital_One_logo.svg",
  },
  {
    name: "Red Bull",
    url: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Red_Bull_logo.svg",
  },
  {
    name: "JD Sports",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/JD_Sports_logo.svg/1200px-JD_Sports_logo.svg.png",
  },
];

const LogoSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const totalWidth = slider.scrollWidth;

    // GSAP Animation: Seamless Horizontal Scroll
    gsap.to(slider, {
      x: `-${totalWidth / 2}`, // অর্ধেক দূরত্ব পর্যন্ত যাবে (যেহেতু আমরা আইটেম ডাবল করেছি)
      duration: 25, // স্লাইডিং স্পিড (বেশি দিলে স্লো হবে)
      ease: "none", // লিনিয়ার মুভমেন্টের জন্য
      repeat: -1, // অসীম লুপ
      onReverseComplete: () => {
        gsap.set(slider, { x: 0 });
      },
    });
  }, []);

  // লুপ নিরবচ্ছিন্ন রাখার জন্য লোগো লিস্ট ডাবল করা হয়েছে
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-10 overflow-hidden bg-[#eeeeee] flex items-center border-y border-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* বাম পাশের টেক্সট */}
        <div
          className="whitespace-nowrap px-10 font-medium z-10 bg-[#eeeeee]"
          style={{ color: "var(--primary)" }}>
          The agency behind
        </div>

        {/* স্লাইডিং লোগো কন্টেইনার */}
        <div className="relative w-full overflow-hidden mask-gradient">
          <div
            ref={sliderRef}
            className="flex items-center gap-16 md:gap-24 w-max">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-7 md:h-9 w-auto object-contain opacity-60 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
