import BrandPositioning from "../components/BrandPositioning";
import BrandingFoundationCards from "../components/BrandingFoundationCards";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import MonitorinReporting from "../components/MonitoringReporting";
import Navbar from "../components/Navbar";
import ServicesCards from "../components/ServicesCards";
import { brandHeroData } from "../data/nextGenBranding";

export default function NextGenBrandingPage(){
  return(
    <>
    <Navbar/>
    <HeroSection data={brandHeroData}/>
    <BrandPositioning/>
    <BrandingFoundationCards/>
    <ServicesCards/>
    <MonitorinReporting/>
    <Footer/>
    </>
  )
}