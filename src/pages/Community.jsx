import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";

export default function Community() {
  const team = [
    {
      role: "UI/UX Designers",
      icon: "🎨",
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
      icon: "💻",
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
      icon: "⚙️",
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
      icon: "📱",
      count: "4+",
      members: ["React Native", "Flutter", "iOS Native", "Android Native"],
      description: "Developing native and cross-platform mobile applications",
    },
  ];

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "Flutter", icon: "💙" },
    { name: "Next.js", icon: "▲" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "AWS", icon: "☁️" },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Developer Community"
          subtitle="Meet the talented team behind your success"
          gradient
        />

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              className="card-gradient rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">
                  <member.icon />
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {member.count}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {member.role}
                  </h3>
                </div>
              </div>
              <p className="text-gray-400 mb-6">{member.description}</p>
              <div className="space-y-2">
                {member.members.map((skill, idx) => (
                  <div key={idx} className="flex items-center text-gray-300">
                    <span className="text-primary-400 mr-2">→</span>
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div {...fadeInUp} className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Technologies We Work With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.1 }}
                className="card-gradient rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-3">
                  <tech.icon />
                </div>
                <div className="text-sm text-gray-300">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="text-center card-gradient rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            We're always looking for talented developers and designers to join
            our team
          </p>
          <Button to="/contact">Get In Touch</Button>
        </motion.div>
      </div>
    </div>
  );
}
