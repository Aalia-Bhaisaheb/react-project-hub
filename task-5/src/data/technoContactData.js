import phoneIcon from "../assets/images/phone-icon.png"
import emailIcon from "../assets/images/email-icon.png"
import addressIcon from "../assets/images/address-icon.png"
import whatsappIcon from "../assets/images/whatsapp-icon.png"

export const contactData = {
  sectionLabel: "GET IN TOUCH",
  heading: "Request a Quote",
  subheading:
    "Interested in our products? Fill out the enquiry form below and our team will get back to you at the earliest.",

  info: {
    heading: "Contact Information",

    address:
    "Ground Floor, Ark, 1, Shree Krishna Industrial Estate, Opp. BIDC, Gorwa, Vadodara, Gujarat, 390016",
    addressTitle: "Address\n",
    addressIcon: addressIcon,

    phone: "+91 9819 2847 28",
    phoneTitle:"Phone\n",
    phoneIcon: phoneIcon,

    email: "ketan.panchamiya@rubamin.com",
    emailTitle:"Email",
    emailIcon: emailIcon,

    whatsappHref: "https://wa.me/919819284728",
    whatsappTitle : "Chat on WhatsApp",
    whatsappIcon: whatsappIcon,
  },

  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.686!2d73.1712!3d22.3217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5f0a5c5a5a5%3A0x1234567890abcdef!2sShree%20Krishna%20Industrial%20Estate%2C%20Gorwa%2C%20Vadodara%2C%20Gujarat%20390016!5e0!3m2!1sen!2sin!4v1700000000000",

  form: {
    fields: [
      {
        id: "name",
        label: "Your Name*",
        placeholder: "John Doe",
        type: "text",
        half: true,
      },
      {
        id: "company",
        label: "Company Name",
        placeholder: "Your Company",
        type: "text",
        half: true,
      },
      {
        id: "email",
        label: "Email Address*",
        placeholder: "email@company.com",
        type: "email",
        half: true,
      },
      {
        id: "phone",
        label: "Phone Number*",
        placeholder: "+91 xxxxx xxxxx",
        type: "tel",
        half: true,
      },
      {
        id: "country",
        label: "Country*",
        placeholder: "Select Country",
        type: "text",
        half: true,
      },
      {
        id: "quantity",
        label: "Required Quantity",
        placeholder: "e.g., 500 kg",
        type: "text",
        half: true,
      },
      {
        id: "message",
        label: "Your Message",
        placeholder: "Tell us about your requirements...",
        type: "textarea",
        half: false,
      },
    ],
    submitLabel: "Send Enquiry",
  },
};
