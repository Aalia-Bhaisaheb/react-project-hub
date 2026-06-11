const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  icon,
  ...props
}) => {
  const base =
    "inline-flex items-center gap-2 font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-[#2D258E] text-white hover:bg-[#2d1fa0] focus:ring-[#3D2DB8] rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95",
    secondary:
      "bg-transparent border-2 border-[#3D2DB8] text-[#3D2DB8] hover:bg-[#3D2DB8] hover:text-white focus:ring-[#3D2DB8] rounded-full",
    outline:
      "bg-transparent border border-white text-white hover:bg-white hover:text-[#3D2DB8] focus:ring-white rounded-full",
    ghost:
      "bg-transparent text-[#3D2DB8] hover:bg-[#3D2DB8]/10 focus:ring-[#3D2DB8] rounded-full",
  };

  const sizes = {
    sm: "px-5 py-2 text-xs",
    md: "px-7 py-3 text-xs",
    lg: "px-9 py-4 text-sm",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon && (
        <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;
