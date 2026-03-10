import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";
import {
  HiColorSwatch,
  HiCode,
  HiServer,
  HiDeviceMobile,
  HiArrowRight,
} from "react-icons/hi";
import { FaReact, FaNodeJs, FaPython, FaAws } from "react-icons/fa";
import {
  SiFlutter,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

export default function Community() {
  const team = [
    {
      role: "UI/UX Designers",
      icon: HiColorSwatch,
      count: "5+",
      members: [
        "Creative Design",
        "User Research",
        "Prototyping",
        "Visual Design",
      ],
      description:
        "Our design team crafts beautiful and intuitive user experiences",
    },
    {
      role: "Frontend Developers",
      icon: HiCode,
      count: "8+",
      members: [
        "React Specialists",
        "Vue Experts",
        "Angular Developers",
        "UI Engineers",
      ],
      description: "Building responsive and interactive user interfaces",
    },
    {
      role: "Backend Developers",
      icon: HiServer,
      count: "6+",
      members: [
        "Node.js Experts",
        "Python Developers",
        "Database Architects",
        "API Specialists",
      ],
      description: "Creating robust and scalable server-side solutions",
    },
    {
      role: "Mobile Developers",
      icon: HiDeviceMobile,
      count: "4+",
      members: ["React Native", "Flutter", "iOS Native", "Android Native"],
      description: "Developing native and cross-platform mobile applications",
    },
  ];

  const technologies = [
    { name: "React", icon: FaReact },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Python", icon: FaPython },
    { name: "Flutter", icon: SiFlutter },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "AWS", icon: FaAws },
  ];

  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto container-padding">
        <SectionTitle
          title="Our Developer Community"
          subtitle="Meet the talented team behind your success"
          gradient
        />

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              className="card-gradient rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <member.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-400" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold gradient-text mb-0.5 sm:mb-1">
                    {member.count}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                    {member.role}
                  </h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
                {member.description}
              </p>
              <div className="space-y-1.5 sm:space-y-2">
                {member.members.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-gray-300 text-sm sm:text-base"
                  >
                    <HiArrowRight className="w-4 h-4 text-primary-400 mr-2 flex-shrink-0" />
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div {...fadeInUp} className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
            Technologies We Work With
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 md:gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.05 }}
                className="card-gradient rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <tech.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 sm:mb-3 text-primary-400" />
                <div className="text-xs sm:text-sm text-gray-300">
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="text-center card-gradient rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            Join Our Community
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">
            We're always looking for talented developers and designers to join
            our team
          </p>
          <Button to="/contact">Get In Touch</Button>
        </motion.div>
      </div>
    </div>
  );
}
