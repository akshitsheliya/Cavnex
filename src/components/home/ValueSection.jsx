import { motion } from "framer-motion";
import Vector_infinite from "../../assets/Vector_infinite.svg";
import UltraGlow from "../common/FloatingGlow";

export default function ValueSection() {
  const values = [
    {
      number: "01",
      title: "Fast Delivery",
      description:
        "Get your project delivered on time, every time. We value your deadlines as much as you do.",
    },
    {
      number: "02",
      title: "Modern Design",
      description:
        "Beautiful, contemporary designs that captivate your audience and enhance user experience.",
    },
    {
      number: "03",
      title: "SEO Friendly",
      description:
        "Built with search engine optimization in mind to help you rank higher on Google.",
    },
    {
      number: "04",
      title: "Affordable Pricing",
      description:
        "Premium quality at competitive prices. Get the best value for your investment.",
    },
    {
      number: "05",
      title: "Responsive",
      description:
        "Perfect experience on all devices - desktop, tablet, and mobile. Fully responsive designs.",
    },
    {
      number: "06",
      title: "Secure & Reliable",
      description:
        "Built with security best practices and reliable hosting for peace of mind.",
    },
  ];

  return (
    <section className="relative  ">
      <div className="max-w-7xl mx-auto  px-5 sm:px-6 md:px-8 lg:px-10 pb-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-start sm:gap-8 mb-10 sm:mb-14"
        >
          <div className="flex-shrink-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white whitespace-nowrap">
              Why Choose Cavnex info Tech?
            </h2>
          </div>
          <div className="hidden sm:block flex-1 mt-4">
            <div className="h-px bg-gray-700 w-full mt-3" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-gray-400 text-sm sm:text-base max-w-2xl mb-12 sm:mb-16 md:mb-20 leading-relaxed"
        >
          We deliver excellence in every project with
          <br className="hidden sm:block" />
          our core values and commitment to quality
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-12 md:gap-y-14 gap-x-6 sm:gap-x-8 lg:gap-x-12 pb-16 sm:pb-20 md:pb-24">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              className="flex items-start gap-4 sm:gap-5"
            >
              <span
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-none flex-shrink-0"
                style={{ fontFamily: "sans-serif", letterSpacing: "-0.03em" }}
              >
                {item.number}
              </span>
              <div className="pt-0.5 sm:pt-1">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative ">
        <UltraGlow />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                What is Cavnex?
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg">
                Cavnex is a forward-thinking software company dedicated to
                building innovative digital solutions for modern businesses. We
                specialize in developing reliable, scalable, and user-friendly
                software tailored to client needs. Our mission is to turn ideas
                into powerful technology that drives growth and efficiency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-full max-w-[280px] sm:max-w-[380px] md:max-w-[460px] lg:max-w-[520px]">
                <img
                  src={Vector_infinite}
                  alt=""
                  className="w-full h-auto select-none pointer-events-none"
                  draggable={false}
                />

                <div className="absolute left-[6%] sm:left-[8%] top-1/2 -translate-y-1/2 text-center">
                  <p className="text-gray-400 text-[10px] sm:text-sm md:text-base lg:text-xl font-light leading-snug">
                    Innovation Driven
                    <br />
                    Development
                  </p>
                </div>

                <div className="absolute right-[8%] sm:right-[10%] top-1/2 -translate-y-1/2 text-center">
                  <p className="text-gray-400 text-[10px] sm:text-sm md:text-base lg:text-xl font-light leading-snug">
                    Turning Ideas
                    <br />
                    into Tech
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
