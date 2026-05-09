"use client";

import { motion } from "framer-motion";

const MarqueeItem = ({ text, img }) => {
  return (
    // এখানে gap এবং flex-shrink-0 নিশ্চিত করবে যেন টেক্সট চ্যাপ্টা বা ওভারল্যাপ না হয়
    <div className="flex items-center gap-10 md:gap-16 flex-shrink-0 pr-10 md:pr-16">
      {/* Rounded Image */}
      <div className="w-16 h-16 md:w-24 md:h-24 rounded-[30px] overflow-hidden flex-shrink-0">
        <img src={img} alt="team" className="w-full h-full object-cover" />
      </div>
      {/* Big Bold Text */}
      <h2 className="text-[80px] md:text-[150px] lg:text-[180px] font-bold tracking-tighter text-black leading-none whitespace-nowrap">
        {text}
      </h2>
    </div>
  );
};

export default function ScrollingText() {
  return (
    <section className="py-10 md:py-14 bg-[#f3f3f3] overflow-hidden">
      <div className="flex overflow-hidden whitespace-nowrap relative">
        {/* First Marquee Set */}
        <motion.div
          className="flex items-center flex-nowrap"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 85, 
            repeat: Infinity,
            ease: "linear",
          }}>
          <MarqueeItem
            text="Not Algorithm"
            img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400"
          />
          <MarqueeItem
            text="Not Algorithm"
            img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400"
          />
          <MarqueeItem
            text="Not Algorithm"
            img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400"
          />
          <MarqueeItem
            text="Not Algorithm"
            img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400"
          />
        </motion.div>

        
        <motion.div
          className="flex items-center flex-nowrap"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}>
          <MarqueeItem
            text="Not Algorithm"
            img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400"
          />
          <MarqueeItem
            text="Not Algorithm"
            img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400"
          />
          <MarqueeItem
            text="Not Algorithm"
            img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400"
          />
          <MarqueeItem
            text="Not Algorithm"
            img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400"
          />
        </motion.div>
      </div>
    </section>
  );
}
