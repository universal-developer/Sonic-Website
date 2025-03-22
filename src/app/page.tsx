import NavBar from "@/components/layout/NavBar";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HeroSection from "@/components/sections/HeroSection";
import ProductDescriptionSection from "@/components/sections/ProductDescriptionSection";
import StatsSection from "@/components/sections/StatsSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ProductDescriptionSection />
      <FeaturesSection />
      <StatsSection />
    </>
  );
}
