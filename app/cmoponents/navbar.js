"use client";

import { useState, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import Logo from "./logo";
import AnimatedButton from "./button";
import { ArrowUpRight } from "lucide-react";
import Services from "./services";
import International from "./international";
import About from "./about";
import gsap from "gsap";

const links = [
  { label: "Services", href: "/services", menu: "services", plus: true },
  {
    label: "International",
    href: "/international",
    menu: "international",
    plus: true,
  },
  { label: "About", href: "/about", menu: "about", plus: true },
  { label: "Work", href: "/work", menu: null, badge: "25" },
  { label: "Careers", href: "/careers", menu: null },
  { label: "Blog", href: "/blog", menu: null },
  { label: "Webinar", href: "/webinars", menu: null },
];

const menuComponents = {
  services: Services,
  international: International,
  about: About,
};

export default function Navbar() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [visibleMenu, setVisibleMenu] = useState(null);
  const [targetMenu, setTargetMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pillStyle, setPillStyle] = useState({ width: 0, left: 0 });

  const itemRefs = useRef([]);
  const timeoutRef = useRef(null);
  const dropdownRef = useRef(null);
  const visibleContentRef = useRef(null);
  const measureContentRef = useRef(null);
  const tlRef = useRef(null);

  useLayoutEffect(() => {
    if (hoverIndex === null) return;

    const el = itemRefs.current[hoverIndex];
    if (!el) return;

    setPillStyle({
      width: el.offsetWidth,
      left: el.offsetLeft,
    });
  }, [hoverIndex]);

  useLayoutEffect(() => {
    const dropdown = dropdownRef.current;
    const visibleContent = visibleContentRef.current;
    const measureContent = measureContentRef.current;

    if (!dropdown) return;

    if (tlRef.current) {
      tlRef.current.kill();
    }

    if (!targetMenu) {
      tlRef.current = gsap.timeline({
        onComplete: () => {
          setVisibleMenu(null);
          setActiveMenu(null);
          gsap.set(dropdown, { visibility: "hidden" });
        },
      });

      tlRef.current
        .to(visibleContent, {
          opacity: 0,
          duration: 0,
          ease: "power2.inOut",
        })
        .to(
          dropdown,
          {
            width: 0,
            height: 0,
            opacity: 0,
            duration: 0.2,
            ease: "power3.inOut",
            overwrite: "auto",
          },
          0
        );

      return;
    }

    if (!measureContent) return;

    requestAnimationFrame(() => {
      const nextWidth = Math.min(
        measureContent.scrollWidth,
        window.innerWidth - 40
      );
      const nextHeight = measureContent.scrollHeight;

      gsap.set(dropdown, {
        opacity: 1,
        visibility: "visible",
      });

      tlRef.current = gsap.timeline();

      tlRef.current
        .to(visibleContent, {
          opacity: 0,
          duration: 0,
          ease: "power2.inOut",
        })
        .to(
          dropdown,
          {
            width: nextWidth,
            height: nextHeight,
            duration: 0.2,
            ease: "power3.inOut",
            overwrite: "auto",
          },
          0
        )
        .call(() => {
          setVisibleMenu(targetMenu);
        })
        .fromTo(
          visibleContent,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.03,
            ease: "power2.inOut",
          }
        );
    });
  }, [targetMenu]);

  const handleEnter = (i) => {
    clearTimeout(timeoutRef.current);

    const menu = links[i].menu;

    setHoverIndex(i);

    if (menu) {
      setActiveMenu(menu);

      if (!visibleMenu) {
        setVisibleMenu(menu);
      }

      setTargetMenu(menu);
    } else {
      setTargetMenu(null);
    }
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoverIndex(null);
      setTargetMenu(null);
    }, 120);
  };

  const isDropdownOpen = activeMenu !== null || targetMenu !== null;
  const VisibleComponent = visibleMenu ? menuComponents[visibleMenu] : null;
  const MeasureComponent = targetMenu ? menuComponents[targetMenu] : null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 pointer-events-none transition-all duration-300"
        style={{
          backdropFilter: isDropdownOpen ? "blur(6px)" : "blur(0px)",
          WebkitBackdropFilter: isDropdownOpen ? "blur(6px)" : "blur(0px)",
          backgroundColor: isDropdownOpen
            ? "rgba(0,0,0,0.15)"
            : "rgba(0,0,0,0)",
        }}
      />

      <header className="relative z-50 w-full px-4">
        <div className="flex w-full items-center justify-between rounded-full bg-white/60 px-3 py-2 backdrop-blur-lg transition">
          <Link href="/" className="ml-2 flex w-32 text-black md:w-40">
            <Logo />
          </Link>

          <div
            onMouseLeave={handleLeave}
            className="group/links relative ml-10 hidden items-center lg:inline-flex"
          >
            <div
              className="pointer-events-none absolute z-0 hidden h-full rounded-full bg-gray-100 opacity-0 transition-all duration-300 group-hover/links:flex group-hover/links:opacity-100"
              style={{
                width: pillStyle.width,
                left: pillStyle.left,
                opacity: hoverIndex !== null ? 1 : 0,
              }}
            />

            {links.map((item, i) => (
              <div
                key={item.label}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                onMouseEnter={() => handleEnter(i)}
                className="relative z-10"
              >
                <Link
                  href={item.href}
                  className="group relative inline-flex px-4 py-1 font-medium leading-tight tracking-tight text-black transition-colors duration-300"
                >
                  {item.label}

                  {item.plus && (
                    <span className="ml-1 hidden pointer-events-none lg:inline">
                      +
                    </span>
                  )}

                  {item.badge && (
                    <span className="absolute right-0 top-0 -translate-y-2.5 rounded-full bg-emerald-200 px-1.5 py-0.5 text-[10px] font-light text-black transition-transform duration-300 group-hover:-translate-y-4">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </div>
            ))}
          </div>

          <div className="hidden lg:inline-flex">
            <AnimatedButton className="bg-black px-6 py-3 text-white">
              <span className="flex items-center gap-2">
                Get in touch <ArrowUpRight size={16} />
              </span>
            </AnimatedButton>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex h-8 w-12 items-center justify-center lg:hidden"
            aria-label="Toggle menu"
          >
            <span className="flex h-2 w-5 flex-col items-start justify-between">
              <span
                className={`h-0.5 w-full bg-black transition-transform duration-500 ${
                  mobileOpen ? "translate-y-1 rotate-45" : "rotate-0"
                }`}
              />
              <span
                className={`h-0.5 w-full bg-black transition-transform duration-500 ${
                  mobileOpen ? "-translate-y-1 -rotate-45" : "rotate-0"
                }`}
              />
            </span>
          </button>
        </div>

        <div
          ref={dropdownRef}
          onMouseEnter={() => clearTimeout(timeoutRef.current)}
          onMouseLeave={handleLeave}
          className="absolute left-1/2 top-full mt-3 -translate-x-1/2 overflow-hidden rounded-3xl bg-white backdrop-blur-lg"
          style={{
            pointerEvents: isDropdownOpen ? "auto" : "none",
            width: 0,
            height: 0,
            opacity: 0,
            visibility: "hidden",
          }}
        >
          <div
            ref={visibleContentRef}
            style={{
              width: "max-content",
              maxWidth: "calc(100vw - 40px)",
            }}
          >
            {VisibleComponent ? <VisibleComponent /> : null}
          </div>

          <div
            ref={measureContentRef}
            className="pointer-events-none invisible absolute left-0 top-0"
            style={{
              width: "max-content",
              maxWidth: "calc(100vw - 40px)",
            }}
          >
            {MeasureComponent ? <MeasureComponent /> : null}
          </div>
        </div>

        {mobileOpen && (
          <div className="mt-3 rounded-3xl bg-white p-5 text-black shadow-lg lg:hidden">
            <div className="flex flex-col gap-3">
              {links.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-2xl font-medium tracking-tight"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
