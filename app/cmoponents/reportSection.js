import { ArrowUpRight } from "lucide-react";
import BookImage from "../../public/book.png";
import Image from "next/image";

export default function ReportSection() {
  return (
    <section className="w-full py-12 xl:py-24">
      <div className="w-full px-4 md:px-7">
        <div className="grid grid-cols-12 gap-x-3 gap-y-3 md:gap-x-5 md:gap-y-5 lg:min-h-[32rem]">
          <div className="col-span-12 grid overflow-hidden rounded-3xl md:col-span-5 lg:col-span-6">
            <div className="relative z-0 col-start-1 row-start-1 aspect-[4/3] lg:aspect-auto">
              <Image
                src={BookImage}
                alt="Homepage image"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="relative z-20 col-start-1 row-start-1 flex flex-col items-start justify-between gap-y-3 p-5 md:gap-y-5 lg:p-7">
              <h2 className="max-w-xl text-balance text-3xl font-medium leading-none tracking-tight text-white lg:text-5xl xl:text-6xl">
                Multi-channel search insights for the year ahead
              </h2>

              <div className="mt-3 flex flex-col items-start gap-y-3 md:gap-y-5 lg:mt-0">
                <p className="max-w-md text-balance text-base font-medium leading-tight tracking-tight text-white lg:text-lg xl:text-xl">
                  Learn how search behavior is changing across Google, TikTok,
                  YouTube, marketplaces, and AI discovery.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 flex flex-col items-start gap-y-3 rounded-3xl bg-white p-5 md:col-span-7 md:gap-y-5 lg:col-span-6 lg:px-10 lg:py-10">
            <h2 className="text-balance text-3xl font-medium leading-none tracking-tight text-zinc-900 lg:text-4xl xl:text-5xl">
              Download the 2025/26 Multi channel Search Report
            </h2>

            <form className="mt-2 w-full space-y-5">
              <p className="text-base text-black">
                Fill out the form to get instant access.
              </p>

              <div className="space-y-2">
                <label className="block text-base font-medium text-zinc-900">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  name="name"
                  className="w-full rounded-md border border-teal-800 bg-slate-50 px-3 py-3 text-base text-zinc-900 outline-none transition focus:ring-2 focus:ring-teal-800/20"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-base font-medium text-zinc-900">
                  Company <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  name="company"
                  className="w-full rounded-md border border-teal-800 bg-slate-50 px-3 py-3 text-base text-zinc-900 outline-none transition focus:ring-2 focus:ring-teal-800/20"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-base font-medium text-zinc-900">
                  Job Title <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  name="jobTitle"
                  className="w-full rounded-md border border-teal-800 bg-slate-50 px-3 py-3 text-base text-zinc-900 outline-none transition focus:ring-2 focus:ring-teal-800/20"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-base font-medium text-zinc-900">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="Work email (no personal addresses)"
                  className="w-full rounded-md border border-teal-800 bg-slate-50 px-3 py-3 text-base text-zinc-900 outline-none transition focus:ring-2 focus:ring-teal-800/20"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-3xl bg-zinc-900 px-6 py-3 text-base font-medium text-white transition-all duration-300 ease-in-out hover:rounded-xl"
              >
                <span>Submit</span>
                <ArrowUpRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
