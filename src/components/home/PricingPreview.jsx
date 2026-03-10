import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import PricingCard from "../common/PricingCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function PricingPreview() {
  const pricing = [
    {
      id: "website",
      plan: "Website",
      price: "8,000",
      features: [
        "Responsive Design",
        "5-10 Pages",
        "SEO Optimized",
        "Contact Forms",
        "1 Month Support",
      ],
      link: "/services/website",
    },
    {
      id: "app",
      plan: "Mobile App",
      price: "15,000",
      popular: true,
      features: [
        "Cross Platform",
        "Modern UI/UX",
        "Cloud Backend",
        "Push Notifications",
        "3 Months Support",
      ],
      link: "/services/app",
    },
    {
      id: "combo",
      plan: "Combo Package",
      price: "20,000",
      features: [
        "Website + App",
        "Unified Design",
        "Complete Solution",
        "Best Value",
        "6 Months Support",
      ],
      link: "/services/combo",
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-dark-800/50">
      <div className="max-w-7xl mx-auto container-padding">
        <SectionTitle
          title="Simple, Transparent Pricing"
          subtitle="Choose the perfect plan for your business needs"
          gradient
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {pricing.map((plan) => (
            <div key={plan.id} id={`pricing-${plan.id}`}>
              <PricingCard {...plan} />
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-400 text-sm sm:text-base mt-8 sm:mt-12 px-4"
        >
          All prices are starting prices. Final cost depends on project
          complexity and requirements.
        </motion.p>
      </div>
    </section>
  );
}
