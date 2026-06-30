import logo from "../assets/images/marcost-logo.png"
export const logoData = {
  text: "marcost",
  tagline: "Growth Focused",
  // Add your logo image here:
  image: logo,
  href: "/",
};
 
export const navLinksData = [
  {
    label: "Innovative Solutions",
    hasDropdown: true,
    href: "/",
    dropdown: [
      {label: "NextGen Branding", href:"/"},
      {label: "Strategic Promotion", href:"/strategic-promotion"},
      {label: "Market Insights", href:"/market-insights"},
    ],
  },
  {
    label: "Visionary Branding",
    hasDropdown: true,
    href: "#",
    dropdown: [
      { label: "Brand Building",     href: "/brand-building" },
      { label: "Creative Marketing", href: "/creative-marketing" },
    ],
  },
  {
    label: "Discover Us",
    hasDropdown: false,
    href: "/about-us",
    dropdown: [
      
    ],
  },
  {
    label: "Market Mastery",
    hasDropdown: true,
    href: "#",
    dropdown: [
      {label: "Business Highlight", href: "/business-highlight"},
      {label: "Case Study" , href: "/case-study"},
    ],
  },
  {
    label: "Connect Corner",
    hasDropdown: false,
    href: "/connect-corner",
    dropdown: [],
  },
];