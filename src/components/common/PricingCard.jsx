import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HiCheck } from "react-icons/hi";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

export default function PricingCard({
  id,
  plan,
  price,
  features,
  popular = false,
  link,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link.startsWith("/services/")) {
      navigate(link, { state: { fromPricing: true, pricingId: id } });
    } else {
      navigate(link);
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className={`card-gradient rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl relative hover:-translate-y-2 transition-all duration-300 will-change-transform ${
        popular ? "ring-2 ring-primary-500" : ""
      }`}
    >
      {popular && (
        <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full text-xs sm:text-sm font-semibold text-white whitespace-nowrap">
          Most Popular
        </div>
      )}

      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan}</h3>
      <div className="mb-4 sm:mb-6">
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
          ₹{price}
        </span>
        <span className="text-gray-400 text-sm sm:text-base"> /project</span>
      </div>

      <ul className="space-y-2 sm:space-y-3 md:space-y-4 mb-6 sm:mb-8">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start text-gray-300 text-sm sm:text-base"
          >
            <HiCheck className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleClick}
        className={`w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 active:scale-95 ${
          popular
            ? "bg-gradient-to-r from-primary-600 to-blue-600 text-white shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40"
            : "glass-effect text-white hover:bg-white/10"
        }`}
      >
        Get Started
      </button>
    </motion.div>
  );
}
