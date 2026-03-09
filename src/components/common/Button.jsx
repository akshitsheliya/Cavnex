import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  onClick,
  ...props
}) {
  const baseClasses = variant === "primary" ? "btn-primary" : "btn-secondary";
  const combinedClasses = `${baseClasses} ${className}`;

  const MotionButton = motion.button;
  const MotionLink = motion(Link);

  if (to) {
    return (
      <MotionLink
        to={to}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={combinedClasses}
        {...props}
      >
        {children}
      </MotionLink>
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
    <MotionButton
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </MotionButton>
  );
}
