"use client";

import { useState } from "react";
import Link from "next/link";

export default function TopBar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div
      className={`pt-2.5 px-2.5 w-full transition-opacity ease-in-out ${
        mobileMenu
          ? "opacity-0 pointer-events-none"
          : "opacity-100 pointer-events-auto"
      }`}
    >
      <Link
        target="_blank"
        href="https://riseatseven.com/multi-channel-search-report-2026-/"
        className="group bg-[#A8F0D1] flex justify-center z-[60] relative items-center w-full py-2 px-5 text-black text-xs font-semibold text-center tracking-tight leading-none rounded-2xl transition ease-in-out lg:text-[13px] hover:rounded-md"
      >
        {/* Mobile */}
        <div className="block mt-0.5 lg:hidden">
          🚨 Where are your customers actually searching? Download the report
        </div>

        {/* Desktop animated text */}
        <div className="relative overflow-hidden mt-0.5 hidden lg:block pb-[1px]">
          <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-6">
            🚨 Where are your customers actually searching? Download the report
          </div>

          <div className="transition-transform duration-300 ease-in-out pb-[1px] absolute top-0 left-0 translate-y-6 group-hover:translate-y-0">
            🚨 Where are your customers actually searching? Download the report
          </div>
        </div>
      </Link>
    </div>
  );
}
