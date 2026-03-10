import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../utils/animations";
import SectionTitle from "../common/SectionTitle";
import {
  HiChatBubbleLeftRight,
  HiPaintBrush,
  HiMagnifyingGlass,
  HiRocketLaunch,
} from "react-icons/hi2";

export default function WorkProcess() {
  const steps = [
    {
      number: "01",
      title: "Requirement Discussion",
      description:
        "We start by understanding your business needs, goals, and target audience to create a perfect strategy.",
      icon: HiChatBubbleLeftRight,
    },
    {
      number: "02",
      title: "Design & Development",
      description:
        "Our team designs beautiful interfaces and develops robust solutions using modern technologies.",
      icon: HiPaintBrush,
    },
    {
      number: "03",
      title: "Testing",
      description:
        "Rigorous testing across devices and browsers to ensure flawless performance and user experience.",
      icon: HiMagnifyingGlass,
    },
    {
      number: "04",
      title: "Final Delivery",
      description:
        "Launch your project with full support, training, and documentation for a smooth handover.",
      icon: HiRocketLaunch,
    },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <SectionTitle
          title="Our Work Process"
          subtitle="A streamlined approach to deliver exceptional results on time"
        />

        <motion.div
          {...staggerContainer}
          className="space-y-4 sm:space-y-6 md:space-y-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              className="flex flex-col md:flex-row items-center gap-4 md:gap-8"
            >
              <div className="hidden md:flex items-center justify-center w-16">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary-500/30"
                >
                  {index + 1}
                </motion.div>
              </div>

              <div className="flex-1 w-full card-gradient rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                      <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-500/20">
                        {step.number}
                      </span>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
