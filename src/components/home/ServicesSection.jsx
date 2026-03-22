import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiCheck } from "react-icons/hi";

const plans = [
  {
    name: "Website",
    price: "8,000",
    popular: false,
    features: [
      "Responsive Design",
      "5-10 Pages",
      "SEO Optimized",
      "Contact Forms",
      "1 Month Support",
    ],
    link: "/services/website",
  },
  {
    name: "Application",
    price: "15,000",
    popular: true,
    features: [
      "Cross Platform",
      "Modern UI/UX",
      "Cloud Backend",
      "Push Notifications",
      "3 Months Support",
    ],
    link: "/services/app",
  },
  {
    name: "Combo Package",
    price: "20,000",
    popular: false,
    features: [
      "Website + App",
      "Website + App",
      "Complete Solution",
      "Best Value",
      "6 Months Support",
    ],
    link: "/services/combo",
  },
];

export default function PricingPreview() {
  return (
    <section className="bg-black py-14 sm:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-center sm:gap-8 mb-6 sm:mb-8"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white whitespace-nowrap flex-shrink-0">
            Simple, Transparent Pricing
          </h2>
          <div className="hidden sm:block flex-1">
            <div className="h-px bg-gray-700 w-full" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-sm sm:text-base mb-10 sm:mb-14 max-w-xs leading-relaxed"
        >
          Choose the perfect plan for your business needs
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl p-6 flex flex-col"
              style={{ marginTop: plan.popular ? 0 : 0 }}
            >
              {plan.popular ? (
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(#0d0d0d, #0d0d0d) padding-box, linear-gradient(180deg, #a855f7 0%, #ec4899 100%) border-box",
                    border: "1.5px solid transparent",
                  }}
                />
              ) : (
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    border: "1.5px solid rgba(255,255,255,0.12)",
                    background: "#0d0d0d",
                  }}
                />
              )}

              {!plan.popular && (
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{ background: "#0d0d0d" }}
                />
              )}

              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span
                    className="px-5 py-1.5 rounded-full text-white text-xs font-normal"
                    style={{
                      background:
                        "linear-gradient(90deg, #D95DB0 0%, #3344DC 100%)",
                    }}
                  >
                    Most Popular
                  </span>
                </div>
              )}

              <div className="relative z-10">
                <h3 className="text-white font-semibold text-xl sm:text-3xl my-3">
                  {plan.name}
                </h3>

                <div className="flex items-end gap-1 my-6">
                  <span className="text-white text-3xl sm:text-5xl font-bold leading-none">
                    ₹{plan.price}
                  </span>
                  <span className="text-gray-400 text-xs mb-1">/project</span>
                </div>

                <ul className="space-y-5 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5">
                      <HiCheck className="w-4 h-4 text-white flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link to={plan.link}>
                  <button
                    className="w-full py-3 mb-6 rounded-full font-bold text-sm tracking-widest transition-all duration-200 hover:opacity-90 active:scale-95"
                    style={
                      plan.popular
                        ? {
                            background:
                              "linear-gradient(90deg, #D95DB0 0%, #3344DC 100%)",
                            color: "#fff",
                          }
                        : {
                            background: "#ffffff",
                            color: "#000000",
                          }
                    }
                  >
                    GET STARTED
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
