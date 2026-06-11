import ContactSection from "../components/ContactSection";
import MapSection from "../components/MapSection";
import PageHeader from "../components/PageHeader";

export default function ContactUsPage() {
  return (
    <>
      <div className="min-h-screen font-sans">
        <PageHeader title="Contact Us" breadcrumb="Home / Contact Us" />
        <ContactSection showHeader={false}/>
        <MapSection />
      </div>
    </>
  );
}
