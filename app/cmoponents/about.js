"use client";

import { useState } from "react";
import Link from "next/link";

const aboutLinks = [
  {
    id: 16915,
    title: "About Us",
    href: "/about",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7487.jpg?w=800&h=800&q=80&fm=webp&fit=crop",
  },
  {
    id: 16916,
    title: "Meet The Risers",
    href: "/meet-the-team",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.14.49.png?w=800&h=800&q=80&fm=webp&fit=crop",
  },
  {
    id: 16917,
    title: "Culture",
    href: "/culture",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/IMG_4280-2.jpg?w=800&h=800&q=80&fm=webp&fit=crop",
  },
  {
    id: 16918,
    title: "Testimonials",
    href: "/testimonials",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=800&h=800&q=80&fm=webp&fit=crop",
  },
];

export default function About() {
  const [active, setActive] = useState(aboutLinks[0].id);

  return (
    <div className="flex shrink-0 rounded-3xl bg-white text-black transition">
      <div className="flex flex-1 items-center justify-center px-12">
        <div className="flex gap-x-12">
          <div className="-mt-3 flex-1">
            <ul className="flex flex-col gap-y-0.5">
              <li className="h-8" />

              {aboutLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onMouseEnter={() => setActive(item.id)}
                    className="group inline-flex w-fit text-3xl font-medium leading-tight tracking-tight text-black"
                  >
                    <span className="relative block overflow-hidden truncate">
                      <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-10">
                        {item.title}
                      </span>

                      <span className="absolute left-0 top-0 block translate-y-10 transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                        {item.title}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative w-72 shrink-0 p-3">
        <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-2xl bg-zinc-900">
          {aboutLinks.map((item) => (
            <div
              key={item.id}
              className={`absolute inset-0 scale-105 transition-all duration-500 ease-in-out ${
                active === item.id
                  ? "opacity-100 blur-0"
                  : "opacity-0 blur-lg"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
