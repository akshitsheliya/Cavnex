import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/animations";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../common/ProjectCard";
import Button from "../common/Button";
import { projects } from "../../data/projects";

export default function DemoProjects() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <SectionTitle
          title="Our Work"
          subtitle="Explore our portfolio of successful projects across various industries"
        />

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12"
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
