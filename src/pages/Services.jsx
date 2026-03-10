import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "../components/common/SectionTitle";
import { services } from "../data/services";
import { HiCheck, HiArrowRight } from "react-icons/hi";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 glass-effect rounded-full text-primary-400 text-sm font-semibold mb-4"
          >
            What We Offer
          </motion.span>
        </div>

        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive digital solutions tailored to your business needs. We offer end-to-end development services to help your business grow."
          gradient
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 sm:space-y-12 mb-16 sm:mb-20"
        >
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <motion.div
                key={service.id}
                id={`service-${service.id}`}
                variants={cardVariants}
                className={`card-gradient rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 overflow-hidden relative ${
                  index === 1 ? "ring-2 ring-primary-500/50" : ""
                }`}
              >
                {index === 1 && (
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 px-3 py-1 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full text-xs sm:text-sm font-semibold text-white">
                    Most Popular
                  </div>
                )}

                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500/10 to-purple-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

                <div className="relative">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                        <ServiceIcon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-400" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                        {service.title}
                      </h2>
                      <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 max-w-3xl">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8">
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-gray-300 text-sm sm:text-base"
                          >
                            <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center mr-2 flex-shrink-0">
                              <HiCheck className="w-3 h-3 text-primary-400" />
                            </div>
                            {feature}
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
                        <div className="glass-effect rounded-xl p-4 sm:p-5 flex-1">
                          <div className="text-xs sm:text-sm text-gray-400 mb-1">
                            Starting from
                          </div>
                          <div className="text-2xl sm:text-3xl font-bold gradient-text">
                            ₹{service.pricing[0].price}
                          </div>
                        </div>
                        <div className="glass-effect rounded-xl p-4 sm:p-5 flex-1">
                          <div className="text-xs sm:text-sm text-gray-400 mb-1">
                            Delivery Time
                          </div>
                          <div className="text-lg sm:text-xl font-bold text-white">
                            {service.id === "website"
                              ? "2-4 Weeks"
                              : service.id === "app"
                                ? "4-8 Weeks"
                                : "6-10 Weeks"}
                          </div>
                        </div>
                        <div className="glass-effect rounded-xl p-4 sm:p-5 flex-1">
                          <div className="text-xs sm:text-sm text-gray-400 mb-1">
                            Support
                          </div>
                          <div className="text-lg sm:text-xl font-bold text-white">
                            {service.id === "website"
                              ? "1-6 Months"
                              : service.id === "app"
                                ? "1-6 Months"
                                : "2-12 Months"}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Link to={service.link} className="flex-1 sm:flex-none">
                          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-blue-600 rounded-full font-semibold text-white text-sm sm:text-base shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                            View Details
                            <HiArrowRight className="w-4 h-4" />
                          </button>
                        </Link>
                        <Link to="/contact" className="flex-1 sm:flex-none">
                          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 glass-effect rounded-full font-semibold text-white text-sm sm:text-base hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95">
                            Get Quote
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
            Compare Our Plans
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium text-sm sm:text-base">
                    Features
                  </th>
                  {services.map((service) => (
                    <th
                      key={service.id}
                      className="text-center py-4 px-4 text-white font-semibold text-sm sm:text-base"
                    >
                      {service.title.split(" ")[0]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Responsive Design",
                    website: true,
                    app: true,
                    combo: true,
                  },
                  {
                    feature: "SEO Optimization",
                    website: true,
                    app: false,
                    combo: true,
                  },
                  {
                    feature: "Cross Platform",
                    website: false,
                    app: true,
                    combo: true,
                  },
                  {
                    feature: "Push Notifications",
                    website: false,
                    app: true,
                    combo: true,
                  },
                  {
                    feature: "Admin Dashboard",
                    website: "Add-on",
                    app: "Add-on",
                    combo: true,
                  },
                  {
                    feature: "Payment Integration",
                    website: "Add-on",
                    app: "Add-on",
                    combo: true,
                  },
                  {
                    feature: "Cloud Backend",
                    website: false,
                    app: true,
                    combo: true,
                  },
                  {
                    feature: "Analytics",
                    website: true,
                    app: true,
                    combo: true,
                  },
                  {
                    feature: "Maintenance Support",
                    website: true,
                    app: true,
                    combo: true,
                  },
                  {
                    feature: "Priority Support",
                    website: false,
                    app: false,
                    combo: true,
                  },
                ].map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-3 sm:py-4 px-4 text-gray-300 text-sm sm:text-base">
                      {row.feature}
                    </td>
                    <td className="py-3 sm:py-4 px-4 text-center">
                      {row.website === true ? (
                        <HiCheck className="w-5 h-5 text-green-400 mx-auto" />
                      ) : row.website === false ? (
                        <span className="text-gray-500">—</span>
                      ) : (
                        <span className="text-xs sm:text-sm text-primary-400">
                          {row.website}
                        </span>
                      )}
                    </td>
                    <td className="py-3 sm:py-4 px-4 text-center">
                      {row.app === true ? (
                        <HiCheck className="w-5 h-5 text-green-400 mx-auto" />
                      ) : row.app === false ? (
                        <span className="text-gray-500">—</span>
                      ) : (
                        <span className="text-xs sm:text-sm text-primary-400">
                          {row.app}
                        </span>
                      )}
                    </td>
                    <td className="py-3 sm:py-4 px-4 text-center">
                      {row.combo === true ? (
                        <HiCheck className="w-5 h-5 text-green-400 mx-auto" />
                      ) : row.combo === false ? (
                        <span className="text-gray-500">—</span>
                      ) : (
                        <span className="text-xs sm:text-sm text-primary-400">
                          {row.combo}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
            Our Development Process
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We understand your requirements, goals, and target audience",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "Creating wireframes and visual designs for your approval",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Building your solution with clean, efficient code",
              },
              {
                step: "04",
                title: "Delivery",
                description:
                  "Testing, deployment, and handover with full support",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-gradient rounded-xl p-5 sm:p-6 text-center relative overflow-hidden group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="text-4xl sm:text-5xl font-bold text-primary-500/20 mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "How long does it take to complete a project?",
                a: "Website projects typically take 2-4 weeks, mobile apps 4-8 weeks, and combo packages 6-10 weeks depending on complexity.",
              },
              {
                q: "Do you provide source code?",
                a: "Yes, you get complete ownership of the source code upon project completion and final payment.",
              },
              {
                q: "What technologies do you use?",
                a: "We use modern technologies like React, Next.js, Node.js, React Native, Flutter, and more based on project requirements.",
              },
              {
                q: "Do you offer maintenance after delivery?",
                a: "Yes, we offer flexible maintenance packages starting from ₹2,000/month to keep your project updated and secure.",
              },
              {
                q: "Can I request changes during development?",
                a: "Absolutely! We follow an agile approach with regular updates and feedback sessions throughout the development process.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept bank transfers, UPI, and online payments. We typically work with 50% advance and 50% on delivery.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card-gradient rounded-xl p-5 sm:p-6"
              >
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center card-gradient rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-purple-600/10" />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create something amazing
              together. Get a free consultation and quote today!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/contact">
                <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-600 to-blue-600 rounded-full font-semibold text-white shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-300 hover:scale-105 active:scale-95">
                  Get Free Quote
                </button>
              </Link>
              <a
                href="https://wa.me/918799263376"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full sm:w-auto px-8 py-4 glass-effect rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95">
                  Chat on WhatsApp
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
