import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import {
  SectionHeader,
  GradientBox,
  PricingCard,
  AdditionalServices,
  MaintenancePlans,
  containerVariants,
} from "./Servicecomponents";

const appData = {
  title: "App Development",
  description:
    "Native and cross-platform mobile applications for iOS and Android",
  whatsIncluded: [
    "Cross-Platform Development",
    "Native Performance",
    "Cloud Backend Integration",
    "Push Notifications",
    "Offline Functionality",
    "In-App Purchases",
    "User Authentication",
    "Real-time Updates",
    "App Store Deployment",
    "Analytics Integration",
  ],
  plans: [
    {
      name: "Basic App",
      price: "₹15,000",
      features: [
        "Single Platform",
        "5 Screens",
        "Basic Features",
        "Cloud Backend",
        "1 Month Support",
      ],
    },
    {
      name: "Professional App",
      price: "₹30,000",
      popular: true,
      features: [
        "Cross Platform",
        "15 Screens",
        "Advanced Features",
        "Push Notifications",
        "User Authentication",
        "Analytics",
        "3 Months Support",
      ],
    },
    {
      name: "Enterprise Website",
      price: "₹25,000",
      features: [
        "Cross Platform",
        "Unlimited Screens",
        "Premium Features",
        "Complete Backend",
        "Admin Dashboard",
        "Payment Gateway",
        "6 Months Support",
      ],
    },
  ],
  additionalServices: [
    { name: "Backend API Development", price: "₹8,000" },
    { name: "Admin Panel", price: "₹6,000" },
    { name: "Payment Integration", price: "₹5,000" },
    { name: "Social Login", price: "₹3,000" },
    { name: "Payment Integration", price: "₹7,000" },
    { name: "Maps Integration", price: "₹4,000" },
  ],
  maintenance: {
    basic: {
      price: "₹3,000",
      features: ["Updates", "Bug Fixes", "Server Maintenance"],
    },
    premium: {
      price: "₹7,000",
      features: [
        "Everything in Basic",
        "Feature Updates",
        "Performance Optimization",
        "Priority Support",
      ],
    },
  },
};

const AppDevelopment = () => {
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
          title={appData.title}
          description={appData.description}
        />

        <GradientBox features={appData.whatsIncluded} />

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
          {appData.plans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              popular={plan.popular}
              onGetStarted={() => navigate("/contact")}
            />
          ))}
        </motion.div>

        <AdditionalServices services={appData.additionalServices} />

        <div className="mt-6 sm:mt-8">
          <MaintenancePlans
            basic={appData.maintenance.basic}
            premium={appData.maintenance.premium}
          />
        </div>
      </div>
    </div>
  );
};

export default AppDevelopment;
