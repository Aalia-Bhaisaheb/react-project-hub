import BBCPartnership from "../components/BBCPartnership";
import CaseStudies from "../components/CaseStudies";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import { brandHeroData } from "../data/caseStudyData";

export default function CaseStudyPage(){
  return(
    <>
    <Navbar/>
    <HeroSection data={brandHeroData}/>
    <CaseStudies/>
    <Footer/>
    </>
  );
}