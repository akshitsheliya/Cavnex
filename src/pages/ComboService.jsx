import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  SectionHeader,
  GradientBox,
  PricingCard,
  AdditionalServices,
  MaintenancePlans,
  containerVariants,
} from "./Servicecomponents";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

const comboData = {
  title: "Website + App Combo",
  description: "Complete digital solution with website and mobile app",
  whatsIncluded: [
    "Responsive Website",
    "Cross-Platform Mobile App",
    "Unified Design System",
    "Shared Backend",
    "Admin Dashboard",
    "SEO Optimization",
    "Push Notifications",
    "Analytics Integration",
    "Cloud Hosting",
    "Complete Support",
  ],
  plans: [
    {
      name: "Startup Combo",
      price: "₹20,000",
      features: [
        "Basic Website",
        "Basic Mobile App",
        "Shared Backend",
        "Basic Features",
        "2 Months Support",
      ],
    },
    {
      name: "Business Combo",
      price: "₹40,000",
      popular: true,
      features: [
        "Professional Website",
        "Professional App",
        "Complete Backend",
        "Admin Dashboard",
        "All Integrations",
        "SEO & Analytics",
        "6 Months Support",
      ],
    },
    {
      name: "Enterprise Combo",
      price: "₹70,000",
      features: [
        "Enterprise Website",
        "Enterprise App",
        "Advanced Backend",
        "Custom Features",
        "Premium Support",
        "Marketing Tools",
        "12 Months Support",
      ],
    },
  ],
  additionalServices: [
    { name: "E-commerce Complete", price: "₹10,000" },
    { name: "Advanced Admin Panel", price: "₹8,000" },
    { name: "Marketing Automation", price: "₹7,000" },
    { name: "Custom Integrations", price: "₹9,000" },
    { name: "White Label Solution", price: "₹15,000" },
  ],
  maintenance: {
    basic: {
      price: "₹5,000",
      features: ["All Updates", "Bug Fixes", "Server Maintenance", "Backup"],
    },
    premium: {
      price: "₹10,000",
      features: [
        "Everything in Basic",
        "Feature Development",
        "Priority Support",
        "Performance Optimization",
      ],
    },
  },
};

const ComboPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6 sm:mb-8"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base group"
          >
            <HiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
        </motion.div>
        <SectionHeader
          title={comboData.title}
          description={comboData.description}
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 sm:mb-10"
        >
          <span className="border border-white/30 text-white px-5 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-widest">
            Save up to 30% with Combo Package
          </span>
        </motion.div>

        <GradientBox features={comboData.whatsIncluded} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-none tracking-tight">
            Combo
            <br />
            Packages
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {comboData.plans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              popular={plan.popular}
              onGetStarted={() => navigate("/contact")}
            />
          ))}
        </motion.div>

        <AdditionalServices services={comboData.additionalServices} />

        <div className="mt-6 sm:mt-8">
          <MaintenancePlans
            basic={comboData.maintenance.basic}
            premium={comboData.maintenance.premium}
          />
        </div>
      </div>
    </div>
  );
};

export default ComboPage;
