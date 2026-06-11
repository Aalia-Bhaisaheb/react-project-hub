import AboutSection from "../components/AboutSection"
import ApplicationsSection from "../components/ApplicationsSection"
import ContactSection from "../components/ContactSection"
import HeroSection from "../components/HeroSection"
import ProductsSection from "../components/ProductsSection"

export default function HomePage(){
  return(
  <>
  <HeroSection/>
  <AboutSection/>
  <ProductsSection/>
  <ApplicationsSection/>
  <ContactSection/>
  </>
  );
}