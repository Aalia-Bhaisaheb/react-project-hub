import manufacturingImg  from "../assets/images/manufacturing-unit.png";
import labImg            from "../assets/images/quality-testing.png";
import warehouseImg      from "../assets/images/warehouse.png";
import manufacturingIcon from "../assets/images/manufacturing-icon.png";
import labIcon           from "../assets/images/testing-icon.png";
import warehouseIcon     from "../assets/images/warehouse-icon.png";

export const aboutStatsData = [
  { id: 1, value: "35",    label: "Years of Excellence" },
  { id: 2, value: "10+",   label: "Countries Served" },
  { id: 3, value: "99.5%", label: "Purity Standards" },
];

export const infrastructureData = {
  sectionLabel: "INFRASTRUCTURE & FACILITIES",
  heading: "State-of-the-Art Manufacturing",
  subheading:
    "Our facility in Gujarat features excellent infrastructure designed for efficient and quality-focused chemical manufacturing.",
  facilities: [
    {
      id: 1,
      icon: manufacturingIcon,            
      image: manufacturingImg,          
      imagePosition: "right",
      title: "Manufacturing Unit",
      description:
        "Our manufacturing unit is equipped with robust infrastructure and established techniques maintaining the highest quality standards.",
      bullets: [
        "Advanced chemical processing equipment",
        "Standardized manufacturing protocols",
        "Strict safety standards",
        "Continuous quality monitoring",
      ],
    },
    {
      id: 2,
      icon: labIcon,            
      image: labImg,           
      imagePosition: "left",
      title: "Quality Testing Laboratory",
      description:
        "Our quality testing laboratory is equipped with latest equipment & techniques that help us gauge the authenticity of materials and ensure compliance with international standards.",
      bullets: [
        "Modern analytical instruments",
        "Purity and impurity analysis equipment",
        "Batch testing protocols",
        "Certificate generation (COA)",
      ],
    },
    {
      id: 3,
      icon: warehouseIcon,            
      image: warehouseImg,           
      imagePosition: "right",
      title: "Warehousing & Packaging",
      description:
        "Managed by experienced professionals, our warehousing unit ensures systematic storage and safe transit of all products using robust and sturdy packaging materials.",
      bullets: [
        "UN certified packaging",
        "Optimal storage facilities",
        "Organised inventory system",
        "PP Bags & HDPE Drums packaging",
      ],
    },
  ],
};
