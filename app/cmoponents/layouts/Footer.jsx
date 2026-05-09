"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

import { HiArrowUpRight } from "react-icons/hi2";

export default function RiseStyleFooter() {
  const leftLinks = ["Services", "Work", "About", "Culture", "Meet The Risers"];

  const middleLinks = [
    "Testimonials",
    "Blog & Resources",
    "Webinars",
    "Careers",
  ];

  const rightLinks = [
    "Sheffield",
    "Manchester",
    "London",
    "New York",
    "Contact",
  ];

  const socials = [FaFacebookF, FaLinkedinIn, FaYoutube, FaTiktok, FaInstagram];

  return (
    <footer className="bg-white p-2 md:p-4">
      <div className="bg-black text-white rounded-[24px] overflow-hidden">
        {/* TOP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 px-5 md:px-8 pt-8 md:pt-10">
          {/* LEFT */}
          <div className="lg:col-span-5">
            <h2 className="text-[28px] md:text-[44px] leading-[1] font-semibold tracking-[-0.04em] mb-6">
              Stay updated with Rise news
            </h2>

            {/* EMAIL */}
            <div className="relative max-w-lg">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full h-[64px] rounded-full bg-[#1b1b1b] border border-white/5 pl-6 pr-20 text-lg outline-none placeholder:text-[#8f8f8f]"
              />

              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-[50px] h-[50px] rounded-full bg-[#c8f5e8] text-black flex items-center justify-center hover:scale-105 transition-all duration-300">
                <HiArrowUpRight className="text-2xl" />
              </button>
            </div>

            {/* SOCIALS */}
            <div className="flex flex-wrap gap-2 mt-6">
              {socials.map((Icon, idx) => (
                <Link
                  key={idx}
                  href="/"
                  className="group bg-white text-black rounded-full hover:rounded-md px-3 py-1.5 flex items-center gap-1.5 transition-all duration-100">
                  <Icon className="text-xs" />

                  <HiArrowUpRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT MENUS */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* COL 1 */}
            <div className="sm:border-l border-white/30 sm:pl-5">
              <ul className="space-y-3">
                {leftLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href="/"
                      className="group inline-block text-[22px] md:text-[30px] lg:text-[22px] leading-none font-medium tracking-[-0.04em] transition-all duration-300 hover:text-[#c8f5e8] hover:-translate-y-1">
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                        {item}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COL 2 */}
            <div className="sm:border-l border-white/30 sm:pl-5">
              <ul className="space-y-3">
                {middleLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href="/"
                      className="group inline-block text-[22px] md:text-[30px] lg:text-[22px] leading-none font-medium tracking-[-0.04em] transition-all duration-300 hover:text-[#c8f5e8] hover:-translate-y-1">
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                        {item}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COL 3 */}
            <div className="sm:border-l border-white/30 sm:pl-5">
              <ul className="space-y-3">
                {rightLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href="/"
                      className="group inline-block text-[22px] md:text-[30px] lg:text-[22px] leading-none font-medium tracking-[-0.04em] transition-all duration-300 hover:text-[#c8f5e8] hover:-translate-y-1">
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                        {item}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* HUGE SVG IMAGE */}
        <div className="px-4 md:px-6 mt-30 mb-10 overflow-hidden">
          <Image
            src="/footer.svg"
            alt="TCG Footer Logo"
            width={2000}
            height={400}
            priority
            className="w-full h-auto object-contain brightness-0 invert opacity-90"
          />
        </div>

        {/* BOTTOM */}
        <div className="px-5 md:px-8 pb-15  pt-1">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 text-xs text-white/60">
            <div className="flex flex-wrap items-center gap-3 md:gap-5">
              <span>© 2025 Rise at Seven Ltd.</span>

              <span>•</span>

              <span>Company No 11955187</span>

              <span>•</span>

              <Link href="/" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>

              <span>•</span>

              <Link href="/" className="hover:text-white transition-colors">
                Terms
              </Link>
            </div>

            <p className="text-white/60">Website MadeByShape</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
