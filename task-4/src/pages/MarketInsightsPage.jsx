import CostOptimization from "../components/CostOptimization";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import MarketingInsightsFoundationCards from "../components/MarketInsightsFoundationCards";
import Navbar from "../components/Navbar";
import ResearchAnalysis from "../components/ResearchAnalysis";
import { brandHeroData } from "../data/marketInsightsData";

export default function MarketInsightsPage(){
  return(
    <>
    <Navbar/>
    <HeroSection data={brandHeroData}/>
    <ResearchAnalysis/>
    <MarketingInsightsFoundationCards/>
    <CostOptimization/>
    <Footer/>
    </>
  )
}