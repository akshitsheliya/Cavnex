import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiCheck, HiArrowRight } from "react-icons/hi";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  link,
}) {
  return (
    <motion.div
      variants={cardVariants}
      className="card-gradient rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2 transition-all duration-300 group will-change-transform relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-purple-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

      <div className="relative">
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-400" />
        </div>

        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4 group-hover:text-primary-300 transition-colors">
          {title}
        </h3>

        <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
          {description}
        </p>

        {features && (
          <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
            {features.slice(0, 4).map((feature, index) => (
              <li
                key={index}
                className="flex items-center text-gray-300 text-sm sm:text-base"
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary-500/20 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                  <HiCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary-400" />
                </div>
                {feature}
              </li>
            ))}
          </ul>
        )}

        <Link to={link}>
          <button className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-primary-600 to-blue-600 rounded-lg font-semibold text-white text-sm sm:text-base hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 group/btn">
            Learn More
            <HiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
