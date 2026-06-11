import { Helmet } from "react-helmet";

import Hero from "../components/Hero";
import ProductsSection from "../components/ProductsSection";
import ApplicationsSection from "../components/ApplicationsSection";
import ClienteleSection from "../components/ClienteleSelection";
import CompanySection from "../components/CompanySection";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>
          Auro Pumps | Industrial Process Pumps Manufacturer in Gujarat
        </title>

        <meta
          name="description"
          content="Auro Pumps is a leading industrial pump manufacturer in Gujarat offering process pumps, molten salt pumps, molten metal pumps and precision pumping solutions for critical industrial applications."
        />

        <meta
          name="keywords"
          content="Auro Pumps, industrial pumps, process pumps, molten salt pumps, molten metal pumps, pump manufacturer Gujarat, chemical process pumps"
        />

        <meta name="author" content="Auro Pumps" />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://localhost:5173.com/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Auro Pumps | Industrial Pump Solutions"
        />

        <meta
          property="og:description"
          content="Precision industrial pumping solutions for critical applications."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://localhost:5173.com/" />
        <meta
          property="og:image"
          content="http://localhost:5173/og-image.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Auro Pumps | Industrial Pump Solutions"
        />
        <meta
          name="twitter:description"
          content="Industrial process pumps and pumping solutions."
        />
        <meta
          property="og:image"
          content="http://localhost:5173/og-image.png"
        />
      </Helmet>

      <Hero />
      <ProductsSection />
      <ApplicationsSection />
      <ClienteleSection />
      <CompanySection />
      <ContactSection />
    </>
  );
}
