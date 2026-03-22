// import { motion } from "framer-motion";

// export default function UltraGlow() {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {/* TOP GREEN BLOB */}
//       <motion.div
//         animate={{
//           x: [0, 40, -20, 0],
//           y: [0, -30, 20, 0],
//           scale: [1, 1.1, 0.95, 1],
//         }}
//         transition={{
//           duration: 18,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute top-[10%] left-[25%] w-[500px] h-[500px]"
//         style={{
//           background:
//             "radial-gradient(circle at 40% 40%, #34F5C5 0%, #2EE6A6 40%, rgba(46,230,166,0.6) 60%, transparent 75%)",
//           filter: "blur(80px)",
//         }}
//       />

//       {/* BOTTOM BLUE BLOB */}
//       <motion.div
//         animate={{
//           x: [0, -30, 20, 0],
//           y: [0, 30, -20, 0],
//           scale: [1, 1.15, 0.9, 1],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute bottom-[5%] right-[20%] w-[520px] h-[520px]"
//         style={{
//           background:
//             "radial-gradient(circle at 60% 60%, #3B82F6 0%, #4F46E5 45%, rgba(79,70,229,0.6) 65%, transparent 80%)",
//           filter: "blur(90px)",
//         }}
//       />

//       {/* EDGE GLOW (grain / neon outline feel) */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "radial-gradient(circle at 50% 50%, rgba(0,255,200,0.15), transparent 60%)",
//           mixBlendMode: "screen",
//         }}
//       />

//       {/* EXTRA NOISE TEXTURE */}
//       <div
//         className="absolute inset-0 opacity-[0.15]"
//         style={{
//           backgroundImage:
//             "url('https://grainy-gradients.vercel.app/noise.svg')",
//         }}
//       />
//     </div>
//   );
// }

import { motion } from "framer-motion";

export default function UltraGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          x: [0, -30, 15, -20, 0],
          y: [0, 20, -15, 25, 0],
          scale: [1, 1.08, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-32 -right-32 sm:-bottom-40 sm:-right-40 lg:-bottom-48 lg:-right-48 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]"
        style={{
          background:
            "radial-gradient(circle at 70% 70%, rgba(59,130,246,0.6) 0%, rgba(99,102,241,0.4) 35%, rgba(139,92,246,0.2) 55%, transparent 75%)",
          filter: "blur(60px)",
          borderRadius: "50%",
        }}
      />

      <motion.div
        animate={{
          x: [0, 20, -10, 15, 0],
          y: [0, -15, 10, -20, 0],
          scale: [1, 0.92, 1.1, 0.97, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-20 -right-20 sm:-bottom-28 sm:-right-28 lg:-bottom-36 lg:-right-36 w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] lg:w-[350px] lg:h-[350px]"
        style={{
          background:
            "radial-gradient(circle at 60% 60%, rgba(16,185,129,0.5) 0%, rgba(52,211,153,0.3) 40%, transparent 70%)",
          filter: "blur(50px)",
          borderRadius: "50%",
        }}
      />

      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.35, 0.45, 0.3],
          scale: [1, 1.05, 0.98, 1.02, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -bottom-16 -right-16 sm:-bottom-24 sm:-right-24 lg:-bottom-32 lg:-right-32 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.45) 0%, rgba(139,92,246,0.25) 50%, transparent 75%)",
          filter: "blur(45px)",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}
