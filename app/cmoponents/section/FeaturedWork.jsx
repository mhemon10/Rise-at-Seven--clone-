"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, TrendingUp, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WORKS = [
  {
    client: "Global Sports Retailer",
    name: "JD Sports",
    years: "[2023–2025]",
    stat: "65% up YoY in clicks",
    statSub: "for JDSports Global",
    cardBg: "#5bbfef",
    tag: "Retail",
    topImg: "/slide-1.webp",
    accent: "#a8f5d0",
  },
  {
    client: "Premium Travel & Leisure",
    name: "Parkdean Resorts",
    years: "[2019–2025]",
    stat: "3× Organic Revenue",
    statSub: "for Parkdean UK",
    cardBg: "#f0a500",
    tag: "Holidays",
    topImg: "/slide-2.webp",
    accent: "#fff0b0",
  },
  {
    client: "Luxury Interior Brand",
    name: "Pooky",
    years: "[2025]",
    stat: "212% Growth in Clicks",
    statSub: "for Pooky.com",
    cardBg: "#d4f5e2",
    tag: "Lighting",
    topImg: "/slide-3.webp",
    accent: "#a8f5d0",
  },
  {
    client: "E-commerce Giant",
    name: "Revolution",
    years: "[2022–2025]",
    stat: "180% Organic Sessions",
    statSub: "for Revolution Beauty",
    cardBg: "#e8d5f5",
    tag: "Beauty",
    topImg: "/slide-4.webp",
    accent: "#f5c8f0",
  },
  {
    client: "Global Fintech Leader",
    name: "Wise",
    years: "[2024–2025]",
    stat: "94% Growth in Keywords",
    statSub: "for Wise International",
    cardBg: "#9fefb0",
    tag: "Fintech",
    topImg: "/slide-5.webp",
    accent: "#c8ffd8",
  },
];

export default function FeaturedWork() {
  const containerRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
    
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 5%",
        end: "+=500%", 
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      });

      gsap.to(leftContentRef.current, {
        y: () =>
          -(leftContentRef.current.scrollHeight - window.innerHeight + 100),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 5%",
          end: "+=500%",
          scrub: 1,
        },
      });

      gsap.to(rightContentRef.current, {
        y: () =>
          -(rightContentRef.current.scrollHeight - window.innerHeight + 100),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 5%",
          end: "+=500%",
          scrub: 1,
        },
      });

      
      const textBlocks = gsap.utils.toArray(".text-block");
      textBlocks.forEach((block, i) => {
        gsap.fromTo(
          block,
          { opacity: 0.15 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: containerRef.current,
              start: `${(i / WORKS.length) * 500}% top`,
              end: `${((i + 1) / WORKS.length) * 500}% top`,
              scrub: true,
            },
          },
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="px-4 py-8 md:px-10 md:py-10 bg-white min-h-screen">
      <section
        ref={containerRef}
        className="relative w-full h-[90vh] flex overflow-hidden rounded-[45px] bg-[#0a0a0a] border border-white/5 shadow-2xl">
        {/* LEFT SIDE: SCROLLING TITLES */}
        <div className="w-1/2 h-full px-12 md:px-20 overflow-hidden relative border-r border-white/5">
          <div className="absolute top-10 left-12 z-30">
            <span className="text-white text-[11px] font-bold border border-white/20 px-4 py-1.5 rounded-full uppercase tracking-widest bg-black/50 backdrop-blur-md">
              Featured Work
            </span>
          </div>

          <div
            ref={leftContentRef}
            className="flex flex-col gap-[35vh] pt-[45vh] pb-[20vh]">
            {WORKS.map((work, i) => (
              <div
                key={i}
                className="text-block flex flex-col group cursor-default">
                <p className="text-white text-lg mb-3 font-medium transition-colors group-hover:text-white/60">
                  {work.client}
                </p>
                <h2 className="text-white text-5xl md:text-7xl lg:text-[85px]  tracking-tighter leading-[0.85]">
                  {work.name}
                </h2>
                <span className="text-white text-xs mt-8 font-mono tracking-[0.3em] uppercase">
                  {work.years}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: SCROLLING IMAGES */}
        <div className="w-1/2 h-full overflow-hidden px-10">
          <div
            ref={rightContentRef}
            className="flex flex-col gap-28 pt-[10vh] pb-[10vh]">
            {WORKS.map((work, i) => (
              <div
                key={i}
                className="group w-full max-w-[520px] aspect-[4/5] relative rounded-[40px] overflow-hidden flex-shrink-0 shadow-2xl mx-auto">
               
                <img
                  src={work.topImg}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt={work.name}
                />

                {/* Hover Reveal Details */}
                <div
                  className="absolute inset-x-0 bottom-0 p-10 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col justify-between h-1/2 z-20"
                  style={{ background: work.cardBg }}>
                  <div className="flex justify-between items-start">
                    <h3 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tighter">
                      {work.stat} <br /> {work.statSub}
                    </h3>
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer"
                      style={{ background: work.accent }}>
                      <ArrowUpRight className="text-black w-8 h-8 stroke-[3]" />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <span className="bg-black/10 backdrop-blur-md px-6 py-2.5 rounded-full text-[13px] font-bold text-black flex items-center gap-2 border border-black/5">
                      <Search size={15} /> {work.tag} <TrendingUp size={15} />
                    </span>
                  </div>
                </div>

                {/* Constant Floating Tag */}
                <div className="absolute bottom-8 right-8 group-hover:opacity-0 transition-opacity duration-300 z-10">
                  <span className="bg-white/10 backdrop-blur-xl px-6 py-2 rounded-full text-[12px] font-bold text-white flex items-center gap-2 border border-white/20 uppercase tracking-widest shadow-lg">
                    <Search size={14} /> {work.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
