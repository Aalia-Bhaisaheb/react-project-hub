import heroBg from "../assets/images/herobg.png";
import logo from "../assets/images/logo.png"
import factoryImg from "../assets/images/factory-img.png";
import productImg from "../assets/images/product-img.png";
// icon images
import yearsIcon from "../assets/images/years-icon.png";
import countriesIcon from "../assets/images/countries-icon.png";
import purityIcon from "../assets/images/purity-icon.png";

export const navData = {
  logo: {
    icon: logo,
    name: "TECHNO\nCHEMICALS",
  },
  links: [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Applications", path: "/applications" },
    { label: "Contact Us", path: "/contact" },
  ],
};

export const pageHeader = {
  backgroundImage: heroBg
}

export const heroData = {
  backgroundImage: heroBg,  
  badge: "Trusted Chemical Manufacturer Since 1990",
  headingNormal: "Reliable Cadmium Oxide Manufacturer — ",
  headingHighlight: "Quality Chemical Solutions",
  headingEnd: " from India.",
  description:
    "Serving customers in India and across the globe with high-purity Cadmium Oxide for plastics, ceramics, electroplating, pigments and other diverse industrial applications.",
  ctaLabel: "Enquiry Now",
  ctaHref: "#contact",
  stats: [
    {
      id: 1,
      icon: yearsIcon,            
      value: "35",
      label: "Years of Excellence",
    },
    {
      id: 2,
      icon: countriesIcon,            
      value: "10+",
      label: "Countries Served",
    },
    {
      id: 3,
      icon: purityIcon,            
      value: "99.5%",
      label: "Purity Standards",
    },
  ],
};

export const aboutData = {
  image: factoryImg,             
  location: "Halol, Gujarat",
  sectionLabel: "ABOUT TECHNO CHEMICALS",
  heading: "Your Trusted Partner for high quality Cadmium Oxide",
  description:
    "Headquartered in Gujarat, India, Techno Chemicals is a premier manufacturer of high-purity Cadmium Oxide. As a proud associate of the globally acclaimed Rubamin Group, we combine world-class infrastructure with deep industry expertise. Our unwavering dedication to superior quality, strict punctuality, and client satisfaction has positioned us as the preferred partner for industries across the globe.",
  ctaLabel: "Know More",
  ctaHref: "#about",
};

export const productsData = {
  sectionLabel: "OUR PRODUCTS",
  heading: "High-Purity Cadmium Oxide",
  description:
    "Industrial-grade CdO manufactured under strict quality controls, suitable for diverse applications across multiple industries.",
  ctaLabel: "Know More",
  ctaHref: "#products",
  featuredProduct: {
    image: productImg,          
    name: "Cadmium Oxide Powder",
    tagline: "High-purity reddish brown crystalline powder",
  },
};
