import Navbar              from "../components/Navbar";
import HeroSection         from "../components/HeroSection";
import CommunityEngagement from "../components/CommunityEngagement";
import FoundationCards     from "../components/FoundationCards";
import ReputationSlider    from "../components/ReputationSlider";
import Footer              from "../components/Footer";
import { brandHeroData }   from "../data/brandBuildingData";

export default function BrandBuildingPage() {
  return (
    <>
      <Navbar />
      <HeroSection data={brandHeroData} />
      <CommunityEngagement />
      <FoundationCards />
      <ReputationSlider />
      <Footer />
    </>
  );
}