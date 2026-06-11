import CoreBenefits from "../components/CoreBenifits";
import CustomerOutreach from "../components/CustomerOutreach";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import MarketingFoundationCards from "../components/MarketingFoundationCards";
import Navbar from "../components/Navbar";
import SalesPerformanceTracking from "../components/SalesPerformanceTracking";
import { brandHeroData } from "../data/creativeMarketingData";

export default function CreativeMarketingPage(){
  return (
    <>
      <Navbar/>
      <HeroSection data={brandHeroData} />
      <CustomerOutreach/>
      <MarketingFoundationCards/>
      <CoreBenefits/>
      <SalesPerformanceTracking/>
      <Footer/>
    </>
  );
}