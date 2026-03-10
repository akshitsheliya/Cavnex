import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

export default function ProjectCard({
  title,
  category,
  image,
  demoLink,
  tags,
}) {
  return (
    <motion.div
      variants={cardVariants}
      className="card-gradient rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group will-change-transform"
    >
      <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 bg-dark-800 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <span className="px-2 py-1 sm:px-3 sm:py-1.5 bg-primary-600/90 backdrop-blur-sm rounded-full text-[10px] sm:text-xs text-white font-medium">
            {category}
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
          {title}
        </h3>

        {tags && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/5 rounded-full text-[10px] sm:text-xs text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <a
          // href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors text-sm sm:text-base font-medium group/link"
        >
          View Demo
          <HiArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}
