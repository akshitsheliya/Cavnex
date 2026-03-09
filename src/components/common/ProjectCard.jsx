import { motion } from "framer-motion";
import { scaleIn } from "../../utils/animations";

export default function ProjectCard({
  title,
  category,
  image,
  demoLink,
  tags,
}) {
  return (
    <motion.div
      {...scaleIn}
      whileHover={{ y: -10 }}
      className="card-gradient rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="relative h-64 bg-gradient-to-br from-primary-900/20 to-purple-900/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50 group-hover:opacity-70 transition-opacity">
          {image}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60" />
      </div>

      <div className="p-6">
        <div className="text-sm text-primary-400 mb-2">{category}</div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>

        {tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
        >
          View Demo
          <span className="ml-2">→</span>
        </a>
      </div>
    </motion.div>
  );
}
