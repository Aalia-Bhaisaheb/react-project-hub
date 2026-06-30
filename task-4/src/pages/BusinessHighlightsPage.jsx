import BBCPartnership from "../components/BBCPartnership";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import MarketingGuide from "../components/MarketingGuide";
import Navbar from "../components/Navbar";
import { brandHeroData } from "../data/businessHighlightsData";

export default function BusinessHighlightsPage(){
  return(
    <>
      <Navbar/>
      <HeroSection data={brandHeroData}/>
      <MarketingGuide/>
      <BBCPartnership/>
      <Footer/>
    </>
  )
}