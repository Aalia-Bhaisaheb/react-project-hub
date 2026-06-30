import ConnectCornerSection from "../components/ConnectCornerSection";
import Footer from "../components/Footer";
import GetInTouch from "../components/GetInTouch";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import { brandHeroData, connectCornerData } from "../data/connectCornerData";

export default function ConnectCornerPage(){
  return(
    <>
      <Navbar/>
      <HeroSection data={brandHeroData}/>
      <GetInTouch/>
      <ConnectCornerSection/>
      <Footer/>
    </>
  );
}