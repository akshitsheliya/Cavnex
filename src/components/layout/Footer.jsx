import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

export default function Footer() {
  const services = [
    { name: "Website Development", path: "/services/website" },
    { name: "App Development", path: "/services/app" },
    { name: "Combo Package", path: "/services/combo" },
  ];

  const company = [
    { name: "About Us", path: "/community" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const social = [
    { name: "Instagram", icon: FaInstagram, url: "#" },
    { name: "LinkedIn", icon: FaLinkedinIn, url: "#" },
    { name: "Twitter", icon: FaTwitter, url: "#" },
    { name: "GitHub", icon: FaGithub, url: "#" },
  ];

  return (
    <footer className="relative border-t border-white/10 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-900/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">
                  W
                </span>
              </div>
              <span className="text-xl sm:text-2xl font-display font-bold gradient-text">
                CavNex
              </span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base mb-6 max-w-xs">
              Crafting digital experiences that transform businesses and delight
              users.
            </p>
            <div className="flex space-x-3">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  className="w-9 h-9 sm:w-10 sm:h-10 glass-effect rounded-full flex items-center justify-center hover:bg-primary-600/20 transition-all duration-300 hover:scale-110"
                  aria-label={item.name}
                >
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4">
              Services
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm sm:text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4">
              Company
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm sm:text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4">
              Contact
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
              <li className="flex items-center gap-2">
                <HiMail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span>hello@cavnex.com</span>
              </li>
              <li className="flex items-center gap-2">
                <HiPhone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span>+91 87992 63376</span>
              </li>
              <li className="flex items-center gap-2">
                <HiLocationMarker className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span>Mumbai, India</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2026 CavNex info Tech. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-400">
              <a href="#" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
