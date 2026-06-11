import Navbar              from "../components/Navbar";
import HeroSection         from "../components/HeroSection";
import AboutSection        from "../components/AboutSection";
import VisionMission       from "../components/VisionMission";
import ExpertiseSection    from "../components/ExpertiseSection";
import ApproachSection     from "../components/ApproachSection";
import FoundersSection     from "../components/FoundersSection";
import ClientCentricSection from "../components/ClientCentricSection";
import Footer              from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VisionMission />
      <ExpertiseSection />
      <ApproachSection />
      <FoundersSection />
      <ClientCentricSection />
      <Footer />
    </>
  );
}