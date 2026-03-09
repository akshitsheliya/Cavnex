import { motion } from "framer-motion";
import { staggerContainer } from "../utils/animations";
import SectionTitle from "../components/common/SectionTitle";
import ProjectCard from "../components/common/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Portfolio"
          subtitle="Explore our collection of successful projects across various industries"
          gradient
        />

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
