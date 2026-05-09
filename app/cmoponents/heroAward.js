import GoogleImage from "../../public/google.jpg";
import Image from "next/image";
import RImage from "../../public/r.png";

export default function HeroAwardsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center text-white text-center">

      <div className="-translate-y-10 md:-translate-y-16">

        {/* Top badge + awards row */}
        <div className="flex flex-col items-center mb-5">
          <div className="uppercase text-xs font-medium tracking-tight mb-2 max-w-52">
            #1 Most recommended content marketing agency
          </div>

          <div className="flex items-center gap-x-2">
            <svg viewBox="0 0 28 38" className="w-6 fill-current text-white">
              <path d="M25.826 36.2423C24.1628..." />
            </svg>

            <div className="w-12">
              <Image src={GoogleImage} alt="Award" width={80} height={40} />
            </div>

            <div className="w-12">
              <Image src={GoogleImage} alt="Award" width={80} height={40} />
            </div>

            <div className="w-12">
              <Image src={GoogleImage} alt="Award" width={80} height={40} />
            </div>

            <svg viewBox="0 0 28 38" className="w-6 fill-current text-white">
              <path d="M26.1158 19.5111C24.7952..." />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-semibold text-8xl md:text-8xl lg:text-8xl xl:text-8xl tracking-tight leading-tight">
          We Create <br /> Catagory{" "}
          <Image src={RImage} alt="Award" width={80} height={80} className="inline-block rounded-xl" /> Leaders
        </h1>

        <p className="mt-4 text-lg md:text-xl xl:text-2xl">
          on every searchable platform
        </p>

      </div>
    </section>
  );
}
