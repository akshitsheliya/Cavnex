import { motion } from "framer-motion";
import { scaleIn } from "../../utils/animations";
import Button from "./Button";
import { HiCheck } from "react-icons/hi";

export default function PricingCard({
  plan,
  price,
  features,
  popular = false,
  link,
}) {
  return (
    <motion.div
      {...scaleIn}
      className={`card-gradient rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl relative ${
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

      <Button
        to={link}
        variant={popular ? "primary" : "secondary"}
        className="w-full"
      >
        Get Started
      </Button>
    </motion.div>
  );
}
