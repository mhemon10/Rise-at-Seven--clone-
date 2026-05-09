"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: 4790,
    title: "Search & Growth Strategy",
    href: "/services/strategy-growth",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.14.49.png?w=800&h=800&q=80&fm=webp&fit=crop",
  },
  {
    id: 11981,
    title: "Onsite SEO",
    href: "/services/onsite-seo",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/WhatsApp-Image-2025-06-03-at-08.34.50.jpeg?w=800&h=800&q=80&fm=webp&fit=crop",
  },
  {
    id: 4789,
    title: "Content Experience",
    href: "/services/content-experience",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.16.14.png?w=800&h=800&q=80&fm=webp&fit=crop",
  },
  {
    id: 22669,
    title: "B2B Marketing",
    href: "/services/b2b-marketing",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A6875.jpg?w=800&h=800&q=80&fm=webp&fit=crop",
  },
  {
    id: 12019,
    title: "Digital PR",
    href: "/services/digital-pr",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-22.39.35.png?w=800&h=800&q=80&fm=webp&fit=crop",
  },
  {
    id: 12020,
    title: "Social Media & Campaigns",
    href: "/services/social",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/temp_image_43CEDE6C-4430-479F-9DBF-B348FA9AC991.WEBP?w=800&h=800&q=80&fm=webp&fit=crop",
  },
  {
    id: 12021,
    title: "Data & Insights",
    href: "/services/data-insights",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/data.jpg?w=800&h=800&q=80&fm=webp&fit=crop",
  },
  {
    id: 16559,
    title: "Social SEO/Search",
    href: "/services/social-seo-tiktok-youtube",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-09-24-at-11.47.25.png?w=800&h=800&q=80&fm=webp&fit=crop",
  },
];

export default function Services() {
  const [active, setActive] = useState(services[0].id);

  const firstColumn = services.slice(0, 4);
  const secondColumn = services.slice(4);

  return (
    <div className="flex shrink-0 rounded-3xl bg-transparent text-black transition">
      <div className="flex flex-1 items-center justify-center px-12">
        <div className="flex gap-x-12">
          <div className="-mt-3 flex-1">
            <ul className="flex flex-col gap-y-0.5">
              <li className="h-8 text-base font-medium leading-tight tracking-tight text-gray-400">
                Core Services
              </li>

              {firstColumn.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onMouseEnter={() => setActive(item.id)}
                    className="group inline-flex w-fit text-xl font-medium leading-tight tracking-tight text-black"
                  >
                    <span className="relative block overflow-hidden truncate">
                      <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-8">
                        {item.title}
                      </span>

                      <span className="absolute left-0 top-0 block translate-y-8 transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                        {item.title}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="-mt-3 flex-1">
            <ul className="flex flex-col gap-y-0.5">
              <li className="h-8" />

              {secondColumn.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onMouseEnter={() => setActive(item.id)}
                    className="group inline-flex w-fit text-xl font-medium leading-tight tracking-tight text-black"
                  >
                    <span className="relative block overflow-hidden truncate">
                      <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-8">
                        {item.title}
                      </span>

                      <span className="absolute left-0 top-0 block translate-y-8 transition-transform duration-300 ease-in-out group-hover:translate-y-0">
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

      <div className="relative w-80 shrink-0 p-3">
        <div className="absolute bottom-0 left-0 z-20 w-full p-5">
          <Link
            href="/services"
            className="group inline-flex w-full flex-row-reverse items-center justify-center gap-x-2 overflow-hidden rounded-3xl bg-zinc-900 px-6 py-3 text-base font-medium leading-tight tracking-tight text-white transition-all duration-300 ease-in-out hover:rounded-xl"
          >
            <span className="relative block overflow-hidden">
              <span className="flex items-center gap-x-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-6">
                <span>View all services</span>
                <ArrowUpRight size={16} />
              </span>

              <span className="absolute left-0 top-0 flex translate-y-6 items-center gap-x-2 transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                <span>View all services</span>
                <ArrowUpRight size={16} />
              </span>
            </span>
          </Link>
        </div>

        <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-2xl bg-zinc-900">
          {services.map((item) => (
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
