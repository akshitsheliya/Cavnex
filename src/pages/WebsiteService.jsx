import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInUp } from "../utils/animations";
import SectionTitle from "../components/common/SectionTitle";
import PricingCard from "../components/common/PricingCard";
import Button from "../components/common/Button";
import { HiCheck, HiArrowLeft } from "react-icons/hi";
import { services } from "../data/services";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function WebsiteService() {
  const service = services.find((s) => s.id === "website");
  const ServiceIcon = service.icon;

  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6 sm:mb-8"
        >
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors text-sm sm:text-base group"
          >
            <HiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
            <ServiceIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold gradient-text mb-4 sm:mb-6">
            {service.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            {service.description}
          </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="card-gradient rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
            What's Included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center text-gray-300 text-sm sm:text-base"
              >
                <HiCheck className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 mr-2 sm:mr-3 flex-shrink-0" />
                {feature}
              </div>
            ))}
          </div>
        </motion.div>

        <SectionTitle
          title="Pricing Plans"
          subtitle="Choose the perfect plan for your business"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16"
        >
          {service.pricing.map((plan, index) => (
            <PricingCard key={index} {...plan} link="/contact" />
          ))}
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="card-gradient rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
            {service.addons.map((addon, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 sm:p-4 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors"
              >
                <span className="text-gray-300 text-sm sm:text-base">
                  {addon.name}
                </span>
                <span className="text-primary-400 font-semibold text-sm sm:text-base">
                  +₹{addon.price.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="card-gradient rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
            Maintenance Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="p-4 sm:p-5 md:p-6 bg-dark-800 rounded-lg sm:rounded-xl">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Basic Maintenance
              </h3>
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-3 sm:mb-4">
                ₹{service.maintenance.basic.price}/
                {service.maintenance.basic.period}
              </div>
              <ul className="space-y-1.5 sm:space-y-2">
                {service.maintenance.basic.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-300 text-sm sm:text-base"
                  >
                    <HiCheck className="w-4 h-4 text-primary-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-br from-primary-900/20 to-purple-900/20 rounded-lg sm:rounded-xl border border-primary-500/30">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Premium Maintenance
                </h3>
                <span className="px-2 py-1 bg-primary-500/20 text-primary-400 text-xs font-semibold rounded-full">
                  Recommended
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-3 sm:mb-4">
                ₹{service.maintenance.premium.price}/
                {service.maintenance.premium.period}
              </div>
              <ul className="space-y-1.5 sm:space-y-2">
                {service.maintenance.premium.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-300 text-sm sm:text-base"
                  >
                    <HiCheck className="w-4 h-4 text-primary-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center card-gradient rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button to="/contact">Start Your Project</Button>
            <Button to="/#services" variant="secondary">
              View Other Services
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
