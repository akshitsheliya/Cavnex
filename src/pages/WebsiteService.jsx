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

const websiteData = {
  title: "Website Development",
  description:
    "Modern, responsive websites that convert visitors into customers",
  badge: "Save up to 20% with annual plan",
  whatsIncluded: [
    "Custom Responsive Design",
    "Mobile-First Approach",
    "SEO Optimization",
    "Fast Loading Speed",
    "Cross-Browser Compatible",
    "Contact Forms",
    "Social Media Integration",
    "Google Analytics Setup",
    "SSL Certificate",
    "Content Management System",
  ],
  plans: [
    {
      name: "Basic Website",
      price: "₹8,000",
      features: [
        "5 Pages",
        "Responsive Design",
        "Contact Form",
        "Social Media Links",
        "1 Month Support",
      ],
    },
    {
      name: "Business Website",
      price: "₹15,000",
      popular: true,
      features: [
        "10 Pages",
        "Custom Design",
        "SEO Optimization",
        "Contact Forms",
        "Google Analytics",
        "Blog Integration",
        "3 Months Support",
      ],
    },
    {
      name: "Enterprise Website",
      price: "₹25,000",
      features: [
        "Unlimited Pages",
        "Premium Design",
        "Advanced SEO",
        "E-commerce Ready",
        "Admin Dashboard",
        "Payment Integration",
        "6 Months Support",
      ],
    },
  ],
  additionalServices: [
    { name: "E-commerce Integration", price: "₹5,000" },
    { name: "Payment Gateway", price: "₹3,000" },
    { name: "Admin Dashboard", price: "₹4,000" },
    { name: "Blog System", price: "₹2,500" },
    { name: "Multi-language Support", price: "₹3,500" },
    { name: "Advanced SEO Package", price: "₹4,500" },
  ],
  maintenance: {
    basic: {
      price: "₹2,000",
      features: ["Updates", "Bug Fixes", "Backup"],
    },
    premium: {
      price: "₹5,000",
      features: [
        "Everything in Basic",
        "Content Updates",
        "Performance Optimization",
        "24/7 Support",
      ],
    },
  },
};
// name
const WebsiteService = () => {
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
          title={websiteData.title}
          description={websiteData.description}
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 sm:mb-10"
        >
          <span className="border border-white/30 text-white px-5 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-widest">
            Save up to 20% with annual plan
          </span>
        </motion.div>

        <GradientBox features={websiteData.whatsIncluded} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-none tracking-tight">
            Pricing
            <br />
            Plans
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {websiteData.plans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              popular={plan.popular}
              onGetStarted={() => navigate("/contact")}
            />
          ))}
        </motion.div>

        <AdditionalServices services={websiteData.additionalServices} />

        <div className="mt-6 sm:mt-8">
          <MaintenancePlans
            basic={websiteData.maintenance.basic}
            premium={websiteData.maintenance.premium}
          />
        </div>
      </div>
    </div>
  );
};

export default WebsiteService;
