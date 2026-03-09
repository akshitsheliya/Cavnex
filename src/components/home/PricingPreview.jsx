import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/animations";
import SectionTitle from "../common/SectionTitle";
import PricingCard from "../common/PricingCard";

export default function PricingPreview() {
  const pricing = [
    {
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
    <section className="py-24 bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Simple, Transparent Pricing"
          subtitle="Choose the perfect plan for your business needs"
          gradient
        />

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {pricing.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-400 mt-12"
        >
          All prices are starting prices. Final cost depends on project
          complexity and requirements.
        </motion.p>
      </div>
    </section>
  );
}
