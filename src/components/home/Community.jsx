import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../utils/animations";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import {
  HiColorSwatch,
  HiCode,
  HiServer,
  HiDeviceMobile,
} from "react-icons/hi";

export default function Community() {
  const team = [
    {
      role: "UI/UX Designers",
      icon: HiColorSwatch,
      count: "5+",
      description: "Creative minds crafting beautiful interfaces",
    },
    {
      role: "Frontend Developers",
      icon: HiCode,
      count: "8+",
      description: "Building responsive and interactive experiences",
    },
    {
      role: "Backend Developers",
      icon: HiServer,
      count: "6+",
      description: "Creating robust and scalable solutions",
    },
    {
      role: "Mobile Developers",
      icon: HiDeviceMobile,
      count: "4+",
      description: "Developing native and cross-platform apps",
    },
  ];

  return (
    <section className="section-padding bg-dark-800/50">
      <div className="max-w-7xl mx-auto container-padding">
        <SectionTitle
          title="Our Developer Community"
          subtitle="A talented team of experts dedicated to bringing your vision to life"
          gradient
        />

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              whileHover={{ y: -10 }}
              className="card-gradient rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <member.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">
                {member.count}
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3">
                {member.role}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                {member.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button to="/community">Meet Our Team</Button>
        </motion.div>
      </div>
    </section>
  );
}
