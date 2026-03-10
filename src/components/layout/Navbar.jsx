import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (location.pathname === "/") {
        const sections = ["services"];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;

            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(section);
              return;
            }
          }
        }

        if (window.scrollY < 300) {
          setActiveSection("home");
        } else {
          setActiveSection("");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setIsOpen(false);

    if (location.pathname === "/") {
      if (location.hash === "#services") {
        setTimeout(() => {
          const element = document.getElementById("services");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
      setActiveSection(location.hash === "#services" ? "services" : "home");
    } else {
      setActiveSection(location.pathname);
    }
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleServicesClick = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      const element = document.getElementById("services");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#services");
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/", id: "home" },
    { name: "Services", path: "/#services", id: "services", isHash: true },
    { name: "Projects", path: "/projects", id: "/projects" },
    { name: "Community", path: "/community", id: "/community" },
    { name: "Contact", path: "/contact", id: "/contact" },
  ];

  const isActive = (link) => {
    if (
      link.id === "home" &&
      location.pathname === "/" &&
      activeSection === "home"
    ) {
      return true;
    }
    if (link.id === "services" && activeSection === "services") {
      return true;
    }
    if (!link.isHash && location.pathname === link.path) {
      return true;
    }
    return false;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-dark-900/95 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          <Link to="/" className="flex items-center space-x-2 group z-50">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center"
            >
              <span className="text-white font-bold text-lg sm:text-xl">W</span>
            </motion.div>
            <span className="text-xl sm:text-2xl font-display font-bold gradient-text">
              CavNex
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.isHash ? (
                  <button
                    onClick={handleServicesClick}
                    className={`transition-colors relative group text-sm xl:text-base ${
                      isActive(link)
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-purple-600 transition-all duration-300 ${
                        isActive(link) ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`transition-colors relative group text-sm xl:text-base ${
                      isActive(link)
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-purple-600 transition-all duration-300 ${
                        isActive(link) ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                )}
              </div>
            ))}
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-sm"
              >
                Get Started
              </motion.button>
            </Link>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-effect border-t border-white/10"
          >
            <div className="flex flex-col px-6 pb-8 pt-4">
              <div className="space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    {link.isHash ? (
                      <button
                        onClick={handleServicesClick}
                        className={`block w-full text-left py-3 text-lg transition-colors border-b border-white/10 ${
                          isActive(link)
                            ? "text-primary-400 font-semibold"
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        <span className="flex items-center justify-between">
                          {link.name}
                          {isActive(link) && (
                            <span className="w-2 h-2 bg-primary-400 rounded-full" />
                          )}
                        </span>
                      </button>
                    ) : (
                      <Link
                        to={link.path}
                        className={`block py-3 text-lg transition-colors border-b border-white/10 ${
                          isActive(link)
                            ? "text-primary-400 font-semibold"
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        <span className="flex items-center justify-between">
                          {link.name}
                          {isActive(link) && (
                            <span className="w-2 h-2 bg-primary-400 rounded-full" />
                          )}
                        </span>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6"
              >
                <Link
                  to="/contact"
                  className="block"
                  onClick={() => setIsOpen(false)}
                >
                  <button className="btn-primary w-full">Get Started</button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
