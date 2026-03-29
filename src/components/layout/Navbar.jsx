import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import cavnex_full from "../../assets/cavnex_logo/cavnex_full.svg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "services", path: "/services" },
  { name: "projects", path: "/projects" },
  { name: "Community", path: "/community" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 0.8,
        }}
        className="fixed top-0 left-0 right-0 z-[100]"
      >
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? "bg-black/90 border-b border-white/[0.06]"
              : "bg-transparent border-b border-transparent"
          }`}
        >
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-[72px]">
              <Link to="/" className="flex items-center gap-2.5 relative z-50">
                <motion.img
                  src={cavnex_full}
                  alt="CavNex"
                  className="h-6 sm:h-7 md:h-8 w-auto object-contain"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                />
              </Link>

              <div className="hidden md:flex items-center">
                <div className="relative flex items-center bg-white/[0.04] rounded-full px-1.5 py-1.5 border border-white/[0.06]">
                  {navLinks.map((link, index) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="relative px-5 py-2 text-sm font-medium transition-colors duration-300 rounded-full z-10"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      style={{
                        color: isActive(link.path)
                          ? "#ffffff"
                          : hoveredIndex === index
                            ? "#e5e5e5"
                            : "#a1a1aa",
                      }}
                    >
                      {isActive(link.path) && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-white/[0.1] rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                            mass: 0.8,
                          }}
                        />
                      )}
                      {hoveredIndex === index && !isActive(link.path) && (
                        <motion.div
                          layoutId="hoverTab"
                          className="absolute inset-0 bg-white/[0.05] rounded-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                          }}
                        />
                      )}
                      <span className="relative z-10">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="hidden md:flex items-center">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    className="relative group px-7 py-2.5 text-sm font-bold rounded-full overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white rounded-full transition-all duration-300 group-hover:bg-gray-100" />
                    <span className="relative z-10 text-black tracking-wide">
                      CONTACT
                    </span>
                  </motion.button>
                </Link>
              </div>

              <motion.button
                whileTap={{ scale: 0.85 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden relative z-50 w-11 h-11 flex items-center justify-center rounded-full bg-white/[0.06] border border-white/[0.08] active:bg-white/[0.1]"
                aria-label="Toggle menu"
              >
                <div className="w-5 h-4 flex flex-col justify-between items-center">
                  <motion.span
                    animate={{
                      rotate: isOpen ? 45 : 0,
                      y: isOpen ? 7 : 0,
                      width: isOpen ? 20 : 20,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 22,
                    }}
                    className="block h-[1.5px] bg-white rounded-full origin-center"
                    style={{ width: 20 }}
                  />
                  <motion.span
                    animate={{
                      opacity: isOpen ? 0 : 1,
                      scaleX: isOpen ? 0 : 1,
                    }}
                    transition={{
                      duration: 0.15,
                      ease: "easeInOut",
                    }}
                    className="block h-[1.5px] w-5 bg-white rounded-full"
                  />
                  <motion.span
                    animate={{
                      rotate: isOpen ? -45 : 0,
                      y: isOpen ? -7 : 0,
                      width: isOpen ? 20 : 14,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 22,
                    }}
                    className="block h-[1.5px] bg-white rounded-full self-end origin-center"
                    style={{ width: 14 }}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed inset-0 bg-black/80 md:hidden"
                onClick={() => setIsOpen(false)}
              />

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8,
                }}
                className="fixed top-[72px] left-3 right-3 md:hidden bg-[#111111] rounded-2xl border border-white/[0.08] overflow-hidden"
              >
                <div className="p-5">
                  <div className="space-y-0.5">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                          delay: index * 0.05,
                        }}
                      >
                        <Link
                          to={link.path}
                          className={`flex items-center justify-between py-3.5 px-4 rounded-xl text-[15px] font-medium transition-all duration-200 ${
                            isActive(link.path)
                              ? "text-white bg-white/[0.08]"
                              : "text-zinc-400 hover:text-white hover:bg-white/[0.04] active:bg-white/[0.08]"
                          }`}
                        >
                          <span>{link.name}</span>
                          {isActive(link.path) && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 20,
                                delay: index * 0.05 + 0.1,
                              }}
                              className="w-1.5 h-1.5 bg-white rounded-full"
                            />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                      delay: navLinks.length * 0.05 + 0.05,
                    }}
                    className="mt-4 pt-4 border-t border-white/[0.06]"
                  >
                    <Link to="/contact" className="block">
                      <motion.button
                        whileTap={{ scale: 0.97 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                        className="w-full py-3.5 bg-white text-black text-sm font-bold rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 tracking-wide"
                      >
                        CONTACT
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      <div className="h-16 sm:h-[72px]" />
    </>
  );
};

export default Navbar;
