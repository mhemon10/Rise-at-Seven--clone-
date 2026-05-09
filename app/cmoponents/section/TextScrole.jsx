"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ReadyToRise() {
  const sectionRef = useRef(null);
  const track1Ref = useRef(null); 

  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(
        track1Ref.current,
        { x: "0%" },
        {
          x: "-30%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        },
      );


      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 32, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  const TEXT = "Ready to Rise?";
  const REPEAT = 2; 
  const repeated = Array(REPEAT).fill(TEXT);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden flex flex-col items-center justify-center"
      style={{
        background: "#eceae5",
        paddingTop: "clamp(80px, 12vw, 160px)",
        paddingBottom: "clamp(80px, 12vw, 160px)",
      }}>
      {/* ── ROW 1 — slides LEFT on scroll ── */}
      <div
        className="w-full overflow-hidden"
        style={{ marginBottom: "-0.08em" }} // tight line gap like real site
      >
        <div
          ref={track1Ref}
          className="flex whitespace-nowrap"
          style={{ width: "max-content" }}>
          {repeated.map((text, i) => (
            <span
              key={i}
              className="font-black text-black select-none"
              style={{
                fontSize: "clamp(100px, 16vw, 220px)",
                fontFamily: "'Unbounded', sans-serif",
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                paddingRight: "0.3em",
              }}>
              {text}
            </span>
          ))}
        </div>
      </div>

    

      {/* ── CTA block ── */}
      <div
        ref={ctaRef}
        className="relative z-10 flex flex-col items-center gap-6 opacity-0"
        style={{ marginTop: "clamp(40px, 6vw, 80px)" }}>
        <p
          className="text-center text-black/50 font-medium"
          style={{
            fontSize: "clamp(14px, 1.4vw, 18px)",
            fontFamily: "'DM Sans', sans-serif",
            maxWidth: 400,
            lineHeight: 1.6,
          }}>
          Let's build something the industry will be copying in 3 years.
        </p>

        <Link
          href="/connect-with-us"
          className="inline-flex items-center gap-2 font-semibold transition-all duration-200 group"
          style={{
            background: "#0a0a0a",
            color: "#ffffff",
            fontSize: "clamp(13px, 1.2vw, 16px)",
            fontFamily: "'DM Sans', sans-serif",
            padding: "clamp(14px, 1.5vw, 18px) clamp(28px, 3vw, 44px)",
            borderRadius: 999,
          }}
          onMouseEnter={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1.04,
              backgroundColor: "#f5e642",
              color: "#0a0a0a",
              duration: 0.22,
              ease: "power2.out",
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1,
              backgroundColor: "#0a0a0a",
              color: "#ffffff",
              duration: 0.22,
              ease: "power2.out",
            });
          }}>
          Get in touch
          <ArrowUpRight
            size={16}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150"
          />
        </Link>
      </div>
    </section>
  );
}
