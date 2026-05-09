"use client";

import React from "react";
import { ArrowUpRight, Clock } from "lucide-react";

const BLOG_DATA = [
  {
    id: 1,
    tag: "News",
    image: "/whats-new-1.webp",
    author: "Carrie Rose",
    time: "2 mins",
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
  },
  {
    id: 2,
    tag: "Food/Hospitality/Drink",
    image: "/whats-new-2.webp",
    author: "Ray Saddiq",
    time: "2 mins",
    title:
      "Rise at Seven Appointed by Coneys to Drive Demand and Retail Growth",
  },
  {
    id: 3,
    tag: "Food/Hospitality/Drink",
    image: "/whats-new-3.webp",
    author: "Carrie Rose",
    time: "2 mins",
    title:
      "Rise at Seven Appointed by Langtins to drive demand and retail growth",
  },
];

export default function WhatsNew() {
  return (
    <section className="bg-[#f8f8f8] py-24 px-6 md:px-12 font-sans text-black">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-black/5 pb-10">
          <div className="flex items-center gap-5">
            <h2 className="text-6xl md:text-[100px] font-bold tracking-tighter leading-none">
              What's
            </h2>
            <div className="w-16 h-16 md:w-28 md:h-28 bg-black rounded-3xl overflow-hidden rotate-[-5deg]">
              <img
                src="/new-1.webp"
                alt="featured"
                className="w-full h-full object-cover scale-110"
              />
            </div>
            <h2 className="text-6xl md:text-[100px] font-bold tracking-tighter leading-none">
              New
            </h2>
          </div>

          <button className="mt-8 md:mt-0 flex items-center gap-2 border border-black/10 px-8 py-3 rounded-full font-bold text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore More Thoughts <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_DATA.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              {/* Image with Advanced Hover Effect */}
              <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden mb-8">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] cubic-bezier(0.2, 1, 0.3, 1) group-hover:scale-110"
                />

                {/* 1. Blur Overlay (Bottom to Top) */}
                <div className="absolute inset-0 bg-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out"></div>

                {/* 2. Arrow Button in the Middle */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 delay-100">
                  <div className="bg-[#b3f6e3] text-black w-20 h-20 rounded-full flex items-center justify-center shadow-xl">
                    <ArrowUpRight size={32} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Tag (Always visible) */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="bg-white/90 text-black text-[11px] font-black uppercase tracking-widest px-5 py-2 rounded-full shadow-sm">
                    {post.tag}
                  </span>
                </div>

                {/* Logo mark bottom right */}
                <div className="absolute bottom-6 right-8 text-white text-3xl font-black italic opacity-60 z-10">
                  7.
                </div>
              </div>

              {/* Meta & Title */}
              <div className="space-y-4">
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2 bg-black/5 px-3 py-1.5 rounded-full">
                    <div className="w-5 h-5 rounded-full overflow-hidden">
                      <img
                        src={post.image}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-tighter">
                      {post.author}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-black/40">
                    <Clock size={14} />
                    <span className="text-[11px] font-black uppercase tracking-tighter">
                      {post.time}
                    </span>
                  </div>
                </div>

                <h3 className="text-3xl font-bold leading-[1.05] tracking-tighter group-hover:text-black/60 transition-colors">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
