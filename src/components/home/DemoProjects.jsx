import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import casestudy_1 from "../../assets/casestudy_1.svg";
import casestudy_2 from "../../assets/casestudy_2.svg";
import casestudy_3 from "../../assets/casestudy_3.svg";
import casestudy_4 from "../../assets/casestudy_4.svg";

const ImgCard = ({ src, alt }) => (
  <div className="w-full h-full relative overflow-hidden">
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover"
    />
  </div>
);

export default function DemoProjects() {
  return (
    <section className="bg-black py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-white mb-10">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:h-[1200px]">
          <div className="grid grid-rows-5 gap-4 min-h-0">
            <motion.div className="row-span-2 rounded-2xl overflow-hidden min-h-0">
              <ImgCard src={casestudy_1} alt="Green Phone Case Study" />
            </motion.div>

            <motion.div className="row-span-2 rounded-2xl overflow-hidden min-h-0">
              <ImgCard src={casestudy_2} alt="Teal Phones Case Study" />
            </motion.div>

            <motion.div className="row-span-1 rounded-2xl bg-[#111] p-5 flex flex-col justify-center min-h-0">
              <p className="text-white text-6xl font-semibold mb-2 capitalize">
                How we design web-sites
              </p>
              <Link
                to="/projects"
                className="text-xs border border-gray-600 text-white px-4 py-1.5 rounded-full w-fit"
              >
                See More
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-rows-2 gap-4 min-h-0">
            <motion.div className="rounded-2xl overflow-hidden min-h-0">
              <ImgCard src={casestudy_3} alt="Purple Phone Case Study" />
            </motion.div>

            <motion.div className="rounded-2xl overflow-hidden min-h-0">
              <ImgCard src={casestudy_4} alt="AudiencePlus Case Study" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
