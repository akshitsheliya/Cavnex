import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import ServiceCard from "../common/ServiceCard";
import { services } from "../../data/services";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-primary-900/5 to-dark-900 pointer-events-none" />

      <div className="max-w-7xl mx-auto container-padding relative">
        <div className="text-center mb-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 glass-effect rounded-full text-primary-400 text-sm font-semibold mb-4"
          >
            What We Offer
          </motion.span>
        </div>

        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive digital solutions tailored to your business needs"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.shortFeatures}
              link={service.link}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-gray-400 text-sm sm:text-base">
            Not sure which service is right for you?{" "}
            <a
              href="/contact"
              className="text-primary-400 hover:text-primary-300 font-semibold transition-colors"
            >
              Let's discuss your project
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
