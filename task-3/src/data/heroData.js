import logo from "../assets/images/logo (4).png";
import heroBg from "../assets/images/hero-bg.png";

export const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Products", href: "/products" },
  { label: "Application", href: "/application" },
  { label: "Company", href: "/company" },
  { label: "Contact us", href: "/contact" },
];

export const logoData = {
  name : "logo",
  image : logo
}

export const heroData = {
  title: "Premier Pumping Solutions,",
  titleHighlight: "Powered by Decades of Expertise",
  description:
    "Since 1984, our commitment to innovation and quality has positioned us as a trusted leader in the pump manufacturing industry, backed by extensive experience and advanced materials know-how.",
  ctaLabel: "DISCOVER SOLUTIONS",
  ctaHref: "#products",
  backgroundImage: heroBg,
};