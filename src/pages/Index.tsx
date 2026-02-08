import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import ServicesOverview from "@/components/home/ServicesOverview";
import AtlasPartnership from "@/components/home/AtlasPartnership";
import SupportSection from "@/components/home/SupportSection";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesOverview />
      <AtlasPartnership />
      <SupportSection />
      <PortfolioPreview />
      <Testimonials />
      <FinalCTA />
    </>
  );
};

export default Index;
