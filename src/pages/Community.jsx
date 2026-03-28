import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ui from "../assets/community/ui.png";
import backend from "../assets/community/be.png";
import mobile from "../assets/community/mobile.png";
import frontend from "../assets/community/fe.png";
import arrow from "../assets/community/arrow.svg";
import gredfull from "../assets/gredfull.svg";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import ak from "../assets/ak.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const teams = [
  {
    count: "5+",
    title: "UI/UX Designers",
    description:
      "Our design team crafts beautiful and intuitive user experiences",
    skills: [
      "Creative Design",
      "User Research",
      "Prototyping",
      "Visual Design",
    ],
    icon: <img src={ui} alt="UI/UX Designers" className="w-full h-full" />,
  },
  {
    count: "8+",
    title: "Frontend Developers",
    description: "Building responsive and interactive user interfaces",
    skills: [
      "React Specialists",
      "Vue Experts",
      "Angular Developers",
      "UI Engineers",
    ],
    icon: (
      <img src={frontend} alt="Frontend Developers" className="w-full h-full" />
    ),
  },
  {
    count: "6+",
    title: "Backend Developers",
    description: "Creating robust and scalable server-side solutions",
    skills: [
      "Node.js Experts",
      "Python Developers",
      "Database Architects",
      "API Specialists",
    ],
    icon: (
      <img src={backend} alt="Backend Developers" className="w-full h-full" />
    ),
  },
  {
    count: "4+",
    title: "Mobile Developers",
    description: "Developing native and cross-platform mobile applications",
    skills: ["React Native", "Flutter", "iOS Native", "Android Native"],
    icon: (
      <img src={mobile} alt="Mobile Developers" className="w-full h-full" />
    ),
  },
];

const technologies = [
  {
    name: "React",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-6 h-6 xs:w-7 xs:h-7 sm:w-10 sm:h-10"
      >
        <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke="#61DAFB"
          strokeWidth="1.2"
          fill="none"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke="#61DAFB"
          strokeWidth="1.2"
          fill="none"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke="#61DAFB"
          strokeWidth="1.2"
          fill="none"
          transform="rotate(120 12 12)"
        />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 xs:w-7 xs:h-7 sm:w-10 sm:h-10"
      >
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="#3C873A" />
        <text x="6" y="15" fontSize="6" fill="white" fontWeight="bold">
          JS
        </text>
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 xs:w-7 xs:h-7 sm:w-10 sm:h-10"
      >
        <path
          d="M12 2C8 2 7 4 7 6v2h5v1H5C3 9 2 10 2 12s1 3 3 4l1-2c-1 0-2-.5-2-2s1-2 2-2h7V8c0-2 1-4 4-4s4 2 4 4v4c0 2-2 3-4 3h-1v2h1c3 0 5-2 5-5V8c0-4-3-6-10-6z"
          fill="#3572A5"
        />
        <path
          d="M12 22c4 0 5-2 5-4v-2h-5v-1h7c2 0 3-1 3-3s-1-3-3-4l-1 2c1 0 2 .5 2 2s-1 2-2 2h-7v2c0 2-1 4-4 4s-4-2-4-4v-4c0-2 2-3 4-3h1v-2h-1c-3 0-5 2-5 5v4c0 4 3 6 10 6z"
          fill="#FFD43B"
        />
      </svg>
    ),
  },
  {
    name: "Flutter",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 xs:w-7 xs:h-7 sm:w-10 sm:h-10"
      >
        <path d="M14 2L4 12l3 3 10-10-3-3z" fill="#54C5F8" />
        <path d="M4 12l10 10 3-3-7-7-3 3-3-3z" fill="#01579B" />
        <path d="M14 19l-3-3 3-3 3 3-3 3z" fill="#29B6F6" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 xs:w-7 xs:h-7 sm:w-10 sm:h-10"
      >
        <circle cx="12" cy="12" r="10" fill="white" />
        <path
          d="M8 8v8l8-8v8"
          stroke="black"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 xs:w-7 xs:h-7 sm:w-10 sm:h-10"
      >
        <path
          d="M12 2c-1 4-4 6-4 10a4 4 0 008 0c0-4-3-6-4-10z"
          fill="#4DB33D"
        />
        <path
          d="M12 18v4"
          stroke="#4DB33D"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 xs:w-7 xs:h-7 sm:w-10 sm:h-10"
      >
        <ellipse
          cx="12"
          cy="8"
          rx="7"
          ry="4"
          stroke="#336791"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M5 8v8c0 2.2 3.1 4 7 4s7-1.8 7-4V8"
          stroke="#336791"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M5 12c0 2.2 3.1 4 7 4s7-1.8 7-4"
          stroke="#336791"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    name: "AWS",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 xs:w-7 xs:h-7 sm:w-10 sm:h-10"
      >
        <path
          d="M6 14c-2 0-3-1-3-2s1-2 2-2c0-2 1.5-3.5 3.5-3.5.5 0 1 .1 1.4.3C10.4 5.4 11.6 4.5 13 4.5c2.2 0 4 1.8 4 4 0 .2 0 .4-.1.6C18 9.4 19 10.5 19 12c0 1.7-1.3 3-3 3"
          stroke="#FF9900"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M9 17l-2 2 2 2M15 17l2 2-2 2"
          stroke="#FF9900"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
];

const teamMembers = [
  {
    name: "Akshit Sheliya",
    role: "CTO (Chief Technology Officer)",
    image: ak,
  },
  {
    name: "Harshil Lakhani",
    role: "CEO (Chief Executive Officer)",
    image: null,
  },
  {
    name: "Megh Patel",
    role: "CPO (Chief Product Officer)",
    image: null,
  },
];

const Community = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen bg-black text-white py-8 xs:py-10 sm:py-16 md:py-20 px-4 xs:px-5 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-6 xs:mb-8 sm:mb-10"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:gap-8 mb-3 xs:mb-4">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-shrink-0"
              >
                <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-light whitespace-nowrap mb-3 xs:mb-4 sm:mb-6">
                  Our Developer Community
                </h1>
              </motion.div>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden sm:block flex-1 mt-2 origin-left"
              >
                <div className="h-px bg-gray-700 w-full mt-3" />
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-sm xs:text-base sm:text-lg"
            >
              Meet the talented team behind your success
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-5 md:gap-6 mb-12 xs:mb-14 sm:mb-20 md:mb-24"
          >
            {teams.map((team, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-7"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.10)",
                }}
              >
                <div className="flex items-center gap-2 xs:gap-3 mb-2 xs:mb-3">
                  <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-lg xs:rounded-xl my-bg-gradient flex items-center justify-center flex-shrink-0">
                    {team.icon}
                  </div>
                  <div>
                    <p className="text-lg xs:text-xl sm:text-2xl font-bold">
                      {team.count}
                    </p>
                    <p className="text-xs xs:text-sm sm:text-base md:text-lg font-semibold">
                      {team.title}
                    </p>
                  </div>
                </div>
                <p className="text-gray-100 text-[10px] xs:text-xs sm:text-sm mb-3 xs:mb-4">
                  {team.description}
                </p>
                <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                  {team.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-1.5 xs:gap-2">
                      <span className="text-gray-400 text-xs">
                        <img
                          src={arrow}
                          alt="Arrow"
                          className="w-3 h-3 xs:w-4 xs:h-4"
                        />
                      </span>
                      <span className="text-gray-300 text-[10px] xs:text-xs sm:text-sm">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-8 xs:mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight xs:leading-none tracking-tight">
              Technologies
              <br />
              We Work With
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 xs:gap-4 sm:gap-6 md:gap-8 mb-12 xs:mb-14 sm:mb-20 justify-center"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.08, y: -3 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center justify-center gap-1.5 xs:gap-2 sm:gap-4 w-[60px] h-[68px] xs:w-[72px] xs:h-[80px] sm:w-28 sm:h-28 rounded-lg xs:rounded-xl cursor-pointer"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.12)",
                }}
              >
                {tech.icon}
                <span className="text-[8px] xs:text-[10px] sm:text-xs text-gray-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-xl xs:rounded-2xl sm:rounded-3xl p-5 xs:p-6 sm:p-10 md:p-12 text-center mb-12 xs:mb-16 sm:mb-24 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #1a0a4a 0%, #2d1b6e 40%, #6d28d9 100%)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none bg-cover bg-center"
              style={{
                backgroundImage: `url(${gredfull})`,
              }}
            />
            <div className="relative z-10">
              <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-1.5 xs:mb-2 sm:mb-3">
                Join Our Community
              </h3>
              <p className="text-gray-300 text-[10px] xs:text-xs sm:text-sm mb-4 xs:mb-5 sm:mb-8 max-w-md mx-auto">
                We're always looking for talented developers and designers to
                join our team
              </p>
              <motion.button
                whileHover={{ scale: 1.04, backgroundColor: "#f0f0f0" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/contact")}
                className="bg-white text-black px-5 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 rounded-full font-semibold text-xs xs:text-sm sm:text-base transition-all"
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative min-h-[800px] xs:min-h-[850px] sm:min-h-[900px] md:min-h-[1000px] lg:min-h-[550px] lg:h-[1150px] w-full overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="absolute top-6 xs:top-8 sm:top-12 md:top-16 left-4 xs:left-6 sm:left-12 md:left-16 z-50"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight xs:leading-none tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
            Meet the
            <br />
            Team
          </h2>
        </motion.div>

        <img
          src={left}
          alt="left hand"
          className="absolute left-0 top-0 w-[60%] xs:w-[55%] sm:w-[50%] md:w-[45%] opacity-50 sm:opacity-70"
        />

        <img
          src={right}
          alt="right hand"
          className="absolute right-0 bottom-20 xs:bottom-28 sm:bottom-32 md:bottom-40 w-[60%] xs:w-[55%] sm:w-[50%] md:w-[45%] opacity-50 sm:opacity-70"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="lg:hidden relative w-full h-full px-4 xs:px-6 sm:px-8 pt-24 xs:pt-28 sm:pt-36 md:pt-40 pb-8">
          <div className="flex flex-col items-center gap-4 xs:gap-5 sm:gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full max-w-[220px] xs:max-w-[250px] sm:max-w-[280px] md:max-w-[300px]"
              >
                <div className="rounded-xl xs:rounded-2xl overflow-hidden bg-black/50 backdrop-blur-md border border-white/10">
                  <div className="w-full h-[260px] xs:h-[300px] sm:h-[350px] md:h-[400px] bg-gray-800">
                    {member.image && (
                      <img
                        src={member.image}
                        className="w-full h-full object-cover object-top"
                        alt={member.name}
                      />
                    )}
                  </div>
                  <div className="p-3 xs:p-4">
                    <p className="text-white font-semibold text-xs xs:text-sm">
                      {member.name}
                    </p>
                    <p className="text-gray-400 text-[10px] xs:text-xs">
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block relative w-full h-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-16 right-96"
          >
            <div className="w-[300px] rounded-2xl overflow-hidden bg-black/50 backdrop-blur-md border border-white/10">
              <img
                src={ak}
                className="w-full h-[400px] object-cover object-top"
                alt="Akshit Sheliya"
              />
              <div className="p-4">
                <p className="text-white font-semibold text-sm">
                  Akshit Sheliya
                </p>
                <p className="text-gray-400 text-xs">
                  CTO (Chief Technology Officer)
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="absolute top-16 right-10"
          >
            <div className="w-[300px] rounded-2xl overflow-hidden bg-black/50 backdrop-blur-md border border-white/10">
              <img
                className="w-full h-[400px] object-cover object-top"
                alt="Harshil Lakhani"
              />
              <div className="p-4">
                <p className="text-white font-semibold text-sm">
                  Harshil Lakhani
                </p>
                <p className="text-gray-400 text-xs">
                  CEO (Chief Executive Officer)
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bottom-20 left-16"
          >
            <div className="w-[300px] rounded-2xl overflow-hidden bg-black/50 backdrop-blur-md border border-white/10">
              <img
                className="w-full h-[400px] object-cover object-top"
                alt="Megh Patel"
              />
              <div className="p-4">
                <p className="text-white font-semibold text-sm">Megh Patel</p>
                <p className="text-gray-400 text-xs">
                  CPO (Chief Product Officer)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Community;
