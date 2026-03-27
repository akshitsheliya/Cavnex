import React, { useState, useEffect } from "react";
import {
  Globe,
  Smartphone,
  Layers,
  ArrowRight,
  Check,
  Minus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      icon: Globe,
      title: "Website Development",
      description:
        "Modern, responsive websites that convert visitors into customers",
      features: [
        "Custom Responsive Design",
        "Fast Loading Speed",
        "Mobile-First Approach",
        "Cross-Browser Compatible",
        "SEO Optimization",
        "Contact Forms",
      ],
      price: "₹8,000",
      delivery: "2-4 Weeks",
      support: "1-6 Months",

      popular: false,
      link: "/services/website",
    },
    {
      id: 2,
      icon: Smartphone,
      title: "App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android",
      features: [
        "Cross-Platform Development",
        "Push Notifications",
        "Native Performance",
        "Offline Functionality",
        "Cloud Backend Integration",
        "In-App Purchases",
      ],
      price: "₹15,000",
      delivery: "4-8 Weeks",
      support: "1-6 Months",

      popular: true,
      link: "/services/app",
    },
    {
      id: 3,
      icon: Layers,
      title: "Website + App Combo",
      description: "Complete digital solution with website and mobile app",
      features: [
        "Responsive Website",
        "Shared Backend",
        "Cross-Platform Mobile App",
        "Admin Dashboard",
        "Unified Design System",
        "SEO Optimization",
      ],
      price: "₹20,000",
      delivery: "6-10 Weeks",
      support: "2-12 Months",

      popular: false,
      link: "/services/combo",
    },
  ];

  const comparisonData = [
    { feature: "Responsive Design", website: true, app: true, combo: true },
    { feature: "SEO Optimization", website: true, app: false, combo: true },
    { feature: "Cross Platform", website: false, app: true, combo: true },
    { feature: "Push Notifications", website: false, app: true, combo: true },
    { feature: "Admin Dashboard", website: "addon", app: "addon", combo: true },
    {
      feature: "Payment Integration",
      website: "addon",
      app: "addon",
      combo: true,
    },
    { feature: "Cloud Backend", website: false, app: true, combo: true },
    { feature: "Analytics", website: true, app: true, combo: true },
    { feature: "Maintenance Support", website: true, app: true, combo: true },
    { feature: "Priority Support", website: false, app: false, combo: true },
  ];

  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We understand your requirements, goals, and target audience",
    },
    {
      number: "02",
      title: "Design",
      description: "Creating wireframes and visual designs for your approval",
    },
    {
      number: "03",
      title: "Development",
      description: "Building your solution with clean, efficient code",
    },
    {
      number: "04",
      title: "Delivery",
      description: "Testing, deployment, and handover with full support",
    },
  ];

  const faqs = [
    { question: "How long does it take to complete a project?" },
    { question: "Do you provide source code?" },
    { question: "What technologies do you use?" },
    { question: "Do you offer maintenance after delivery?" },
    { question: "Can I request changes during development?" },
    { question: "What payment methods do you accept?" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const faqVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: i * 0.08,
        ease: "easeOut",
      },
    }),
  };

  const tableRowVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: i * 0.05,
        ease: "easeOut",
      },
    }),
  };

  const renderCellValue = (value) => {
    if (value === true) {
      return (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Check className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-500 mx-auto" />
        </motion.div>
      );
    }
    if (value === false) {
      return (
        <Minus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600 mx-auto" />
      );
    }
    if (value === "addon") {
      return (
        <span className="gradient-text text-[10px] sm:text-xs md:text-sm font-semibold">
          Add-on
        </span>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 sm:mb-10"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-8 mb-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light whitespace-nowrap mb-4 sm:mb-6">
                Our Services
              </h2>
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden sm:block flex-1 mt-2 origin-left"
            >
              <div className="h-px bg-gray-700 w-full mt-3" />
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed"
          >
            Comprehensive digital solutions tailored to your business
            <br className="hidden sm:block" />
            needs. We offer end-to-end development services to help
            <br className="hidden sm:block" /> your business grow.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8 sm:space-y-10 md:space-y-12"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10"
              >
                {service.popular ? (
                  <div
                    className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(#0d0d0d, #0d0d0d) padding-box, linear-gradient(180deg, #a855f7 0%, #ec4899 100%) border-box",
                      border: "1.5px solid transparent",
                    }}
                  />
                ) : (
                  <div
                    className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none"
                    style={{
                      border: "1.5px solid rgba(255,255,255,0.12)",
                      background: "#0d0d0d",
                    }}
                  />
                )}

                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <span className="bgCommon text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-6 md:gap-8">
                  <div>
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl my-bg-gradient flex items-center justify-center`}
                    >
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                    </div>
                  </div>

                  <div className="flex-grow space-y-4 sm:space-y-5 md:space-y-6">
                    <div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
                        {service.title}
                      </h2>
                      <p className="text-gray-400 text-sm sm:text-base md:text-lg">
                        {service.description}
                      </p>
                    </div>

                    <motion.div
                      variants={containerVariants}
                      className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4"
                    >
                      {service.features.map((feature, idx) => (
                        <div className="flex items-center gap-2">
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-black bg-white rounded-full flex-shrink-0" />
                          <span className="text-xs sm:text-sm md:text-base text-gray-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </motion.div>

                    <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-black/50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4"
                      >
                        <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm mb-0.5 sm:mb-1">
                          Starting from
                        </p>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold figmaText">
                          {service.price}
                        </p>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-black/50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4"
                      >
                        <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm mb-0.5 sm:mb-1">
                          Delivery Time
                        </p>
                        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold text-white">
                          {service.delivery}
                        </p>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-black/50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4"
                      >
                        <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm mb-0.5 sm:mb-1">
                          Support
                        </p>
                        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold text-white">
                          {service.support}
                        </p>
                      </motion.div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate(service.link)}
                        className={`flex items-center justify-center gap-2 my-bg-gradient text-white px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full font-semibold text-sm sm:text-base transition-opacity`}
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.button>

                      <motion.button
                        whileHover={{
                          scale: 1.03,
                          backgroundColor: "#fff",
                          color: "#000",
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate("/contact")}
                        className="flex items-center justify-center gap-2 bg-transparent border-2 border-white/50 text-white px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full font-semibold text-sm sm:text-base transition-all"
                      >
                        Get Quote
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="inline sm:block">Compare</span>
              <span className="inline sm:block sm:mt-3"> Our Plans</span>
            </h2>
          </motion.div>

          <div className="border-b border-zinc-800 overflow-hidden rounded-lg sm:rounded-none">
            <div className="overflow-x-auto scrollbar-hide">
              <table className="w-full min-w-[500px] sm:min-w-[600px]">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left p-3 sm:p-4 md:p-6 lg:p-8 text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-400">
                      Features
                    </th>
                    <th className="text-center p-3 sm:p-4 md:p-6 lg:p-8 text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white">
                      Website
                    </th>
                    <th className="text-center p-3 sm:p-4 md:p-6 lg:p-8 text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white">
                      App
                    </th>
                    <th className="text-center p-3 sm:p-4 md:p-6 lg:p-8 text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white">
                      Combo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <motion.tr
                      key={index}
                      custom={index}
                      variants={tableRowVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-all duration-300"
                    >
                      <td className="p-3 sm:p-4 md:p-6 lg:p-8 text-xs sm:text-sm md:text-base text-gray-300">
                        {row.feature}
                      </td>
                      <td className="p-3 sm:p-4 md:p-6 lg:p-8 text-center">
                        {renderCellValue(row.website)}
                      </td>
                      <td className="p-3 sm:p-4 md:p-6 lg:p-8 text-center">
                        {renderCellValue(row.app)}
                      </td>
                      <td className="p-3 sm:p-4 md:p-6 lg:p-8 text-center">
                        {renderCellValue(row.combo)}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto px-0 sm:px-4 md:px-6 pb-6 sm:pb-8 md:pb-10 pt-12 sm:pt-16 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light whitespace-nowrap">
              Our Development
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1 h-px bg-white/30 hidden sm:block origin-left"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-20 sm:mb-28 md:mb-32"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                custom={index}
                variants={stepVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-md bg-[#1c1c1e4b] p-4 sm:p-5 md:p-6 text-center"
              >
                <motion.p
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#163B58] mb-2 sm:mb-3"
                >
                  {step.number}
                </motion.p>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">
                  {step.title}
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-none tracking-tight">
              Common Question
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-1 sm:gap-y-2"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={faqVariants}
                className="border-b border-blue-600/60 py-3 sm:py-4 md:py-5"
              >
                <motion.button
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-xs sm:text-sm md:text-base text-gray-300 pr-4">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg sm:text-xl text-gray-400 flex-shrink-0"
                  >
                    {openIndex === index ? "−" : "+"}
                  </motion.span>
                </motion.button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3 overflow-hidden"
                    >
                      Please contact us for more details about this topic.
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
