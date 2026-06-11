import ContactSection from "../components/ContactSection";
import { contactHeroBg, contactHeroContent } from "../data/contactPageData";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Contact Us | Auro Pumps</title>

        <meta
          name="description"
          content="Contact Auro Pumps for industrial pumping solutions, process pumps, molten salt pumps, molten metal pumps, and engineering support."
        />

        <meta
          name="keywords"
          content="Auro Pumps contact, industrial pumps India, process pumps Gujarat, molten salt pumps, molten metal pumps, pump manufacturer contact"
        />

        <meta name="author" content="Auro Pumps" />

        {/* Canonical URL */}
        <link rel="canonical" href="http://localhost:5173/contact" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Us | Auro Pumps" />

        <meta
          property="og:description"
          content="Get in touch with Auro Pumps for industrial and critical application pumping solutions."
        />

        <meta property="og:type" content="website" />

        <meta property="og:url" content="http://localhost:5173/contact" />

        <meta
          property="og:image"
          content="http://localhost:5173/og-image.png"
        />

        {/* Twitter */}
        <meta name="twitter:title" content="Contact Us | Auro Pumps" />

        <meta
          name="twitter:description"
          content="Contact Auro Pumps for high-quality industrial pumping solutions and engineering support."
        />

        <meta
          name="twitter:image"
          content="http://localhost:5173/og-image.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen bg-white overflow-hidden">
        {/* HERO SECTION */}
        <section
          className="
            relative
            h-[180px]
            sm:h-[180px]
            md:h-[250px]
            flex
            items-center
            justify-center
            overflow-hidden
          "
          style={{ paddingTop: "80px" }}
        >
          {/* Background Image */}
          {contactHeroBg ? (
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${contactHeroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #0a1628 0%, #1a3a5c 40%, #2d6b8f 70%, #4a9aba 100%)",
              }}
            />
          )}

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30 z-[1]" />

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              relative
              z-10
              text-white
              text-[24px]
              sm:text-[32px]
              md:text-[42px]
              font-bold
              font-geist
              text-center
              px-4
              leading-[110%]
            "
          >
            {contactHeroContent.title}
          </motion.h1>
        </section>

        {/* CONTACT SECTION */}
        <ContactSection />
      </div>
    </>
  );
};

export default ContactPage;
