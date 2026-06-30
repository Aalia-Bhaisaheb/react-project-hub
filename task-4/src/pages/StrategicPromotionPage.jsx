import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import PresenceCanvas from "../components/PresenceCanvas";
import StrategicBrandPromotion from "../components/StrategicBrandPromotion";
import StrategyFoundationCards from "../components/StrategyFoundationCards";
import StructuringCampaign from "../components/StructuringCampaign";
import { brandHeroData } from "../data/strategicPromotionData";

export default function StrategicPromotionPage(){
  return(
    <>
  <Navbar/>
  <HeroSection data={brandHeroData}/>
  <StrategicBrandPromotion/>
  <StrategyFoundationCards/>
  <PresenceCanvas/>
  <StructuringCampaign/>
  <Footer/>
  </>
  )
}