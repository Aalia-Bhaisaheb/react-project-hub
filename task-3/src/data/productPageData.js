import productHeroBg from "../assets/images/product-hero-bg.png";
export const heroBg = productHeroBg; 

export const heroContent = {
  title: "PRODUCTS",
  downloadLabel: "DOWNLOAD PDF",
};

export const sidebarContent = {
  heading: "Select Category",
};

// ─── Category Specs ────────────────────────────────────────────────
export const categorySpecs = {
  pumps: [
    {
      label: "CAPACITY",
      value: "up to 1000 m³/hour (higher flow rate provided on request)",
    },
    { label: "HEAD", value: "up to 160 m" },
    { label: "SIZE", value: "25 to 250 mm" },
    { label: "TEMPERATURE", value: "-40°C to +400°C" },
    { label: "VISCOSITY", value: "up to 500 cP" },
    { label: "OPERATING FREQUENCY", value: "50 Hz and 60 Hz" },
    {
      label: "MATERIAL OF CONSTRUCTION",
      value:
        "Cast Iron, Cast Steel, WC6, WC9, CF8/CF3 (SS304/304L), CF8M/CF3M (SS316/316L), SS310, Bronze, Alloy-20, CD4MCu, CA6NM, Super Duplex Steel, Inconel, Monel, Nickel CZ-100, Hastelloy C276",
    },
  ],

  agitators: [
    { label: "CAPACITY", value: "Custom as per requirement" },
    { label: "POWER", value: "0.5 kW to 500 kW" },
    { label: "SIZE", value: "50 to 500 mm shaft diameter" },
    { label: "TEMPERATURE", value: "up to +400°C" },
    { label: "SPEED", value: "10 to 1500 RPM" },
    { label: "OPERATING FREQUENCY", value: "50 Hz and 60 Hz" },
    {
      label: "MATERIAL OF CONSTRUCTION",
      value: "Cast Iron, SS304, SS316, Alloy-20, Hastelloy, Inconel, Duplex Steel",
    },
  ],

  "dross-grabber": [
    { label: "CAPACITY", value: "up to 500 kg per cycle" },
    { label: "REACH", value: "up to 3 m" },
    { label: "SIZE", value: "Custom fabrication available" },
    { label: "TEMPERATURE", value: "up to +900°C" },
    { label: "OPERATING FREQUENCY", value: "50 Hz and 60 Hz" },
    {
      label: "MATERIAL OF CONSTRUCTION",
      value: "Heat-resistant Steel, SS310, Inconel, Refractory-coated materials",
    },
  ],

  "molten-salt-systems": [
    { label: "CAPACITY", value: "up to 800 m³/hour" },
    { label: "HEAD", value: "up to 120 m" },
    { label: "SIZE", value: "50 to 300 mm" },
    { label: "TEMPERATURE", value: "up to +600°C" },
    { label: "OPERATING FREQUENCY", value: "50 Hz and 60 Hz" },
    {
      label: "MATERIAL OF CONSTRUCTION",
      value: "SS310, Inconel 600, Alloy-20, Super Duplex Steel, Hastelloy C276",
    },
  ],

  "molten-metal-systems": [
    { label: "CAPACITY", value: "up to 600 m³/hour" },
    { label: "HEAD", value: "up to 80 m" },
    { label: "SIZE", value: "40 to 250 mm" },
    { label: "TEMPERATURE", value: "up to +900°C" },
    { label: "OPERATING FREQUENCY", value: "50 Hz and 60 Hz" },
    {
      label: "MATERIAL OF CONSTRUCTION",
      value: "Graphite, Silicon Carbide, Cast Iron, Heat-resistant Steel, Refractory materials",
    },
  ],
};