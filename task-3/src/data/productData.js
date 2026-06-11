import acc from "../assets/images/acc.png";
import app from "../assets/images/app.png";
import aml from "../assets/images/aml.png";
import agg from "../assets/images/agg.jpg";
import agc from "../assets/images/agc.jpg";
import agl from "../assets/images/agl.jpg";
import dgg from "../assets/images/dgg.jpg";
import dgc from "../assets/images/dgc.jpg";
import dgl from "../assets/images/dgl.jpg";
import mgg from "../assets/images/mgg.jpg";
import mgc from "../assets/images/mgc.jpg";
import mgl from "../assets/images/mgl.jpg";
import mmg from "../assets/images/mmg.jpg";
import mml from "../assets/images/mml.jpg";
import mmc from "../assets/images/mmc.jpg";

export const productsSection = {
  eyebrow: "PRODUCTS",
  title: "Pumps You Can Trust",
  ctaLabel: "VIEW ALL PRODUCTS",
  ctaHref: "#products",
};

export const productTabs = [
  {
    id: "pumps",
    label: "PUMPS",
    title: "Pumps You Can Trust",
    description:
      "Molten salt pumps manufacturers, Auro Pump delivers high-quality pumps for molten salt applications. Our molten salt system manufacturers ensure robust performance, precision engineering, and long-lasting operation for industrial processes requiring high-temperature handling.",
    products: [
      {
        id: "pumps-acc",
        name: "ACC",
        image: acc,
        href: "#acc",
        pdfUrl: "/pdfs/acc.pdf",
      },
      {
        id: "pumps-aml",
        name: "AML",
        image: aml,
        href: "#aml",
        pdfUrl: "/pdfs/aml.pdf",
      },
      {
        id: "pumps-app",
        name: "APP",
        image: app,
        href: "#app",
        pdfUrl: "/pdfs/app.pdf",
      },
    ],
  },

  {
    id: "agitators",
    label: "AGITATORS",
    title: "Industrial Agitators",
    description:
      "Our agitators are designed for efficient mixing and high-temperature industrial applications with reliable performance, precision engineering, and long-lasting durability.",
    products: [
      {
        id: "agitators-agg",
        name: "AGG",
        image: agg,
        href: "#agg",
        pdfUrl: null,
      },
      {
        id: "agitators-agc",
        name: "AGC",
        image: agc,
        href: "#agc",
        pdfUrl: null,
      },
      {
        id: "agitators-agl",
        name: "AGL",
        image: agl,
        href: "#agl",
        pdfUrl: null,
      },
    ],
  },

  {
    id: "dross-grabber",
    label: "DROSS GRABBER",
    title: "Dross Grabber Systems",
    description:
      "Advanced dross grabbing systems engineered for smooth and efficient metal handling in high-temperature industrial environments.",
    products: [
      {
        id: "dross-dgg",
        name: "DGG",
        image: dgg,
        href: "#dgg",
        pdfUrl: null,
      },
      {
        id: "dross-dgc",
        name: "DGC",
        image: dgc,
        href: "#dgc",
        pdfUrl: null,
      },
      {
        id: "dross-dgl",
        name: "DGL",
        image: dgl,
        href: "#dgl",
        pdfUrl: null,
      },
    ],
  },

  {
    id: "molten-salt-systems",
    label: "MOLTEN SALT SYSTEMS",
    title: "Molten Salt Systems",
    description:
      "Precision-engineered molten salt systems designed for industrial thermal applications requiring high-temperature handling.",
    products: [
      {
        id: "salt-mgg",
        name: "MGG",
        image: mgg,
        href: "#mgg",
        pdfUrl: null,
      },
      {
        id: "salt-mgc",
        name: "MGC",
        image: mgc,
        href: "#mgc",
        pdfUrl: null,
      },
      {
        id: "salt-mgl",
        name: "MGL",
        image: mgl,
        href: "#mgl",
        pdfUrl: null,
      },
    ],
  },

  {
    id: "molten-metal-systems",
    label: "MOLTEN METAL SYSTEMS",
    title: "Molten Metal Systems",
    description:
      "Reliable molten metal systems designed for safety, precision, and long-term performance.",
    products: [
      {
        id: "metal-mmg",
        name: "MMG",
        image: mmg,
        href: "#mmg",
        pdfUrl: null,
      },
      {
        id: "metal-mml",
        name: "MML",
        image: mml,
        href: "#mml",
        pdfUrl: null,
      },
      {
        id: "metal-mmc",
        name: "MMC",
        image: mmc,
        href: "#mmc",
        pdfUrl: null,
      },
    ],
  },
];