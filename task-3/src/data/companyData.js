// ─── Hero Background 
import compHeroBg from "../assets/images/company-hero-bg.png";
export const companyHeroBg = compHeroBg; // ← swap null with your imported image

// ─── Hero Content 
export const companyHeroContent = {
  title: "COMPANY",
};

// ─── Founder Section 
import founderImg from "../assets/images/founder.png";
export const founderData = {
  image: founderImg, // ← swap null with your imported founderImg
  name: "Mr. JAYESH G. DESAI",
  designation: "M.E. MECH. DESAI, V.E.P. DESAI",
  title: "Founder & Managing Director",
  bio: "Founded in 1984 by our Founder and Managing Director, Mr. Jayesh G. Desai, AURO PUMPS Pvt. Ltd. has embarked on a path fuelled by innovation and dedication. With technology transfer from POMPE VERGANI SpA of Italy, our company quickly established itself as a key leader in India's industrial landscape and beyond. AURO is professionally managed by Mr. Jayesh G. Desai, a strong industry veteran, and assisted by his sons, Mr. Nishit J. Desai and Mr. Machin J. Desai. The company employs over 70 experienced professionals. Over the last 38 years, we've developed and installed over 1,00,000 pumpsets, meeting important industrial demands in India and across the world.",
};

// ─── Company Description ──────────────────────────────────────────
export const companyDescription = [
  "Quality is the foundation of our activities. Each AURO pump is meticulously inspected throughout the production process, ensuring flawless performance and minimal downtimes for end users. Our strict quality control systems have earned us a reputation for dependability and durability, resulting in lower maintenance costs for our loyal customers. Our promise is to continually innovate. We stay on the forefront of technical developments by incorporating the most recent research and development into our products. This devotion enables us to provide high-quality pumps at affordable costs, allowing industries to thrive in an ever-changing market.",
  "With a global presence in over 25 countries, AURO PUMPS Pvt. Ltd. has established itself as a reliable partner in industrial pumping solutions. From the United States to Sri Lanka, our pumps provide unrivaled reliability and performance to industries around the world. As we celebrate almost three decades of achievement, our journey demonstrates our unwavering commitment to quality. Businesses can rely on AURO pumps for outstanding performance, dependability, and longevity, ensuring success today and in the future.",
];

// ─── Infrastructure Section ───────────────────────────────────────
import infraImg1 from "../assets/images/infra-3.png";
import infraImg2 from "../assets/images/infra-2.png";
import infraImg3 from "../assets/images/infra-1.png";
export const infrastructureData = {
  eyebrow: "INFRASTRUCTURE",
  title: "Powering Your Industry With Our Technology",
  images: [
    { id: 1, image: infraImg1, alt: "Auro Pumps Factory" },       // ← swap null with infraImg1
    { id: 2, image: infraImg2, alt: "Manufacturing Unit" },        // ← swap null with infraImg2
    { id: 3, image: infraImg3, alt: "CNC Machinery" },            // ← swap null with infraImg3
  ],
};

// ─── History & Timeline Section 
import historyImg from "../assets/images/history-plant.png";
export const historyData = {
  eyebrow: "HISTORY & TIMELINE",
  title: "Powering Your Industry With Our Technology",
  image: historyImg,
  timeline: [
    {
      year: "1984",
      event: "Founded by Mr. Jayesh G. Desai at Akota, Baroda (Vadodara), Gujarat.",
    },
    {
      year: "1986",
      event: "Manufactured and supplied over 50,000 submersible pump sets of up to 75 HP capacity.",
    },
    {
      year: "1988",
      event: "Signed technical collaboration with Pompe Vergani SPA of Italy for manufacturing the entire range of chemical process pumps.",
    },
    {
      year: "1991",
      event: "Manufactured and supplied over 50,000 submersible pump"
    }
    
  ],
};