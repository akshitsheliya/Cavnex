import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/animations";
import SectionTitle from "../common/SectionTitle";
import ServiceCard from "../common/ServiceCard";
import { services } from "../../data/services";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive digital solutions tailored to your business needs"
        />

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
      </div>
    </section>
  );
}
