import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
} from "../../utils/animations";
import SectionTitle from "../common/SectionTitle";

export default function WorkProcess() {
  const steps = [
    {
      number: "01",
      title: "Requirement Discussion",
      description:
        "We start by understanding your business needs, goals, and target audience to create a perfect strategy.",
      icon: "💬",
    },
    {
      number: "02",
      title: "Design & Development",
      description:
        "Our team designs beautiful interfaces and develops robust solutions using modern technologies.",
      icon: "🎨",
    },
    {
      number: "03",
      title: "Testing",
      description:
        "Rigorous testing across devices and browsers to ensure flawless performance and user experience.",
      icon: "🔍",
    },
    {
      number: "04",
      title: "Final Delivery",
      description:
        "Launch your project with full support, training, and documentation for a smooth handover.",
      icon: "🚀",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Work Process"
          subtitle="A streamlined approach to deliver exceptional results on time"
        />

        <motion.div {...staggerContainer} className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              {...(index % 2 === 0 ? fadeInLeft : fadeInRight)}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8`}
            >
              <div className="flex-1 card-gradient rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl">{step.icon}</span>
                  <span className="text-6xl font-bold text-primary-500/20">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.description}</p>
              </div>

              <div className="hidden md:block">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="w-16 h-16 bg-gradient-to-br from-primary-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary-500/30"
                >
                  {index + 1}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
