import { motion } from "framer-motion";
import { staggerContainer } from "../utils/animations";
import SectionTitle from "../components/common/SectionTitle";
import ProjectCard from "../components/common/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto container-padding">
        <SectionTitle
          title="Our Portfolio"
          subtitle="Explore our collection of successful projects across various industries"
          gradient
        />

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
