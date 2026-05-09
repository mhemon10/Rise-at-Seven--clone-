import React from "react";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-[#eeeeee] min-h-[400px] flex items-center py-12 px-6 md:px-10 lg:px-10">
     
      <div className="w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Left Side: Compact Description */}
        <div className="w-full lg:max-w-[400px] pt-2">
          <h3 className="text-[22px] md:text-[26px] lg:text-[28px] font-medium leading-[1.1] tracking-tight text-black">
            A global team of search-first content marketers engineering semantic
            relevancy & category signals for both the internet and people
          </h3>
        </div>

        {/* Right Side: Heading & Logic */}
        <div className="w-full lg:w-auto flex flex-col items-start lg:items-start">
          <div className="relative">
            {/* Font size adjusted for better responsiveness */}
            <h1 className="text-[45px] sm:text-[60px] md:text-[80px] lg:text-[70px] xl:text-[70px] font-medium leading-[0.85] tracking-[-0.05em] text-black">
              Driving Demand & <br />
              <span className="flex items-center gap-3 md:gap-5">
                Discovery
                {/* Responsive Image Box */}
                <div className="relative w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[90px] lg:h-[80px] rounded-[20px] md:rounded-[10px] overflow-hidden translate-y-[5px] md:translate-y-[10px]">
                  <img
                    src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80"
                    alt="Workplace"
                    className="w-full h-full object-cover"
                  />
                </div>
              </span>
            </h1>
          </div>

          {/* Buttons Area */}
          <div className="mt-8 md:mt-8 flex flex-wrap items-center gap-5 md:gap-8">
            {/* Primary Button: Round to Square with Text Jump */}
            <button
              className="group relative bg-white text-black px-6 py-2.5 md:px-8 md:py-3.5 text-[15px] md:text-[16px] font-semibold flex items-center gap-2 
    transition-all duration-[100ms] cubic-bezier(0.19, 1, 0.22, 1)
    rounded-full hover:rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {/* Text and Icon Wrapper for Jump Effect */}
              <span className="flex items-center gap-2 transition-transform duration-100 ease-out group-hover:-translate-y-1 group-hover:translate-x-0.5">
                Our Story
                <ArrowUpRight className="w-4 h-4 md:w-[18px] md:h-[18px]" />
              </span>
            </button>

            {/* Secondary Button: Text Jump Only */}
            <button className="group flex items-center gap-2 text-[15px] md:text-[16px] font-semibold text-black hover:opacity-70 transition-all">
              <span className="flex items-center gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-0.5">
                Our Services
                <ArrowUpRight className="w-4 h-4 md:w-[18px] md:h-[18px]" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
