import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import SectionTitle from "../components/common/SectionTitle";
import PricingCard from "../components/common/PricingCard";
import Button from "../components/common/Button";
import { services } from "../data/services";

export default function ComboService() {
  const service = services.find((s) => s.id === "combo");

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <div className="text-7xl mb-6">{service.icon}</div>
          <h1 className="text-5xl font-display font-bold gradient-text mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {service.description}
          </p>
          <div className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full text-white font-semibold">
            🎉 Save up to 30% with Combo Package
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="card-gradient rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Complete Package Includes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <span className="text-primary-400 mr-3 text-xl">✓</span>
                {feature}
              </div>
            ))}
          </div>
        </motion.div>

        <SectionTitle
          title="Combo Packages"
          subtitle="Get the best value with our all-inclusive packages"
        />

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {service.pricing.map((plan, index) => (
            <PricingCard key={index} {...plan} link="/contact" />
          ))}
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="card-gradient rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Premium Add-ons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.addons.map((addon, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 bg-dark-800 rounded-lg"
              >
                <span className="text-gray-300">{addon.name}</span>
                <span className="text-primary-400 font-semibold">
                  +₹{addon.price}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="card-gradient rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Maintenance Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-dark-800 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Basic Maintenance
              </h3>
              <div className="text-3xl font-bold gradient-text mb-4">
                ₹{service.maintenance.basic.price}/
                {service.maintenance.basic.period}
              </div>
              <ul className="space-y-2">
                {service.maintenance.basic.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="text-primary-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-primary-900/20 to-purple-900/20 rounded-xl border border-primary-500/30">
              <h3 className="text-xl font-bold text-white mb-2">
                Premium Maintenance
              </h3>
              <div className="text-3xl font-bold gradient-text mb-4">
                ₹{service.maintenance.premium.price}/
                {service.maintenance.premium.period}
              </div>
              <ul className="space-y-2">
                {service.maintenance.premium.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="text-primary-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeInUp} className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Get the Complete Solution Today
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Transform your business with our all-in-one website and app package
          </p>
          <Button to="/contact">Get Started Now</Button>
        </motion.div>
      </div>
    </div>
  );
}
