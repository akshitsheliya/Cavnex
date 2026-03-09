import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../utils/animations";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

export default function Community() {
  const team = [
    {
      role: "UI/UX Designers",
      icon: "🎨",
      count: "5+",
      description: "Creative minds crafting beautiful interfaces",
    },
    {
      role: "Frontend Developers",
      icon: "💻",
      count: "8+",
      description: "Building responsive and interactive experiences",
    },
    {
      role: "Backend Developers",
      icon: "⚙️",
      count: "6+",
      description: "Creating robust and scalable solutions",
    },
    {
      role: "Mobile Developers",
      icon: "📱",
      count: "4+",
      description: "Developing native and cross-platform apps",
    },
  ];

  return (
    <section className="py-24 bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Developer Community"
          subtitle="A talented team of experts dedicated to bringing your vision to life"
          gradient
        />

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              whileHover={{ y: -10 }}
              className="card-gradient rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-6xl mb-4">
                <member.icon />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">
                {member.count}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {member.role}
              </h3>
              <p className="text-gray-400 text-sm">{member.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button to="/community">Meet Our Team</Button>
        </motion.div>
      </div>
    </section>
  );
}
