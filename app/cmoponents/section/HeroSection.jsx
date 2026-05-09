"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MapPin, Award } from "lucide-react";

// ── Floating image URLs (rotate like the real site does) ──────────────────────
const FLOATING_IMAGES = [
  "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.14.49.png?w=300&h=300&q=80&fm=webp&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/WhatsApp-Image-2025-06-03-at-08.34.50.jpeg?w=300&h=300&q=80&fm=webp&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A6875.jpg?w=300&h=300&q=80&fm=webp&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=300&h=300&q=80&fm=webp&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/data.jpg?w=300&h=300&q=80&fm=webp&fit=crop",
];

// ── Background images for the blurred hero bg ─────────────────────────────────
const BG_IMAGES = [
  "https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5087.JPG?w=2500&h=1667&q=100&auto=format&fit=crop",
  "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A6875.jpg?w=2500&q=80&fm=webp",
  "https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=2500&q=80&fm=webp",
];

export default function HeroSection() {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const subRef = useRef(null);
  const bottomLeftRef = useRef(null);
  const bottomRightRef = useRef(null);
  const floatImgRef = useRef(null);
  const bgRef = useRef(null);

  const [bgIndex, setBgIndex] = useState(0);
  const [floatIndex, setFloatIndex] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);

  // ── GSAP entrance timeline ───────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      // badge
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power3.out" },
      );

      // headline lines stagger
      tl.fromTo(
        [line1Ref.current, line2Ref.current, line3Ref.current],
        { opacity: 0, y: 60, skewY: 2 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power4.out",
        },
        "-=0.4",
      );

      // floating image pop
      tl.fromTo(
        floatImgRef.current,
        { opacity: 0, scale: 0.6, rotate: -8 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.6,
          ease: "back.out(1.6)",
        },
        "-=0.5",
      );

      // sub-headline
      tl.fromTo(
        subRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.3",
      );

      // bottom corners
      tl.fromTo(
        [bottomLeftRef.current, bottomRightRef.current],
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" },
        "-=0.3",
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // ── Floating image continuously rotates every 2.5s ───────────────────────────
  useEffect(() => {
    const interval = setInterval(() => {
      const el = floatImgRef.current;
      if (!el) return;

      gsap.to(el, {
        opacity: 0,
        scale: 0.85,
        rotate: 6,
        duration: 0.22,
        ease: "power2.in",
        onComplete: () => {
          setFloatIndex((prev) => (prev + 1) % FLOATING_IMAGES.length);
          gsap.fromTo(
            el,
            { opacity: 0, scale: 0.8, rotate: -6 },
            {
              opacity: 1,
              scale: 1,
              rotate: 0,
              duration: 0.35,
              ease: "back.out(1.4)",
            },
          );
        },
      });
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // ── Background crossfade every 4s ────────────────────────────────────────────
  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(bgRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          setBgIndex((prev) => (prev + 1) % BG_IMAGES.length);
          gsap.to(bgRef.current, {
            opacity: 1,
            duration: 0.8,
            ease: "power2.inOut",
          });
        },
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // ── Subtle floating animation on the img ─────────────────────────────────────
  useEffect(() => {
    if (!floatImgRef.current) return;
    gsap.to(floatImgRef.current, {
      y: -8,
      duration: 2.2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col overflow-hidden bg-black">
      {/* ── BLURRED BACKGROUND ── */}
      <div className="absolute inset-0 z-0">
        <img
          ref={bgRef}
          src={BG_IMAGES[bgIndex]}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "blur(0px) brightness(0.55)" }}
          onLoad={() => setImgLoaded(true)}
        />
        {/* Extra darkening overlay for text legibility */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* ── MAIN CONTENT — vertically centered ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-32">
        {/* Award badge block */}
        <div
          ref={badgeRef}
          className="flex flex-col items-center mb-8 opacity-0">
          <p className="text-white/70 text-[11px] font-semibold tracking-[0.18em] uppercase mb-3">
            #1 Most Recommended
            <br />
            <span className="block text-center">Content Marketing Agency</span>
          </p>
          {/* Award logos row */}
          <div className="flex items-center gap-4 opacity-80">
            {/* Global Search Awards */}
            <div className="flex items-center gap-1.5 border border-white/20 rounded-full px-3 py-1.5">
              <Award size={11} className="text-white/70" />
              <span className="text-[10px] font-semibold text-white/80 tracking-wide uppercase">
                Global Search Awards
              </span>
            </div>
            <div className="flex items-center gap-1.5 border border-white/20 rounded-full px-3 py-1.5">
              <Award size={11} className="text-white/70" />
              <span className="text-[10px] font-semibold text-white/80 tracking-wide uppercase">
                The Drum
              </span>
            </div>
            <div className="flex items-center gap-1.5 border border-white/20 rounded-full px-3 py-1.5">
              <Award size={11} className="text-white/70" />
              <span className="text-[10px] font-semibold text-white/80 tracking-wide uppercase">
                UK Social Media Awards
              </span>
            </div>
            <div className="flex items-center gap-1.5 border border-white/20 rounded-full px-3 py-1.5">
              <Award size={11} className="text-white/70" />
              <span className="text-[10px] font-semibold text-white/80 tracking-wide uppercase">
                Content Awards
              </span>
            </div>
          </div>
        </div>

        {/* ── HEADLINE ── */}
        <div className="text-center select-none">
          {/* Line 1: "We Create" */}
          <h1
            ref={line1Ref}
            className="opacity-0 text-white font-black leading-[0.9] tracking-[-0.03em] block"
            style={{
              fontSize: "clamp(72px, 10vw, 160px)",
              fontFamily: "'Unbounded', sans-serif",
            }}>
            We Create
          </h1>

          {/* Line 2: "Category [img] Leaders" — inline flex */}
          <div
            ref={line2Ref}
            className="opacity-0 flex items-center justify-center gap-4 leading-[0.9]"
            style={{ fontSize: "clamp(72px, 10vw, 160px)" }}>
            <span
              className="text-white font-black tracking-[-0.03em]"
              style={{ fontFamily: "'Unbounded', sans-serif" }}>
              Category
            </span>

            {/* Floating image pill */}
            <div
              ref={floatImgRef}
              className="relative flex-shrink-0 overflow-hidden"
              style={{
                width: "clamp(80px, 8vw, 130px)",
                height: "clamp(80px, 8vw, 130px)",
                borderRadius: "20px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}>
              <img
                src={FLOATING_IMAGES[floatIndex]}
                alt="featured work"
                className="w-full h-full object-cover"
              />
            </div>

            <span
              className="text-white font-black tracking-[-0.03em]"
              style={{ fontFamily: "'Unbounded', sans-serif" }}>
              Leaders
            </span>
          </div>

          {/* Line 3: "on every searchable platform" */}
          <p
            ref={subRef}
            className="opacity-0 mt-6 text-white/80 font-medium tracking-[-0.01em]"
            style={{
              fontSize: "clamp(16px, 2vw, 26px)",
              fontFamily: "'DM Sans', sans-serif",
            }}>
            on every searchable platform
          </p>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="relative z-10 flex items-end justify-between px-8 pb-8">
        {/* Bottom left: tagline */}
        <div ref={bottomLeftRef} className="opacity-0 max-w-xs">
          <p
            className="text-white/70 text-[13px] leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Organic media planners creating, distributing &amp; optimising{" "}
            <strong className="text-white font-semibold">search-first</strong>{" "}
            content for SEO, Social, PR, Ai and LLM search
          </p>
        </div>

        {/* Bottom right: offices */}
        <div ref={bottomRightRef} className="opacity-0 text-right">
          <div className="flex items-center gap-1.5 justify-end mb-1">
            <MapPin size={12} className="text-white/50" />
            <span className="text-white/50 text-[11px] font-medium uppercase tracking-widest">
              4 Global Offices serving
            </span>
          </div>
          <p
            className="text-white font-semibold text-[14px]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            UK, USA (New York) &amp; EU
          </p>
        </div>
      </div>
    </section>
  );
}
