import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import { HiStar } from "react-icons/hi";
import { testimonials } from "../../data/testimonials";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

export default function Testimonials() {
  return (
    <section className="section-padding bg-dark-800/50">
      <div className="max-w-7xl mx-auto container-padding">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Don't just take our word for it - hear from our satisfied clients"
          gradient
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="card-gradient rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 will-change-transform"
            >
              <div className="flex items-center gap-0.5 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 italic line-clamp-4">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-white/10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  loading="lazy"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-primary-500/30"
                />
                <div>
                  <div className="font-semibold text-white text-sm sm:text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-primary-400">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
