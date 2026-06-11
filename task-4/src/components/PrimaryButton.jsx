// PrimaryButton.jsx — SHARED REUSABLE BUTTON COMPONENT
// Used by: CaseStudies (Contact Us Today), ConnectCorner (Submit), anywhere else
//
// Props:
//   label      : string  — button text
//   to         : string  — React Router internal link (use this OR href)
//   href       : string  — external link (use this OR to)
//   onClick    : fn      — optional click handler
//   type       : string  — "button" | "submit" (default: "button")
//   className  : string  — extra tailwind classes to override/extend
//   variant    : "primary" | "outline"  (default: "primary")

import { Link } from "react-router-dom";

export default function PrimaryButton({
  label,
  to,
  href,
  onClick,
  type = "button",
  className = "",
  variant = "primary",
}) {
  const base =
    "inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-[14px] md:text-[15px] transition-all duration-300 cursor-pointer shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-[#F97316] text-white hover:bg-[#ea6c0a] focus:ring-[#F97316]",
    outline:
      "bg-transparent border-2 border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white focus:ring-[#1e3a8a]",
  };

  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`;

  // Internal React Router link
  if (to) {
    return (
      <Link to={to} className={classes}>
        {label}
      </Link>
    );
  }

  // External anchor link
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  }

  // Plain button (form submit / onClick)
  return (
    <button type={type} onClick={onClick} className={classes}>
      {label}
    </button>
  );
}