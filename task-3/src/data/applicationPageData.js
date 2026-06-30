// ─── Hero Background 
import applicationHeroBg from "../assets/images/application-hero-bg.png";
import accImg from "../assets/images/acc.png"
import moltenSulfer from "../assets/images/agc.jpg"
import aglImg from "../assets/images/agl.jpg"
import amlImg from "../assets/images/dgl.jpg"
import appImg from "../assets/images/dgc.jpg"
import aggImg from "../assets/images/dgg.jpg"

//replace: export const appHeroBg = applicationHeroBg;
export const appHeroBg = applicationHeroBg; 

// ─── Hero & Sidebar Content 
export const appHeroContent = {
  title: "APPLICATION",
};

export const appSidebarContent = {
  heading: "Select Category",
};

// ─── Application Categories with Associated Products 
export const applicationTabs = [
  {
    id: "molten-sulfer",
    label: "MOLTEN SULFER",
    sectionTitle: "Associated Products",
    description:
      "Aurocom Conveying & Construction Pvt. Ltd. (commonly abbreviated as ACC in industrial context) is known for manufacturing advanced material handling systems. In molten metal handling systems, ACC-type molten pumps are engineered for durability, temperature resistance, and corrosion protection.",
    products: [
      {
        id: 1,
        name: "ACC-J",
        image: accImg, // ← replace with imported image
        pdfUrl: null, // ← replace with "/pdfs/acc-j.pdf" when ready
        description:
          "ACC series pumps are centrifugal, single stage and suction pumps with over 28 different model sizes which provide flexibility on a wide range of duty points to satisfy varied industry requirements. Due to the versatile design of these pumps they are used across a wide spectrum of industries from water treatment to fertilizers & chemicals to nuclear applications. The back pull-out design ensures reduced maintenance downtime and costs while a sturdy bearing and shaft assembly ensures longer operating life of the pump. These pumps are in accordance with ISO2858, ISO 5199 and DIN 24256 standards.",
        specs: [
          { label: "CAPACITY", value: "up to 1300 m³/hour (higher flow rate provided on request)" },
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
      },
      {
        id: 2,
        name: "ACCV-J",
        image: moltenSulfer, // ← replace with imported image
        pdfUrl: null,
        description:
          "ACCV-J series pumps are centrifugal, single stage vertical submerged extended shaft pumps derived from our ACCV pumps. These are specially designed for handling crystallizing fluids. The fully jacketed pump assembly encompassing the volute casing, stuffing box, shaft assembly and discharge pipe ensures the liquid does not crystallize inside the pump assembly. A semi-open or open type impeller design prevents choking of the impeller vanes from the crystallizing liquid. High temperature gland packing, single or double acting mechanical seals provide reliable shaft sealing against hazardous fumes and vapor.",
        specs: [
          { label: "CAPACITY", value: "upto 1900 m³/hour" },
          { label: "HEAD", value: "upto 160 m" },
          { label: "SIZE", value: "25 to 250 mm" },
          { label: "TEMPERATURE", value: "25°C to +400°C" },
          { label: "SUBMERGENCE LENGTH", value: "upto 6 m. Longer submergence lengths provided on request" },
          { label: "OPERATING FREQUENCY", value: "50Hz and 60Hz" },
          {
            label: "MATERIAL OF CONSTRUCTION",
            value:
              "WC8, WC6, WC9, CF8/CF3 (SS304/304L), CF8M/CF3M (SS316/316L), SS310, SS347/347H, Alloy-20, CD4MCu, CA6NM, Super Duplex Steel, Inconel, Monel, Hastelloy C276",
          },
        ],
      },
    ],
  },

  {
    id: "molten-zinc-galvalum",
    label: "MOLTEN ZINC & GALVALUM",
    sectionTitle: "Associated Products",
    description:
      "Our molten zinc and galvalum handling systems are engineered for continuous galvanizing lines and hot-dip coating operations. Precision-built for high-temperature zinc bath environments.",
    products: [
      {
        id: 1,
        name: "AZN-G",
        image: aglImg, // ← replace with imported image
        pdfUrl: null,
        description:
          "AZN-G series pumps are designed specifically for molten zinc circulation in continuous galvanizing lines. The robust construction ensures consistent flow and reliable operation in zinc bath temperatures.",
        specs: [
          { label: "CAPACITY", value: "up to 800 m³/hour" },
          { label: "HEAD", value: "up to 80 m" },
          { label: "SIZE", value: "50 to 200 mm" },
          { label: "TEMPERATURE", value: "up to +500°C" },
          { label: "OPERATING FREQUENCY", value: "50 Hz and 60 Hz" },
          {
            label: "MATERIAL OF CONSTRUCTION",
            value: "SS316, Alloy-20, Hastelloy C276, Super Duplex Steel",
          },
        ],
      },
    ],
  },

  {
    id: "molten-lead-tin",
    label: "MOLTEN LEAD & TIN",
    sectionTitle: "Associated Products",
    description:
      "Specially engineered pumps and systems for handling molten lead and tin in battery manufacturing, bearing production, and soldering applications.",
    products: [
      {
        id: 1,
        name: "ALT-V",
        image: amlImg, // ← replace with imported image
        pdfUrl: null,
        description:
          "ALT-V series vertical submerged pumps are purpose-built for molten lead and tin handling. The design eliminates the risk of leakage and ensures long service life even in aggressive low-melting-point metal environments.",
        specs: [
          { label: "CAPACITY", value: "up to 600 m³/hour" },
          { label: "HEAD", value: "up to 60 m" },
          { label: "SIZE", value: "40 to 150 mm" },
          { label: "TEMPERATURE", value: "up to +400°C" },
          { label: "SUBMERGENCE LENGTH", value: "upto 4 m" },
          { label: "OPERATING FREQUENCY", value: "50 Hz and 60 Hz" },
          {
            label: "MATERIAL OF CONSTRUCTION",
            value: "Cast Iron, SS304, SS316, Alloy-20, Inconel",
          },
        ],
      },
    ],
  },

  {
    id: "molten-salt",
    label: "MOLTEN SALT",
    sectionTitle: "Associated Products",
    description:
      "High-performance molten salt circulation pumps designed for thermal energy storage systems, solar power plants, and industrial heat treatment processes.",
    products: [
      {
        id: 1,
        name: "AMS-T",
        image: appImg, // ← replace with imported image
        pdfUrl: null,
        description:
          "AMS-T series pumps are engineered for molten salt service in concentrated solar power plants and industrial thermal storage. Designed to handle nitrate/nitrite salt mixtures at high temperatures with exceptional reliability.",
        specs: [
          { label: "CAPACITY", value: "up to 1000 m³/hour" },
          { label: "HEAD", value: "up to 120 m" },
          { label: "SIZE", value: "50 to 300 mm" },
          { label: "TEMPERATURE", value: "up to +600°C" },
          { label: "OPERATING FREQUENCY", value: "50 Hz and 60 Hz" },
          {
            label: "MATERIAL OF CONSTRUCTION",
            value: "SS310, Inconel 600, Alloy-20, Super Duplex Steel, Hastelloy C276",
          },
        ],
      },
    ],
  },

  {
    id: "sulfuric-acid",
    label: "SULFURIC ACID",
    sectionTitle: "Associated Products",
    description:
      "Corrosion-resistant pump solutions for sulfuric acid handling across fertilizer plants, chemical processing, metal finishing, and battery industries.",
    products: [
      {
        id: 1,
        name: "ASA-C",
        image: aggImg, // ← replace with imported image
        pdfUrl: null,
        description:
          "ASA-C series centrifugal pumps are constructed from high-alloy materials offering exceptional resistance to sulfuric acid at various concentrations and temperatures. Suitable for dilute and concentrated acid transfer in continuous duty service.",
        specs: [
          { label: "CAPACITY", value: "up to 900 m³/hour" },
          { label: "HEAD", value: "up to 100 m" },
          { label: "SIZE", value: "25 to 200 mm" },
          { label: "TEMPERATURE", value: "up to +120°C" },
          { label: "CONCENTRATION", value: "5% to 98% H₂SO₄" },
          { label: "OPERATING FREQUENCY", value: "50 Hz and 60 Hz" },
          {
            label: "MATERIAL OF CONSTRUCTION",
            value: "Alloy-20, Hastelloy C276, PVDF, FRP-lined, SS316L",
          },
        ],
      },
    ],
  },
];