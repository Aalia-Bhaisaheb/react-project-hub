import locationIcon from "../assets/images/location-icon.png";
import mailIcon from "../assets/images/mail-icon.png";
import mapImage from "../assets/images/mapImage.png";

// ─── Hero Background 
import contHeroBg from "../assets/images/contact-hero-bg.png";
export const contactHeroBg = contHeroBg; // ← swap null with your imported image

// ─── Hero Content 
export const contactHeroContent = {
  title: "CONTACT US",
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
  mapImage: mapImage,
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