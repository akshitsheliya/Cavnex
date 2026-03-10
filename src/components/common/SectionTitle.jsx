import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";

export default function SectionTitle({ title, subtitle, gradient = false }) {
  return (
    <motion.div
      {...fadeInUp}
      className="text-center mb-10 sm:mb-12 md:mb-16 px-4"
    >
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4 ${
          gradient ? "gradient-text" : "text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
