import { motion } from "framer-motion";

export default function UltraGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          x: [0, -30, 15, -20, 0],
          y: [0, 20, -15, 25, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-32 -right-32 sm:-bottom-40 sm:-right-40 lg:-bottom-48 lg:-right-48 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]"
        style={{
          background:
            "radial-gradient(circle at 70% 70%, rgba(59,130,246,0.4) 0%, rgba(99,102,241,0.2) 35%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <motion.div
        animate={{
          x: [0, 20, -10, 15, 0],
          y: [0, -15, 10, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
        className="absolute -bottom-20 -right-20 sm:-bottom-28 sm:-right-28 lg:-bottom-36 lg:-right-36 w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] lg:w-[350px] lg:h-[350px]"
        style={{
          background:
            "radial-gradient(circle at 60% 60%, rgba(16,185,129,0.35) 0%, rgba(52,211,153,0.15) 40%, transparent 70%)",
          filter: "blur(35px)",
        }}
      />
    </div>
  );
}
