"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const BLOG_DATA = [
  {
    id: 1,
    tag: "News",
    image: "/news1.webp", 
    author: "Carrie Rose",
    time: "2 mins",
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
  },
  {
    id: 2,
    tag: "Food/Hospitality/Drink",
    image: "/news2.webp",
    author: "Ray Saddiq",
    time: "2 mins",
    title:
      "Rise at Seven Appointed by Coneys to Drive Demand and Retail Growth for them in the Chocolate Confectionery Category",
  },
  {
    id: 3,
    tag: "Food/Hospitality/Drink",
    image: "/news3.webp",
    author: "Carrie Rose",
    time: "2 mins",
    title:
      "Rise at Seven Appointed by Langtins to drive demand and retail growth for Noomz",
  },
];

export default function WhatsNew() {
  return (
    <section className="bg-[#f3f3f3] py-20 px-6 md:px-12 font-sans text-black">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-black/10 pb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tight">
              What's
            </h2>
            {/* Small Rounded Video/Image box in Title */}
            <div className="w-16 h-16 md:w-24 md:h-24 bg-black rounded-2xl overflow-hidden mt-2">
              <img
                src="/news1.webp"
                alt="featured"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tight">
              New
            </h2>
          </div>

          <button className="mt-6 md:mt-0 flex items-center gap-2 border border-black/20 px-6 py-2 rounded-full font-bold hover:bg-black hover:text-white transition-all duration-300">
            Explore More Thoughts <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_DATA.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              {/* Image Container with Hover Effect */}
              <div className="relative aspect-[4/5] rounded-[30px] overflow-hidden mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Tag Overlay */}
                <div className="absolute top-5 left-5">
                  <span className="bg-white/20 backdrop-blur-md text-white text-[12px] font-bold px-4 py-1.5 rounded-full border border-white/30">
                    {post.tag}
                  </span>
                </div>

                {/* Rise Logo Icon at bottom right */}
                <div className="absolute bottom-5 right-5 text-white/50 text-2xl font-bold italic group-hover:text-white transition-colors">
                  7.
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2 bg-white/50 px-3 py-1 rounded-full border border-black/5">
                  <div className="w-5 h-5 rounded-full bg-gray-300 overflow-hidden">
                    <img
                      src={post.image}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[12px] font-bold opacity-70">
                    {post.author}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 opacity-60">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span className="text-[12px] font-bold">{post.time}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold leading-[1.1] tracking-tight group-hover:underline decoration-2 underline-offset-4">
                {post.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
