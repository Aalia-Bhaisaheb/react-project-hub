import logoImg from "../assets/images/logo-footer.png";
import isoLogo from "../assets/images/iso-mark.png";
import locationIcon from "../assets/images/address-icon.png";
import phoneIcon from "../assets/images/phone-icon.png";
import emailIcon from "../assets/images/email-icon.png";

export const footerData = {
  logo: {
    icon: logoImg,
    name: "TECHNO\nCHEMICALS",
  },

  tagline:
    "Leading manufacturer of high-purity Cadmium Oxide, serving global industries with quality chemical solutions since 1990.",

  isoLogo,

  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Applications", href: "#applications" },
    { label: "Contact Us", href: "#contact" },
  ],

  products: [
    { label: "Cadmium Oxide (CdO)", href: "#products" },
  ],

  contactItems: [
    {
      icon: locationIcon,
      text: "Ground Floor, Ark, 1, Shree Krishna Industrial Estate, Opp. BIDC, Gorwa, Vadodara, Gujarat, 390016",
    },
    {
      icon: phoneIcon,
      text: "+91 9819 2847 28",
    },
    {
      icon: emailIcon,
      text: "ketan.panchamiya@rubamin.com",
    },
  ],
  linksTitle: "Quick Links",

  productTitle: "Our Products",

  contactTitle: "Contact Us",

  copyright:
    "Copyright © 2026, TechnoChemicals. All Rights Reserved.",

  legalLinks: ["Sitemap", "Privacy Policy", "Terms of Service"],

  designCredit: "Website Design by D&C",
};