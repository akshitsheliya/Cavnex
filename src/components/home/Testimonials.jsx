import { motion } from "framer-motion";
import { staggerContainer, scaleIn } from "../../utils/animations";
import SectionTitle from "../common/SectionTitle";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-24 bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Don't just take our word for it - hear from our satisfied clients"
          gradient
        />

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              {...scaleIn}
              whileHover={{ y: -10 }}
              className="card-gradient rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ⭐
                  </span>
                ))}
              </div>

              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="text-4xl">
                  <testimonial.image />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
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
