import pvcImg          from "../assets/images/pvc-img.png";
import ceramicsImg     from "../assets/images/ceramics-img.png";
import electroImg      from "../assets/images/electroplating-img.png";
import catalystsImg    from "../assets/images/catalyst-img.png";
import semiconductImg  from "../assets/images/semiconductor-img.png"
import batteriesImg    from "../assets/images/batteries-img.png";

export const applicationsData = {
  sectionLabel: "APPLICATIONS",
  heading: "Industry Applications",
  subheading:
    "Our high-purity Cadmium Oxide serves diverse industries with applications spanning energy storage, manufacturing, and advanced materials.",
  cards: [
    {
      id: 1,
      image: pvcImg,       
      title: "PVC & Plastics",
      description:
        "Heat stabilisers and polymer processing additives used to enhance thermal stability, processability, and overall performance of polymer materials.",
    },
    {
      id: 2,
      image: ceramicsImg,       
      title: "Ceramics & Glass",
      description:
        "Glazes, pigments, and specialty ceramic formulations developed to enhance colour, surface finish, performance, and ceramic applications.",
    },
    {
      id: 3,
      image: electroImg,       
      title: "Electroplating",
      description:
        "Plating baths and corrosion-resistant coatings designed to improve surface protection, durability, and resistance to environmental and chemical exposure.",
    },
    {
      id: 4,
      image: catalystsImg,       
      title: "Catalysts",
      description:
        "Industrial catalytic processes and chemical reactions to improve efficiency, selectivity, and performance in large-scale manufacturing applications.",
    },
    {
      id: 5,
      image: semiconductImg,       
      title: "Semiconductors",
      description:
        "Conductive materials and electronic applications developed to support electrical performance, signal integrity, and functionality in electronic systems.",
    },
    {
      id: 6,
      image: batteriesImg,       
      title: "Batteries",
      description:
        "Ni-Cd batteries, electrodes, and energy storage cells engineered for high-efficiency, long life, and reliable performance in energy storage applications.",
    },
  ],
};


