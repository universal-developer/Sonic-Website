import NavBar from "@/components/layout/NavBar";
import FAQSection from "@/components/sections/FAQSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HeroSection from "@/components/sections/HeroSection";
import ProductDescriptionSection from "@/components/sections/ProductDescriptionSection";
import ProductShowSection from "@/components/sections/ProductShowSection";
import SoundInsights from "@/components/sections/SoundInsights";
import { SpeakerPromoSection } from "@/components/sections/SpeakerPromoSection";
import StatsSection from "@/components/sections/StatsSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ProductDescriptionSection />
      <FeaturesSection />
      <StatsSection />
      <ProductShowSection />
      <FAQSection />
      <SoundInsights />
      <SpeakerPromoSection />
    </>
  );
}
