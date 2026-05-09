export default function MethodologySection() {
  return (
    <section className="w-full pb-12 xl:pb-24">
      <div className="w-full px-4 md:px-7">
        <div className="grid grid-cols-12 gap-x-3 gap-y-3 md:gap-x-5 md:gap-y-5">
          <div className="col-span-12 lg:col-span-5 xl:col-span-6">
            <h2 className="text-balance text-left text-3xl font-medium leading-none tracking-tight text-zinc-900 lg:text-5xl xl:text-6xl">
              Methodology
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-7 xl:col-span-6 3xl:col-span-5 3xl:col-start-8">
            <div className="w-full lg:pr-20">
              <p className="mb-0 text-pretty text-sm leading-normal text-zinc-900 lg:text-base">
                We compiled the top 100 generic search keywords across Google,
                YouTube, TikTok, Instagram, and Pinterest, sourcing search
                volume data via{" "}
                <a
                  href="http://keywordtool.io/"
                  target="_blank"
                  rel="noreferrer"
                  className="break-words rounded-md bg-emerald-200 px-1 py-0.5 text-zinc-900 transition-all hover:bg-emerald-300"
                >
                  Keyword Tool
                </a>{" "}
                and Ahrefs for both the UK and USA. The dataset was then
                analysed to identify category-level trends and quantify the
                largest disparities in search behaviour between platforms,
                alongside other notable patterns and insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
