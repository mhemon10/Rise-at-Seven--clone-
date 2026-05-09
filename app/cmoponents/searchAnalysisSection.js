export default function SearchAnalysisSection() {
  const insights = [
    "Google only accounts for just 34.5% of total search share of those keywords while YouTube (24%), TikTok (16.7%), and Instagram (20.9%) collectively capture more than 60% of search discovery.",
    "The average consumer now uses 3.6 platforms before making a purchase.",
    "A buying journey can take anywhere from 2 days to 10 weeks, with up to 97 interactions along the way.",
    "Google now only accounts for 34.5% of total search share, while YouTube (24%), TikTok (16.7%), and Instagram (20.9%) collectively dominate over 60% of discovery.",
    "TikTok drives 17–18% of all search activity in both the UK and US.",
    "YouTube now accounts for ~25% of total search volume across categories.",
    "Instagram dominates fashion (25%+), food (25%+), and beauty categories.",
    "Pinterest holds steady at ~4% - small but high-intent for the visual planning stage.",
  ];

  return (
    <section className="w-full pb-12 xl:pb-24">
      <div className="w-full px-4 md:px-7">
        <div className="grid grid-cols-12 gap-x-3 gap-y-3 md:gap-x-5 md:gap-y-5">
          <div className="col-span-12 lg:col-span-5 xl:col-span-6">
            <h2 className="text-balance text-left text-3xl font-medium leading-none tracking-tight text-zinc-900 lg:text-5xl xl:text-6xl">
              We analysed 1.5bn searches over 9,000 customer journeys
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-7 xl:col-span-6 3xl:col-span-5 3xl:col-start-8">
            <div className="w-full lg:pr-20">
              <p className="mb-5 text-pretty text-sm leading-normal text-zinc-900 lg:text-base">
                The{" "}
                <strong className="font-medium">
                  Rise at Seven SEO & Data team
                </strong>{" "}
                analysed <strong className="font-medium">1.5 billion searches</strong>{" "}
                across 5 channels of the most-searched keywords on the internet
                with commercial intent, spanning{" "}
                <strong className="font-medium">
                  Travel, Fashion, Beauty, Tech & Electronics, Health,
                  Automotive, Food, Gaming, Sport & Fitness, and Home & Garden
                </strong>
                , to uncover how people really discover and buy in{" "}
                <strong className="font-medium">2025/26</strong>.
              </p>

              <p className="mb-5 text-pretty text-sm leading-normal text-zinc-900 lg:text-base">
                What we found changes everything:
              </p>

              <ul className="my-5 grid list-outside list-disc gap-x-10 gap-y-2 pl-8 text-sm leading-normal text-zinc-900 marker:text-zinc-900 lg:grid-cols-2 lg:text-base">
                {insights.map((item) => (
                  <li key={item} className="text-pretty lg:pr-10 lg:text-balance">
                    <p className="mb-5 text-pretty text-sm italic leading-normal text-zinc-900 lg:text-base">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="mb-5 text-pretty text-sm leading-normal text-zinc-900 lg:text-base">
                Keywords analysed were mostly bottom of the funnel generic non
                brand keywords.
              </p>

              <p className="mb-0 text-pretty text-sm leading-normal text-zinc-900 lg:text-base">
                Examples: “Beauty Blenders”, “Dashcams”, “Mascara”, “Cowboy
                boots”, “Gaming Laptop”, “Knee pain”, “Garden Furniture”,
                “Luxury hotels Majorca”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
