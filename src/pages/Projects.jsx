import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Cafe Delight",
    image:
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&q=80",
  },
  {
    id: 2,
    title: "Royal Dining",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
  },
  {
    id: 3,
    title: "Creative Portfolio",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: 4,
    title: "Tech Startup",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
  {
    id: 5,
    title: "Fitness Pro",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
  },
  {
    id: 6,
    title: "E-Shop Fashion",
    image:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80",
  },
  {
    id: 7,
    title: "Real Estate Hub",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },
  {
    id: 8,
    title: "Learn Online",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-8 mb-4">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl font-light whitespace-nowrap mb-4 sm:mb-6 flex-shrink-0"
            >
              Our Portfolio
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden sm:block flex-1 origin-left mt-2"
            >
              <div className="h-px bg-gray-700 w-full mt-3" />
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed"
          >
            Explore our collection of successful projects across various
            <br className="hidden sm:block" /> industries
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              onClick={() => navigate("/contact")}
              className="relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group"
              style={{ aspectRatio: "4/3" }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(100%) brightness(0.75)" }}
                variants={{
                  hover: { scale: 1.05, transition: { duration: 0.4 } },
                }}
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
                }}
              />

              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-4 sm:px-5 pb-4 sm:pb-5">
                <span className="text-white text-sm sm:text-base md:text-lg font-medium">
                  {project.title}
                </span>
                <motion.div
                  variants={{
                    hover: { x: 3, y: -3, transition: { duration: 0.2 } },
                  }}
                  className="text-white opacity-80"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
