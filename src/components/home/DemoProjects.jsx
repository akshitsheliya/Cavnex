import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/animations";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../common/ProjectCard";
import { projects } from "../../data/projects";
import Button from "../common/Button";

export default function DemoProjects() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Work"
          subtitle="Explore our portfolio of successful projects and see what we can create for you"
        />

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button to="/projects">View All Projects</Button>
        </motion.div>
      </div>
    </section>
  );
}
