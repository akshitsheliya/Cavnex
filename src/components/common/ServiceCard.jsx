import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { scaleIn } from "../../utils/animations";

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  link,
}) {
  return (
    <motion.div
      {...scaleIn}
      whileHover={{ y: -10 }}
      className="card-gradient rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all">
        {title}
      </h3>
      <p className="text-gray-400 mb-6">{description}</p>
      {features && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300">
              <span className="text-primary-400 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      <Link to={link}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-blue-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-primary-500/30 transition-all"
        >
          Learn More →
        </motion.button>
      </Link>
    </motion.div>
  );
}
