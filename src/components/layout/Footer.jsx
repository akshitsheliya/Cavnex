import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import cavnex_full from "../../assets/cavnex_logo/cavnex_full.svg";

export default function Footer() {
  const solutions = [
    { name: "Website Development", path: "/services/website" },
    { name: "App Development ", path: "/services/app" },
    { name: "Website + App Combo", path: "/services/combo" },
    { name: "Our Portfolio", path: "/projects" },
  ];

  const company = [
    { name: "About Us", path: "/about-us" },
    { name: "Privacy", path: "/privacy" },
    { name: "Terms", path: "/terms" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const social = [
    // { name: "Twitter", icon: FaTwitter, url: "#" },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/cavnex",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/cavnex",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/Cavnex-info-Tech",
    },
  ];

  return (
    <footer className="bg-[#0e0e0e] border-t border-white/5 px-4 sm:px-6 md:px-8 lg:px-16 py-10 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 mb-6">
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <img
                src={cavnex_full}
                alt="Cavnex"
                className="h-6 sm:h-7 md:h-8 w-auto object-contain"
              />
            </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 max-w-[280px] sm:max-w-[220px]">
              Crafting digital experiences that transform businesses and delight
              users.
            </p>

            <div className="flex items-center gap-5 sm:gap-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  aria-label={item.name}
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  <item.icon className="w-5 h-5 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-xs tracking-widest uppercase mb-4 sm:mb-5">
              Solutions
            </h3>
            <ul className="space-y-2.5 sm:space-y-3.5">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-xs tracking-widest uppercase mb-4 sm:mb-5">
              Company
            </h3>
            <ul className="space-y-2.5 sm:space-y-3.5">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <h3 className="text-white font-bold text-xs tracking-widest uppercase mb-4 sm:mb-5">
              Contact
            </h3>
            <ul className="flex flex-row lg:flex-col gap-4 sm:gap-6 lg:gap-4 flex-wrap lg:flex-nowrap">
              <li className="flex items-center gap-2 sm:gap-3">
                <HiMail className="w-4 h-4 text-white flex-shrink-0" />
                <span className="text-gray-400 text-xs sm:text-sm leading-none">
                  info@cavnex.com
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <HiPhone className="w-4 h-4 text-white flex-shrink-0" />
                <span className="text-gray-400 text-xs sm:text-sm leading-none">
                  +91 91575 00298
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <HiLocationMarker className="w-4 h-4 text-white flex-shrink-0" />
                <span className="text-gray-400 text-xs sm:text-sm leading-none">
                  Gujarat, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm text-center sm:text-left order-2 sm:order-1">
              © 2026 Cavnex info Tech. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6 text-[10px] sm:text-xs md:text-sm text-gray-400 order-1 sm:order-2">
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
