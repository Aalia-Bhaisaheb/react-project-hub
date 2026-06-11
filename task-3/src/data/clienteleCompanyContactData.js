import client1 from "../assets/images/client-1.png";
import client2 from "../assets/images/client-2.png";
import client3 from "../assets/images/client-3.png";
import client4 from "../assets/images/client-4.png";
import client5 from "../assets/images/client-5.png";
import companyImg from "../assets/images/company-img.png"
import locationIcon from "../assets/images/location-icon.png";
import mailIcon from "../assets/images/mail-icon.png";
import mapImage from "../assets/images/mapImage.png";

export const clienteleSection = {
  eyebrow: "CLIENTELE",
  title: "Partnering for Performance, Driven by Experience",
};

export const clients = [
  {
    id: 1,
    name: "INTAS",
    image: client1,
  },
  {
    id: 2,
    name: "JSW",
    image: client2,
  },
  {
    id: 3,
    name: "Raymond",
    image: client3,
  },
  {
    id: 4,
    name: "Oil India Limited",
    image: client4,
  },
  {
    id: 5,
    name: "Aarti Industries Limited",
    image: client5,
  },
  {
    id: 6,
    name: "Aarti Industries Limited",
    image: client5,
  },
  {
    id: 7,
    name: "Aarti Industries Limited",
    image: client5,
  },
];

//company data

export const companySection = {
  eyebrow: "COMPANY",
  title: "Decades of Expertise in Precision Pumping Solutions",
  description:
    "A specialist in critical application pumping, AURO PUMPS has comprehensive knowledge in many specific industrial pumping areas. Established in 1984 in technology transfer from POMPE VERGANI SpA of Italy, the foundation of our extensive product range is based on decades of experience in pump manufacturing, expansive materials know-how and our desire to broaden the horizons of pumping possibilities.",
  stat: "41+",
  statLabel: "Years of Experience of working in Industry",
  ctaLabel: "LEARN MORE",
  ctaHref: "#company",
  image: companyImg,
};

export const contactData = [
  {
    id: 1,
    icon: locationIcon,
    text: "Ahmedabad, Gujarat",
  },
  {
    id: 2,
    icon: mailIcon,
    text: "info@example.com",
  },
];

export const contactSection = {
  eyebrow: "GET IN TOUCH",
  title: "Let's discuss about your project",
  // Fallback static map image: mapImage: "/images/contact/map.jpg"
  mapEmbedUrl:
  "https://www.google.com/maps?q=Plot%20No.%20104%2F5%20%26%206%2C%20GIDC%20Palaj%2C%20Bharuch%2C%20Gujarat%20392220&output=embed",
  officeTitle: "Registered Office & Works",
  address: "Plot No. 104/5 & 6\nG.I.D.C. Palaj, Bharuch District, Gujarat – 392220, INDIA",
  emailTitle: "Email ID",
  emails: ["sales@auroupmps.com", "purchase@auroupmps.com"],
  formFields: [
    { id: "firstName", label: "First Name", placeholder: "Enter First Name", type: "text" },
    { id: "companyName", label: "Company Name", placeholder: "Enter Company Name", type: "text" },
    { id: "emailId", label: "Email ID", placeholder: "Enter Email ID", type: "email" },
    { id: "contactNumber", label: "Contact Number", placeholder: "Enter Contact Number", type: "tel" },
    { id: "message", label: "Message", placeholder: "Type…", type: "textarea" },
  ],
  submitLabel: "SUBMIT",
};
