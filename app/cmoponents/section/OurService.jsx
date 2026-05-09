"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    id: 1,
    name: "Digital PR",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000",
  },
  {
    id: 2,
    name: "Search & Growth Strategy",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000",
  },
  {
    id: 3,
    name: "Data & Insights",
    img: "https://images.unsplash.com/photo-1551288049-bbbda536ad80?q=80&w=1000",
  },
  {
    id: 4,
    name: "Organic Social & Content",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000",
  },
  {
    id: 5,
    name: "Content Experience",
    img: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1000",
  },
  {
    id: 6,
    name: "Onsite SEO",
    img: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1000",
  },
];

export default function OurServices() {
  return (
    <section className="py-16 px-6 md:px-20 bg-[#f3f3f3]">
      {/* Header - Compact Size */}
      <div className="flex justify-between items-center mb-8 border-b border-black/5 pb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">
            Our Services
          </h2>
          <div className="w-12 h-12 rounded-xl overflow-hidden border border-black/5">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=200"
              alt="team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <button className="hidden md:flex items-center gap-2 bg-white border border-black/10 px-6 py-2 rounded-full text-xs font-bold hover:bg-black hover:text-white transition-all duration-300">
          View All Services <ArrowUpRight size={14} />
        </button>
      </div>

      {/* Services Grid - 2 Columns Compact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="group relative h-20 md:h-24 flex items-center px-6 border-b border-black/10 overflow-hidden cursor-pointer">
            {/* Background Image Pill with "Laf" (Bounce) Effect */}
            <div className="absolute inset-y-2 left-2 right-2 z-0 opacity-0 scale-x-90 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) pointer-events-none">
              <div className="w-full h-full relative rounded-full overflow-hidden">
                <img
                  src={service.img}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                  alt={service.name}
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>

            {/* Text & Icon with Entrance Animation */}
            <div className="relative z-10 flex items-center gap-3 w-full">
              <div className="overflow-hidden w-0 group-hover:w-10 transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)">
                <ArrowUpRight className="text-white" size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-black group-hover:text-white transition-colors duration-300 group-hover:translate-x-2 transition-transform duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)">
                {service.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
