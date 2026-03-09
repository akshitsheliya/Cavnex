import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";

export default function SectionTitle({ title, subtitle, gradient = false }) {
  return (
    <motion.div {...fadeInUp} className="text-center mb-16">
      <h2
        className={`text-4xl md:text-5xl font-display font-bold mb-4 ${gradient ? "gradient-text" : "text-white"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
