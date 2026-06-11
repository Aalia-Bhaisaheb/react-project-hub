import AboutSection from "../components/AboutSection";
import InfrastructureSection from "../components/InfrastructureSection";
import PageHeader from "../components/PageHeader";
import StatsBar from "../components/StatsBar";

export default function AboutUsPage(){
  return(
    <>
    <div className="font-sans min-h-screen">
      <PageHeader title="About Us" breadcrumb="Home / About Us"/>
      <AboutSection/>
      <StatsBar/>
      <InfrastructureSection/>
    </div>
    </>
  )
}