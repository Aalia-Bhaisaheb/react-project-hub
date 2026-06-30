import productImg       from "../assets/images/product-img.png";
import certImg          from "../assets/images/certi-img.png";
import bagPackImg       from "../assets/images/pack-bag.png";
import drumPackImg      from "../assets/images/drum-pack.png";
//import specSheetFile from "../assets/images/spec-sheet.pdf";
//import isoCertFile from "../assets/images/iso-cert.pdf";

export const productDetailData = {
  image: productImg,           
  aboutHeading: "About Cadmium Oxide",
  aboutParagraphs: [
    "Cadmium Oxide (CdO) is a critical inorganic compound widely used as a heat stabiliser in PVC processing and in specialty applications including ceramics, glass, and electroplating and in nickel-cadmium battery manufacturing. It appears as a brown to dark-brown powder with exceptional thermal stability and stabilising properties. It features high electric conductivity and optical transparency.",
    "Utilising the French Process, Techno Chemicals produces high-purity Cadmium Oxide with consistent particle size distribution and minimal impurities. Our controlled production environment assures batch-to-batch uniformity, making our product ideal for demanding applications where quality cannot be compromised.",
  ],
  specsHeading: "Technical Specifications",
  specs: [
    { property: "CAS Number",          value: "1306-19-0" },
    { property: "Molecular Formula",   value: "CdO" },
    { property: "Molecular Weight",    value: "128.41 g/mol" },
    { property: "Assay (Purity)",      value: "Typical 98% to 99.99%" },
    { property: "Appearance",          value: "Brown or red powder" },
    { property: "Density/Specific Gravity", value: "8.15–8.2 g/mL at 25 C" },
    { property: "Melting Point",       value: "900–1000 C" },
    { property: "Solubility",          value: "Insoluble in water; soluble in acids and ammonium salts" },
    { property: "Crystal Structure",   value: "Cubic rocksalt lattice" },
  ],
  specsNote:
    "Note: You can highlight/share the technical specification sheet and ISO certification files that I have given you.",
  downloadLabel: "Download Full Specification",
  downloadHref: "#",    
};

export const qualityData = {
  heading: "Quality Standards & Certifications",
  intro:
    "Techno Chemicals maintains stringent quality control throughout the manufacturing process. Every batch of our Cadmium Oxide undergoes rigorous testing to ensure it meets or exceeds industry standards.",
  standards: [
    {
      id: 1,
      title: "Purity:",
      text: "Minimum 99.9% CdO content, verified through quantitative analysis.",
    },
    {
      id: 2,
      title: "Heavy Metal Control:",
      text: "Strict limits on lead, zinc, and other metallic impurities.",
    },
    {
      id: 3,
      title: "Particle Size Analysis:",
      text: "Consistent particle distribution for optimal performance.",
    },
    {
      id: 4,
      title: "Moisture Content:",
      text: "We maintain minimum moisture levels ensuring product stability during storage.",
    },
  ],
  certParagraph:
    "Our manufacturing facility in Halol, Gujarat maintains dedicated quality assurance protocols. Each batch comes with a Certificate of Analysis (CoA) detailing the complete chemical and physical properties. We maintain comprehensive documentation and traceability for all raw materials and finished products, ensuring complete transparency for our customers.",
  certImage: certImg,       
  certDownloadLabel: "Download ISO Certificate",
  certDownloadHref: "#", 
};

export const packagingData = {
  heading: "High-Purity Packaging",
  cards: [
    {
      id: 1,
      image: bagPackImg,       
      title: "Bag Packaging",
      caption: "25 kg PP bags with inner liner",
    },
    {
      id: 2,
      image: drumPackImg,       
      title: "Drum Packaging",
      caption: "25 kg HDPE drums with inner liner",
    },
  ],
  optionsCard: {
    heading: "Packaging Options",
    options: [
      "25 kg PP Bags with inner liner",
      "25 kg HDPE Drums with inner liner",
      "UN certified Export-grade packaging",
    ],
  },
};


