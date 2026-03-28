import { motion } from "framer-motion";
import UltraGlow from "../common/FloatingGlow";

const stats = [
  { count: "5+", label: "UI/UX Designers" },
  { count: "6+", label: "Backend Developers" },
  { count: "8+", label: "Frontend Developers" },
  { count: "4+", label: "Mobile Developers" },
];

export default function Community() {
  return (
    <section className="relative bg-black overflow-hidden py-14 sm:py-20 px-4 sm:px-8 lg:px-16">
      <UltraGlow />

      <div className="relative max-w-7xl mx-auto">
        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white leading-tight relative z-10 max-w-sm sm:max-w-none"
          >
            Our
            <br />
            Developer
            <br />
            Community
          </motion.h2>

          <div className="relative z-10 mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7 sm:gap-y-14">
            {[stats[0], stats[1], stats[2], stats[3]].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={i === 1 || i === 3 ? "ml-auto sm:ml-0" : ""}
              >
                <p className="text-white text-2xl sm:text-3xl font-bold mb-0.5">
                  {s.count}
                </p>
                <p className="text-gray-400 text-sm sm:text-2xl">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
