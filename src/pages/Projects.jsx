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
    <div className="min-h-screen bg-black text-white py-8 xs:py-10 sm:py-16 md:py-20 px-4 xs:px-5 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 xs:mb-10 sm:mb-16 md:mb-20"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-8 mb-3 xs:mb-4">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-light whitespace-nowrap mb-3 xs:mb-4 sm:mb-6 flex-shrink-0"
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
            className="text-gray-400 text-sm xs:text-base sm:text-lg max-w-xl leading-relaxed"
          >
            Explore our collection of successful projects across various
            <br className="hidden sm:block" /> industries
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              whileTap="hover"
              className="relative rounded-lg xs:rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group aspect-video"
            >
              <div className="absolute inset-0 w-full h-full">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover absolute inset-0 grayscale brightness-75"
                  variants={{
                    hover: {
                      scale: 1.02,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover absolute inset-0"
                  initial={{ opacity: 0 }}
                  variants={{
                    hover: {
                      opacity: 1,
                      scale: 1.02,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                />
              </div>

              <motion.div
                className="absolute inset-0 opacity-0 pointer-events-none"
                variants={{
                  hover: {
                    opacity: 1,
                    transition: { duration: 0.5, delay: 0.1 },
                  },
                }}
              />

              <motion.div
                className="absolute -inset-1 rounded-lg xs:rounded-xl sm:rounded-2xl opacity-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, #8B5CF6, #EC4899, #3B82F6)",
                  filter: "blur(20px)",
                  zIndex: -1,
                }}
                variants={{
                  hover: {
                    opacity: 0.5,
                    transition: { duration: 0.4 },
                  },
                }}
              />

              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-3 xs:px-4 sm:px-5 pb-3 xs:pb-4 sm:pb-5">
                <motion.span
                  className="text-white text-xs xs:text-sm sm:text-base md:text-lg font-medium"
                  variants={{
                    hover: {
                      y: -2,
                      textShadow: "0 0 20px rgba(255,255,255,0.5)",
                      transition: { duration: 0.3 },
                    },
                  }}
                >
                  {project.title}
                </motion.span>
                <motion.div
                  variants={{
                    hover: {
                      x: 4,
                      y: -4,
                      rotate: 0,
                      transition: {
                        duration: 0.3,
                        type: "spring",
                        stiffness: 300,
                      },
                    },
                  }}
                  className="text-white opacity-80"
                >
                  <motion.div
                    className="relative"
                    variants={{
                      hover: {
                        filter: "drop-shadow(0 0 8px rgba(139, 92, 246, 0.8))",
                      },
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </motion.div>
                </motion.div>
              </div>

              <motion.div
                className="absolute top-0 left-0 w-full h-1 xs:h-1.5"
                initial={{ scaleX: 0, opacity: 0 }}
                variants={{
                  hover: {
                    scaleX: 1,
                    opacity: 1,
                    transition: { duration: 0.4 },
                  },
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
