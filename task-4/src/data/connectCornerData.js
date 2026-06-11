import heroBg from "../assets/images/connect-bg.png"
import contactImage from "../assets/images/contact-us-img.png"
import locationIcon from "../assets/images/location-icon.png";
import phoneIcon from "../assets/images/call-icon.png";
import emailIcon from "../assets/images/mail-icon.png";

export const brandHeroData = {
  title: "Connect Corner",
  breadcrumb: ["Home", "Connect Corner"],
  backgroundImage: heroBg ,
};

export const connectData = {
  title: "Get in Touch",
  paragraphs: [
    "With Marcost, your brand's journey to success begins. Are you ready to elevate your marketing efforts, increase brand awareness, and optimize your marketing costs? Look no further, we specialize in personalized product marketing solutions tailored to your unique business needs. Get Ready to boost your marketing, amplify your brand, and optimize costs. Marcost offers tailored marketing solutions to suit your unique needs.Let's collaborate on crafting a customized marketing plan that drives results. Reach out today and let’s discuss over a cup of coffee! "
  ],
  highlightWord: "",
  badges: [
    
  ],
  image: contactImage,
};

export const connectCornerData = {
  // Contact Section
  contact: {
    findUsTitle: "Find us here:",
    location: {
      label: "Location",
      value: "Marcost-Growth Focused\nGyananand Greens, Vadodara, Gujarat. (India)",
      icon: locationIcon, 
    },
    phone: {
      label: "Contact",
      value: "+91 95121 72710",
      icon: phoneIcon,
    },
    email: {
      label: "Email",
      value: "connect@marcostads.com",
      icon: emailIcon,
    },
    // Google Maps embed src for Vadodara, Gujarat
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118168.10551513645!2d73.10429!3d22.30730!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000",
  },

  // Contact Form
  form: {
    title: "Your success story starts here with Marcost.",
    fields: [
      { name: "name",    placeholder: "Name",       type: "text",  fullWidth: true  },
      { name: "phone",   placeholder: "Phone No.",  type: "tel",   fullWidth: false },
      { name: "email",   placeholder: "Email",      type: "email", fullWidth: false },
      { name: "message", placeholder: "Message",    type: "textarea", fullWidth: true },
      { name: "captcha", placeholder: "Enter Captcha", type: "text", fullWidth: false, hasCaptcha: true },
    ],
    submitLabel: "Submit",
  },
};