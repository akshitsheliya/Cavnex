import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import {
  HiLightningBolt,
  HiColorSwatch,
  HiSearch,
  HiCurrencyRupee,
  HiDeviceMobile,
  HiShieldCheck,
} from "react-icons/hi";

export default function ValueSection() {
  const values = [
    {
      icon: HiLightningBolt,
      title: "Fast Delivery",
      description:
        "Get your project delivered on time, every time. We value your deadlines as much as you do.",
    },
    {
      icon: HiColorSwatch,
      title: "Modern Design",
      description:
        "Beautiful, contemporary designs that captivate your audience and enhance user experience.",
    },
    {
      icon: HiSearch,
      title: "SEO Friendly",
      description:
        "Built with search engine optimization in mind to help you rank higher on Google.",
    },
    {
      icon: HiCurrencyRupee,
      title: "Affordable Pricing",
      description:
        "Premium quality at competitive prices. Get the best value for your investment.",
    },
    {
      icon: HiDeviceMobile,
      title: "Responsive",
      description:
        "Perfect experience on all devices - desktop, tablet, and mobile. Fully responsive designs.",
    },
    {
      icon: HiShieldCheck,
      title: "Secure & Reliable",
      description:
        "Built with security best practices and reliable hosting for peace of mind.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="section-padding bg-dark-800/50">
      <div className="max-w-7xl mx-auto container-padding">
        <SectionTitle
          title="Why Choose CavNex Studio?"
          subtitle="We deliver excellence in every project with our core values and commitment to quality"
          gradient
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="card-gradient rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 will-change-transform"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                {value.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
