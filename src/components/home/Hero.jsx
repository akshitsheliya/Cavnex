import { motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";
import heroImage from "../../assets/hero-image.png";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto relative min-h-0 lg:min-h-screen bg-black flex flex-col overflow-hidden">
      <div className="flex-1 flex items-center w-full relative z-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-0 lg:min-h-[calc(100vh-88px)]">
          <div className="flex flex-col justify-center px-4 py-8 sm:py-10 lg:py-0 gap-4 sm:gap-6 md:gap-16 lg:gap-20">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight tracking-normal mb-2 sm:mb-4 md:mb-8"
            >
              We Build
              <br />
              Websites &amp; Apps
              <br />
              For Fun
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-start gap-4 max-w-sm"
            >
              <div className="mt-1 flex-shrink-0">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <HiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </div>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                We help companies design their products to be ready for the
                Digital world
              </p>
            </motion.div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, x: 60 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 1.1,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-full h-auto lg:h-full min-h-0 lg:min-h-0"
            >
              <div className="absolute inset-0" />

              <div className="relative z-10 flex items-center justify-center h-full py-4 sm:py-6 lg:py-0">
                <img
                  src={heroImage}
                  alt="Hero"
                  className="w-full h-auto max-h-[280px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-none lg:h-full object-contain"
                />
              </div>
            </motion.div>

            <div
              className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(0,0,0,0.7))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
