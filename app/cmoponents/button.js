"use client";

import Link from "next/link";

export default function AnimatedButton({
  href = "https://example.com",
  children = "Get in touch",
  className = "",
  external = true,
  bgColor = "white",
  hidden = false,
}) {
  const Wrapper = external ? "a" : Link;
  const externalProps = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };

  return (
    <div
      className={`transition-opacity ease-in-out ${
        hidden
          ? "opacity-0 pointer-events-none"
          : "opacity-100 pointer-events-auto"
      } `}
    >
      <Wrapper
        {...externalProps}
        style={{ transitionProperty: "border-radius", transitionDuration: "300ms", transitionTimingFunction: "ease-in-out" }}
        className={`group flex justify-center z-[60] relative items-center rounded-4xl text-center tracking-tight leading-none hover:rounded-xl ${className}`}
      >
        {/* Mobile */}
        <div className="flex items-center mt-0.5 lg:hidden">{children}</div>

        {/* Desktop animated text */}
        <div className="relative overflow-hidden mt-0.5 hidden lg:block">
          <div className="flex items-center transition-transform duration-300 ease-in-out group-hover:-translate-y-6">
            {children}
          </div>
          <div className="flex items-center transition-transform duration-300 ease-in-out absolute top-0 left-0 translate-y-6 group-hover:translate-y-0">
            {children}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}