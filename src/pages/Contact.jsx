import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailIcon from "../assets/contact/mail.svg";
import phoneIcon from "../assets/contact/phone.svg";
import mapIcon from "../assets/contact/map.svg";
import msgIcon from "../assets/contact/msg.svg";
import abstract from "../assets/abstract.svg";
import instagram from "../assets/contact/insta.svg";
import github from "../assets/contact/git.svg";
import linkedin from "../assets/contact/in.svg";
import twitter from "../assets/contact/x.svg";
import CustomDropdown from "../components/common/CustomDropdown";
import { link } from "framer-motion/client";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Typically 2-4 weeks depending on complexity and requirements. We ensure timely delivery without compromising quality.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use React, Next.js, Node.js, Flutter, MongoDB, PostgreSQL, AWS and more depending on your project needs.",
  },
  {
    question: "Do you provide hosting services?",
    answer:
      "Yes, we offer SaaS hosting, self-hosted, and cloud solutions tailored to your business requirements.",
  },
  {
    question: "Can I update the website myself?",
    answer:
      "Absolutely! We integrate a CMS so you can manage content easily without any technical knowledge.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes, we provide maintenance packages ranging from 1 to 12 months post-launch support.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a transparent refund policy. Please contact us for detailed terms based on your project stage.",
  },
];

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 !== 0);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 xs:px-5 sm:px-4 md:px-6 lg:px-8 pt-8 xs:pt-10 sm:pt-16 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 xs:mb-8 sm:mb-10"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-8 mb-3 xs:mb-4">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-light whitespace-nowrap mb-3 xs:mb-4 sm:mb-6 flex-shrink-0"
            >
              Get In Touch
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
            className="text-gray-400 text-sm xs:text-base sm:text-lg"
          >
            Have a project in mind? Let's discuss how we can help you
          </motion.p>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden min-h-[600px] xs:min-h-[580px] sm:min-h-[350px] md:min-h-[420px] lg:min-h-[420px]">
        <img
          src={abstract}
          alt=""
          className="absolute inset-0 w-full h-full "
        />

        <div
          className="absolute"
          style={{
            top: "10%",
            left: "25%",
            right: "0",
            bottom: "0",
            background:
              "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,255,200,0.03) 2px, rgba(0,255,200,0.03) 4px)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 xs:px-5 sm:px-4 md:px-6 lg:px-8 py-6 xs:py-8 sm:py-14">
          <div className="flex flex-col lg:flex-row gap-5 xs:gap-6 sm:gap-8">
            <div className="flex flex-col gap-2 xs:gap-3 sm:gap-4 lg:w-[340px] xl:w-[380px] flex-shrink-0">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-2 xs:gap-3 sm:gap-4">
                {[
                  {
                    icon: (
                      <img
                        src={emailIcon}
                        alt="email"
                        className="w-full h-full"
                      />
                    ),
                    label: "Email",
                    value: "connect@cavnex.com",
                    link: "mailto:connect@cavnex.com",
                  },
                  {
                    icon: (
                      <img
                        src={phoneIcon}
                        alt="phone"
                        className="w-full h-full"
                      />
                    ),
                    label: "Phone",
                    value: "+919157500298",
                    link: "tel:+919157500298",
                  },
                  {
                    icon: (
                      <img src={msgIcon} alt="map" className="w-full h-full" />
                    ),
                    label: "WhatsApp",
                    value: "Chat with us",
                    link: "https://wa.me/919157500298?text=Hello%20Cavnex!",
                  },
                  {
                    icon: (
                      <img src={mapIcon} alt="map" className="w-full h-full" />
                    ),
                    label: "Location",
                    value: "Mumbai, India",
                  },
                ].map((item, i) => {
                  const Wrapper = item.link ? motion.a : motion.div;

                  return (
                    <Wrapper
                      key={i}
                      {...(item.link && {
                        href: item.link,
                        target: item.link.startsWith("http")
                          ? "_blank"
                          : "_self",
                        rel: "noopener noreferrer",
                      })}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-2 xs:gap-3 sm:gap-4 rounded-xl px-3 xs:px-4 py-2.5 xs:py-3 sm:py-4 backdrop-blur-[23px] cursor-default"
                    >
                      <div className="w-7 h-7 xs:w-9 xs:h-9 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-gray-400 text-[9px] xs:text-[10px] sm:text-xs">
                          {item.label}
                        </p>
                        <p className="text-white text-[10px] xs:text-xs sm:text-sm font-medium truncate cursor-pointer">
                          {item.value}
                        </p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.75 }}
                className="mt-1 xs:mt-2 sm:mt-3"
              >
                <p className="text-white font-semibold text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 xs:mb-3">
                  Follow Us
                </p>
                <div className="flex items-center gap-3 xs:gap-4">
                  {[
                    {
                      icon: (
                        <img
                          src={instagram}
                          alt="Instagram"
                          className="w-full h-full"
                        />
                      ),
                      link: "https://www.instagram.com/cavnex",
                    },
                    {
                      icon: (
                        <img
                          src={linkedin}
                          alt="LinkedIn"
                          className="w-full h-full"
                        />
                      ),
                      link: "https://www.linkedin.com/in/cavnex",
                    },
                    {
                      icon: (
                        <img
                          src={github}
                          alt="GitHub"
                          className="w-full h-full"
                        />
                      ),
                      link: "https://github.com/Cavnex-info-Tech",
                    },
                    // {
                    //   icon: (
                    //     <img
                    //       src={twitter}
                    //       alt="Twitter"
                    //       className="w-full h-full"
                    //     />
                    //   ),
                    // },
                  ].map((s, i) => (
                    <motion.a
                      key={i}
                      href={s.link || "#"}
                      target={s.link ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-white rounded-full p-1.5 xs:p-2 w-7 h-7 xs:w-8 xs:h-8 bg-[#00000070] hover:text-white transition-colors"
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex-1 rounded-2xl p-4 xs:p-5 sm:p-6 md:p-7 backdrop-blur-[23px]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 xs:gap-3 sm:gap-4">
                <div>
                  <label className="block text-[10px] xs:text-xs sm:text-sm text-gray-300 mb-1 xs:mb-1.5">
                    Your Name <span className="text-white">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-2.5 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-5 text-white text-[10px] xs:text-xs sm:text-sm outline-none focus:border-purple-500 transition-colors bg-[#000000B8]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] xs:text-xs sm:text-sm text-gray-300 mb-1 xs:mb-1.5">
                    Email Address <span className="text-white">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-2.5 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-5 text-white text-[10px] xs:text-xs sm:text-sm outline-none focus:border-purple-500 transition-colors bg-[#000000B8]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] xs:text-xs sm:text-sm text-gray-300 mb-1 xs:mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-2.5 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-5 text-white text-[10px] xs:text-xs sm:text-sm outline-none focus:border-purple-500 transition-colors bg-[#000000B8]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] xs:text-xs sm:text-sm text-gray-300 mb-1 xs:mb-1.5">
                    Project Type <span className="text-white">*</span>
                  </label>
                  <CustomDropdown
                    placeholder="Select Type"
                    value={formData.projectType}
                    onChange={(val) =>
                      setFormData({ ...formData, projectType: val })
                    }
                    options={[
                      { label: "Website Development", value: "website" },
                      { label: "App Development", value: "app" },
                      { label: "Website + App Combo", value: "combo" },
                      { label: "Other", value: "other" },
                    ]}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[10px] xs:text-xs sm:text-sm text-gray-300 mb-1 xs:mb-1.5">
                    Budget Range
                  </label>
                  <CustomDropdown
                    placeholder="Select Budget"
                    value={formData.budget}
                    onChange={(val) =>
                      setFormData({ ...formData, budget: val })
                    }
                    options={[
                      { label: "₹8,000 - ₹15,000", value: "8k-15k" },
                      { label: "₹15,000 - ₹30,000", value: "15k-30k" },
                      { label: "₹30,000 - ₹70,000", value: "30k-70k" },
                      { label: "₹70,000+", value: "70k+" },
                    ]}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[10px] xs:text-xs sm:text-sm text-gray-300 mb-1 xs:mb-1.5">
                    Project Details <span className="text-white">*</span>
                  </label>
                  <textarea
                    name="details"
                    placeholder="Tell us about your project..."
                    value={formData.details}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-2.5 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-5 text-white text-[10px] xs:text-xs sm:text-sm outline-none focus:border-purple-500 transition-colors resize-none bg-[#000000B8] sm:rows-4"
                  />
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02, opacity: 0.9 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                className="mt-3 xs:mt-4 sm:mt-5 w-full py-2.5 xs:py-3 sm:py-5 rounded-full font-semibold text-white text-xs xs:text-sm sm:text-base bg-[#000000B8] transition-opacity"
              >
                Send Message
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 xs:px-5 sm:px-4 md:px-6 lg:px-8 pt-10 xs:pt-12 sm:pt-20 md:pt-24 pb-10 xs:pb-12 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6 xs:mb-8 sm:mb-14 md:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight xs:leading-none tracking-tight">
            Frequently Asked
            <br />
            Questions
          </h2>
        </motion.div>

        <div className="hidden md:grid md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-0">
          <div>
            {leftFaqs.map((faq, index) => {
              const globalIndex = index * 2;
              return (
                <motion.div
                  key={globalIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="border-b border-blue-600/60 py-3 sm:py-4 md:py-5"
                >
                  <motion.button
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() =>
                      setOpenFaq(openFaq === globalIndex ? null : globalIndex)
                    }
                    className="flex items-center justify-between w-full text-left"
                  >
                    <span className="text-xs sm:text-sm md:text-base text-gray-300 pr-4">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openFaq === globalIndex ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg sm:text-xl text-gray-400 flex-shrink-0"
                    >
                      {openFaq === globalIndex ? "−" : "+"}
                    </motion.span>
                  </motion.button>
                  <AnimatePresence>
                    {openFaq === globalIndex && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3 overflow-hidden"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
          <div>
            {rightFaqs.map((faq, index) => {
              const globalIndex = index * 2 + 1;
              return (
                <motion.div
                  key={globalIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="border-b border-blue-600/60 py-3 sm:py-4 md:py-5"
                >
                  <motion.button
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() =>
                      setOpenFaq(openFaq === globalIndex ? null : globalIndex)
                    }
                    className="flex items-center justify-between w-full text-left"
                  >
                    <span className="text-xs sm:text-sm md:text-base text-gray-300 pr-4">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openFaq === globalIndex ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg sm:text-xl text-gray-400 flex-shrink-0"
                    >
                      {openFaq === globalIndex ? "−" : "+"}
                    </motion.span>
                  </motion.button>
                  <AnimatePresence>
                    {openFaq === globalIndex && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3 overflow-hidden"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="md:hidden">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border-b border-blue-600/60 py-2.5 xs:py-3"
            >
              <motion.button
                whileTap={{ scale: 0.99 }}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="text-[11px] xs:text-xs sm:text-sm text-gray-300 pr-3 xs:pr-4">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-base xs:text-lg text-gray-400 flex-shrink-0"
                >
                  {openFaq === index ? "−" : "+"}
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[10px] xs:text-xs text-gray-500 mt-1.5 xs:mt-2 overflow-hidden"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
