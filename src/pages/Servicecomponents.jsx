import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import gredfull from "../assets/gredfull.svg";
import gredhalf from "../assets/gredhalf.svg";
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const SectionHeader = ({ title, description, badge }) => (
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
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-light whitespace-nowrap mb-4 sm:mb-6">
          {title}
        </h1>
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
    {description && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed"
      >
        {description}
      </motion.p>
    )}
    {badge && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-4"
      >
        <span className="border border-white/30 text-white px-5 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-widest">
          {badge}
        </span>
      </motion.div>
    )}
  </motion.div>
);

export const GradientBox = ({ title, features }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 mb-16 sm:mb-20 overflow-hidden"
    style={{
      background:
        "linear-gradient(135deg, #1a0533 0%, #0d1a3a 50%, #0a2a1a 100%)",
      border: "1.5px solid rgba(168,85,247,0.3)",
    }}
  >
    <div
      className="absolute inset-0 pointer-events-none bg-cover bg-center"
      style={{
        backgroundImage: `url(${gredfull})`,
      }}
    />
    <div className="relative z-10">
      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-4 sm:mb-6">
        {title || "What's Included"}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            className="flex items-center gap-2"
          >
            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#30bff0] flex-shrink-0" />
            <span className="text-xs sm:text-sm text-gray-200">{feature}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

export const PricingCard = ({ plan, popular, onGetStarted }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ duration: 0.3 }}
    className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col"
  >
    {popular ? (
      <div
        className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none"
        style={{
          background: `
      linear-gradient(#0d0d0d, #0d0d0d) padding-box,
      linear-gradient(180deg, #ECBFBF 0%, #5C24FF 50%, #D94FD5 100%) border-box
    `,
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
    {popular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
        <span className="bgCommon text-white px-6 py-2 rounded-full text-sm font-semibold">
          Most Popular
        </span>
      </div>
    )}
    <div className="relative z-10 flex flex-col flex-1">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
        {plan.name}
      </h3>
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold figmaText mb-1">
        {plan.price}
        <span className="text-xs sm:text-sm text-gray-400 font-normal">
          /project
        </span>
      </p>
      <div className="mt-4 sm:mt-5 space-y-2 flex-1">
        {plan.features.map((f, i) => (
          <div key={i} className="flex items-center gap-2">
            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" />
            <span className="text-xs sm:text-sm text-gray-300">{f}</span>
          </div>
        ))}
      </div>
      <motion.button
        whileHover={
          popular
            ? { scale: 1.03 }
            : { scale: 1.03, backgroundColor: "#fff", color: "#000" }
        }
        whileTap={{ scale: 0.98 }}
        onClick={onGetStarted}
        className={`mt-6 sm:mt-8 w-full py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all ${
          popular
            ? "my-bg-gradient text-white"
            : "bg-transparent border-2 border-white/50 text-white"
        }`}
      >
        GET STARTED
      </motion.button>
    </div>
  </motion.div>
);

export const AdditionalServices = ({ services }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 mb-8 sm:mb-16 border-[1.5px] border-transparent"
    style={{
      border: "1px solid rgba(255,255,255,0.10)",
      // background: "#111",
    }}
  >
    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-4 sm:mb-6">
      Additional Services
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
      {services.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.07 }}
          whileHover={{ scale: 1.01 }}
          className="flex items-center justify-between  px-4 py-3"
          style={{
            border: "1px solid rgba(255,255,255,0.50)",
            // background: "#111",
          }}
        >
          <span className="text-xs sm:text-sm text-gray-300">{s.name}</span>
          <span className="gradient-text text-xs sm:text-sm font-semibold">
            +{s.price}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export const MaintenancePlans = ({ basic, premium }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border-[1.5px] border-transparent"
    style={{
      border: "1px solid rgba(255,255,255,0.10)",
      // background: "#111",
    }}
  >
    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-4 sm:mb-6">
      Maintenance Packages
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6"
        style={{
          border: "1px solid rgba(255,255,255,0.10)",
          background: "#111",
        }}
      >
        <h4 className="text-sm sm:text-base font-semibold text-white mb-1">
          Basic Maintenance
        </h4>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3E93D6] mb-3 sm:mb-4">
          {basic.price}
          <span className="text-xs sm:text-sm text-gray-400 font-normal">
            /month
          </span>
        </p>
        <div className="space-y-1.5">
          {basic.features.map((f, i) => (
            <div key={i} className="flex items-center gap-2">
              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#30bff0] flex-shrink-0" />
              <span className="text-xs sm:text-sm text-gray-300">{f}</span>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="relative rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 overflow-hidden"
        style={{
          backgroundImage: `url(${gredhalf})`,
        }}
      >
        <div className="absolute top-3 right-3 z-10">
          <span className="bgCommon text-white px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold">
            Recommended
          </span>
        </div>
        <h4 className="text-sm sm:text-base font-semibold text-white mb-1">
          Premium Maintenance
        </h4>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
          {premium.price}
          <span className="text-xs sm:text-sm text-gray-400 font-normal">
            /month
          </span>
        </p>
        <div className="space-y-1.5">
          {premium.features.map((f, i) => (
            <div key={i} className="flex items-center gap-2">
              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#30bff0] flex-shrink-0" />
              <span className="text-xs sm:text-sm text-gray-200">{f}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </motion.div>
);
