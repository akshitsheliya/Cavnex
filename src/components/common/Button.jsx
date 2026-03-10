import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  ...props
}) {
  const baseClasses = variant === "primary" ? "btn-primary" : "btn-secondary";
  const combinedClasses = `${baseClasses} ${className}`;

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link to={to} className={combinedClasses} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={combinedClasses}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
}
