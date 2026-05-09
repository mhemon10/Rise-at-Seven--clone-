import Image from "next/image";
import Navbar from "./cmoponents/navbar";
import TopBar from "./cmoponents/topbar";
import HeroAwardsSection from "./cmoponents/heroAward";
import ReportSection from "./cmoponents/reportSection";
import SearchAnalysisSection from "./cmoponents/searchAnalysisSection";
import ImageMarqueeSection from "./cmoponents/imageMarqueeSection";
import MethodologySection from "./cmoponents/methodologySection";
import AutoLogoSlider from "./cmoponents/section/AutoLogoSlider";
import Hero from "./cmoponents/section/Hero";
import FeaturedWork from "./cmoponents/section/FeaturedWork";
import OurServices from "./cmoponents/section/OurService";
import ScrollingText from "./cmoponents/section/ScrollingText";
import StackedCards from "./cmoponents/section/StackedCards";
import WhatsNew from "./cmoponents/section/WhatsNew";
import TextScrollSection from "./cmoponents/section/TextScrole";

export default function Home() {
  return (
    <>
      <section className="h-screen m-2 p-2 rounded-4xl relative overflow-hidden">
        {/* Blurred background image */}
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center blur-md"
          style={{
            backgroundImage:
              "url('https://rise-atseven.transforms.svdcdn.com/production/images/RedBull-Instagram-Post-45.png?w=1890&h=2363&q=100&auto=format&fit=crop&dm=1753775231&s=60dc0e3c84825da30f8d809caf5fabe1')",
          }}
        />

        {/* Optional dark overlay for readability */}
        <div className="absolute inset-0 " />

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <HeroAwardsSection />
          
        </div>

        {/* <HeroAwardsSection /> */}
      </section>
      <AutoLogoSlider />
      <Hero />
      <FeaturedWork />
      <OurServices />
      <ScrollingText />
      <StackedCards />
      <WhatsNew />
      <TextScrollSection/>
      {/* <ReportSection />
      <SearchAnalysisSection />
      <ImageMarqueeSection />
      <MethodologySection /> */}
    </>
  );
}
