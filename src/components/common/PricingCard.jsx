import { motion } from "framer-motion";
import { scaleIn } from "../../utils/animations";
import Button from "./Button";

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
      className={`card-gradient rounded-2xl p-8 shadow-xl relative ${
        popular ? "ring-2 ring-primary-500" : ""
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full text-sm font-semibold text-white">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-bold text-white mb-2">{plan}</h3>
      <div className="mb-6">
        <span className="text-5xl font-bold gradient-text">₹{price}</span>
        <span className="text-gray-400"> /project</span>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-gray-300">
            <span className="text-primary-400 mr-3 mt-1">✓</span>
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
