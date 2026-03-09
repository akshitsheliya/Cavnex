import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../utils/animations";
import SectionTitle from "../common/SectionTitle";

export default function ValueSection() {
  const values = [
    {
      icon: "⚡",
      title: "Fast Delivery",
      description:
        "Get your project delivered on time, every time. We value your deadlines as much as you do.",
    },
    {
      icon: "🎨",
      title: "Modern Design",
      description:
        "Beautiful, contemporary designs that captivate your audience and enhance user experience.",
    },
    {
      icon: "🔍",
      title: "SEO Friendly",
      description:
        "Built with search engine optimization in mind to help you rank higher on Google.",
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      description:
        "Premium quality at competitive prices. Get the best value for your investment.",
    },
    {
      icon: "📱",
      title: "Responsive",
      description:
        "Perfect experience on all devices - desktop, tablet, and mobile. Fully responsive designs.",
    },
    {
      icon: "🛡️",
      title: "Secure & Reliable",
      description:
        "Built with security best practices and reliable hosting for peace of mind.",
    },
  ];

  return (
    <section className="py-24 bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Why Choose CavNex Studio?"
          subtitle="We deliver excellence in every project with our core values and commitment to quality"
          gradient
        />

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="card-gradient rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
