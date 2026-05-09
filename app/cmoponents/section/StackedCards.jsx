"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LEGACY_CARDS = [
  {
    id: 1,
    title: "Pioneers",
    image: "/slide1.webp",
    description:
      "We're dedicated to creating the industry narrative that others follow 3 years from now.",
    subDescription: "We paved the path for creative SEO and Digital PR.",
    bgColor: "bg-black",
    accentColor: "bg-[#bbf7d0]",
    rotate: -3,
  },
  {
    id: 2,
    title: "Award Winning",
    image: "/slide2.webp",
    description:
      "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London.",
    subDescription: "We are official judges for industry awards worldwide.",
    bgColor: "bg-[#bbf7d0]",
    accentColor: "bg-white",
    rotate: 2,
  },
  {
    id: 3,
    title: "Performance",
    image: "/slide3.webp",
    description:
      "We don't just create noise; we drive growth and measurable results.",
    subDescription: "Our legacy is built on results that transform brands.",
    bgColor: "bg-black",
    accentColor: "bg-[#bbf7d0]",
    rotate: -1.5,
  },
];

export default function LegacySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".card-wrapper");

    cards.forEach((card, i) => {
    
      if (i < cards.length - 1) {
        gsap.to(card, {
        
          scale: 0.9,
          opacity: 0.5,
          scrollTrigger: {
            trigger: cards[i + 1], 
            start: "top 80%",
            end: "top 10%",
            scrub: true,
          },
        });
      }

      
      ScrollTrigger.create({
        trigger: card,
        start: "top 10%",
        pin: true,
        pinSpacing: false, 
        endTrigger: containerRef.current,
        end: "bottom bottom",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="bg-[#ebebeb] py-20 px-6 relative">
      <div className="max-w-[1400px] mx-auto text-center mb-24">
        <p className="text-[12px] font-black uppercase tracking-[0.3em] text-gray-500">
          Legacy In The Making
        </p>
      </div>

      <div className="flex flex-col items-center">
        {LEGACY_CARDS.map((card, index) => (
          <div
            key={card.id}
            className="card-wrapper relative w-full max-w-[620px] h-[85vh] flex items-start justify-center">
        

            {/* Main Content Card */}
            <div
              className={`w-full ${card.bgColor} ${card.bgColor === "bg-black" ? "text-white" : "text-black"} rounded-[50px] p-10 md:p-14 flex flex-col items-center shadow-[0_30px_60px_rgba(0,0,0,0.2)]`}>
              {/* Profile Image Box */}
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-[35px] overflow-hidden mb-10 border-4 border-white/5">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter text-center">
                {card.title}
              </h2>

              {/* Text Content */}
              <div className="max-w-[440px] text-center space-y-6">
                <p className="text-[16px] md:text-[18px] leading-snug font-medium opacity-90">
                  {card.description}
                </p>
                <p className="text-[14px] md:text-[15px] leading-relaxed opacity-60">
                  {card.subDescription}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <div className="h-[20vh]"></div>
    </section>
  );
}
