import moltenMain from "../assets/images/molten-sulfer-main.png"
import moltenSide from "../assets/images/molten-sulfer-side.png"

export const applicationsSection = {
  eyebrow: "APPLICATIONS",
  title: "Pumps You Can Trust",
  ctaLabel: "LEARN MORE",
  ctaHref: "#learn-more",
};

export const applicationTabs = [
  { id: "molten-sulfer", label: "MOLTEN SULFER" },
  { id: "molten-zinc-galvalum", label: "MOLTEN ZINC & GALVALUM" },
  { id: "molten-lead-tin", label: "MOLTEN LEAD & TIN" },
  { id: "molten-salt", label: "MOLTEN SALT" },
  { id: "sulfuric-acid", label: "SULFURIC ACID" },
];

export const applicationProducts = {
  "molten-sulfer": {
    heading: "Product of MOLTEN SULFER",
    image: moltenMain,
    sideImage: moltenSide,
    items: [
      {
        id: 1,
        tag: "ACC-J",
        description:
          "Aumund Conveying & Construction Pvt. Ltd. (commonly abbreviated as ACC in industrial context) is known for manufacturing advanced material handling systems. In molten metal handling systems, ACC-type molten pumps are engineered for durability, temperature resistance, and corrosion protection.",
      },
      {
        id: 2,
        tag: "ACCV-J",
        description:
          "ACCV-J is designed for precision inspection and monitoring in industrial environments. It is widely used for quality control, component verification, and internal visual inspection in manufacturing and engineering processes. The system helps detect defects in hard-to-reach areas, improving accuracy, efficiency, and overall product reliability.",
      },
    ],
  },
  "molten-zinc-galvalum": {
    heading: "Product of MOLTEN ZINC & GALVALUM",
    image: moltenMain,
    sideImage: moltenSide,
    items: [
      {
        id: 1,
        tag: "MZG-J",
        description:
        "MZG-J is specially engineered for handling molten zinc and galvalume applications in high-temperature industrial environments. Designed with superior corrosion resistance and thermal stability, the system ensures smooth metal circulation, reliable performance, and long operational life in continuous galvanizing processes."
      },
      {
        id : 2,
        tag: "MZGV-J",
        description:
        "MZGV-J is a high-efficiency molten zinc and galvalume handling system developed for precision flow control and safe operation. Built to withstand harsh industrial conditions, it enhances process efficiency, minimizes maintenance requirements, and ensures consistent performance in coating and galvanizing applications."
      },
    ],
  },
  "molten-lead-tin": {
    heading: "Product of MOLTEN LEAD & TIN",
    image: moltenMain,
    sideImage: moltenSide,
    items: [
      {
        id: 1,
        tag: "MLT-J",
        description:
        "MLT-J is designed for efficient handling and circulation of molten lead and tin in demanding industrial applications. Engineered with high-temperature resistance and durable construction, the system ensures safe operation, consistent metal flow, and enhanced process reliability."
      },
      {
        id: 2,
        tag: "MLTV-J",
        description:
        "MLTV-J delivers precision performance for molten lead and tin processing applications. Its advanced design supports smooth metal transfer, reduced material loss, and long-lasting durability, making it suitable for continuous industrial operations requiring stable thermal performance."
      }
    ],
  },
  "molten-salt": {
    heading: "Product of MOLTEN SALT",
    image: moltenMain,
    sideImage: moltenSide,
    items: [
      {
        id: 1,
        tag: "MSP-J",
        description:
        "MSP-J is a high-performance molten salt handling system engineered for efficient heat transfer and high-temperature industrial applications. Built for durability and corrosion resistance, it ensures reliable circulation, thermal stability, and safe long-term operation."
      },
      {
        id: 2,
        tag: "MSPV-J",
        description:
        "MSPV-J is designed for precision molten salt processing and circulation in demanding thermal systems. With robust engineering and superior temperature resistance, the system enhances operational efficiency, reduces downtime, and supports continuous industrial performance."
      }
    ],
  },
  "sulfuric-acid": {
    heading: "Product of SULFURIC ACID",
    image: moltenMain,
    sideImage: moltenSide,
    items: [
      {
        id: 1,
        tag: "SAC-J",
        description:
        "SAC-J is engineered for safe and efficient sulfuric acid handling in corrosive industrial environments. Designed with high chemical resistance and durable materials, the system ensures reliable fluid transfer, operational safety, and long service life."
      },
      {
        id: 2,
        tag: "SACV-J",
        description:
        "SACV-J provides advanced sulfuric acid circulation and transfer capabilities for industrial processing applications. Its precision-engineered design offers superior corrosion protection, stable performance, and reduced maintenance requirements in harsh operating conditions."
      }
    ],
  },
};
