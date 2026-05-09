"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CARD_DATA = [
  {
    id: 1,
    title: "Pioneers",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600",
    text: "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.",
    accent: "bg-[#a8f5d0]",
  },
  {
    id: 2,
    title: "Visionaries",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600",
    text: "We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo. Innovation is at our core, and we push boundaries every single day.",
    accent: "bg-[#fff0b0]",
  },
  {
    id: 3,
    title: "Innovators",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600",
    text: "Strategic thinkers with a passion for results. We blend data-driven insights with creative excellence to deliver campaigns that perform across all search and social channels.",
    accent: "bg-[#e8d5f5]",
  },
];

export default function StackedCards() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".card-wrapper");

      // কার্ডগুলো স্ট্যাক করার জন্য পিনিং সেকশন
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${cards.length * 100}%`,
        pin: true,
        scrub: 1,
      });

      cards.forEach((card, i) => {
        // প্রথম কার্ডটি বাদে বাকিগুলো নিচ থেকে আসবে
        if (i > 0) {
          gsap.fromTo(
            card,
            { y: "120vh" }, // স্ক্রিনের অনেক নিচ থেকে শুরু হবে
            {
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: `${(i / cards.length) * 100}% top`,
                end: `${((i + 1) / cards.length) * 100}% top`,
                scrub: true,
              },
            },
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#f0f0f0]">
      {/* Header Text */}
      <div className="text-center pt-20 pb-10">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/60">
          Legacy In The Making
        </p>
      </div>

      <section
        ref={sectionRef}
        className="relative h-screen flex justify-center items-center overflow-hidden">
        <div
          ref={containerRef}
          className="relative w-full max-w-4xl h-[600px] flex justify-center items-center px-6">
          {CARD_DATA.map((card, i) => (
            <div
              key={card.id}
              className="card-wrapper absolute inset-0 flex justify-center items-center"
              style={{ zIndex: i + 1 }}>
              {/* Main Card */}
              <div
                className={`relative w-full h-full bg-black rounded-[40px] p-10 md:p-16 flex flex-col items-center text-center justify-center shadow-2xl shadow-black/40`}
                style={{
                  transform: `rotate(${i % 2 === 0 ? "2deg" : "-2deg"})`, // হালকা বাঁকানো লুক
                }}>
                {/* Layered Decorative Card behind */}
                <div
                  className={`absolute -inset-2 ${card.accent} rounded-[45px] -z-10 opacity-40 blur-sm scale-[1.02] rotate-1`}></div>

                {/* Profile Image Box */}
                <div className="w-32 h-32 md:w-44 md:h-44 rounded-[30px] overflow-hidden mb-8 border-4 border-white/5">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Title */}
                <h3 className="text-white text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spacer to allow scrolling after the cards */}
      <div className="h-screen bg-white flex items-center justify-center">
        <h2 className="text-black text-4xl font-bold italic">
          Next Section...
        </h2>
      </div>
    </div>
  );
}
