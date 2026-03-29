import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logoshort from "../assets/cavnex_logo/cavnex_main.svg";

const beliefs = [
  {
    author: "Akshit Sheliya",
    email: "akshit@cavnex.in",
    date: "Jan 1st, 2024",
    title: "Craft over everything",
    body: (
      <>
        We don't just write code — we engineer{" "}
        <strong>solutions that last</strong>. Every component, every API, every
        user flow is designed with <strong>intentional precision</strong>. We
        believe that the difference between a good product and a great one lives
        in the <strong>details most people overlook</strong>.
      </>
    ),
    avatar: "A",
    color: "#a855f7",
  },
  {
    author: "Harshil Lakhani",
    email: "harshil@cavnex.in",
    date: "Mar 15th, 2024",
    title: "Move fast, build right",
    body: (
      <>
        Speed without quality is just <strong>technical debt</strong>. We move
        with urgency but never sacrifice architecture. We ship early, gather
        real feedback, and <strong>iterate with purpose</strong>. Every sprint
        brings us closer to something our clients are{" "}
        <strong>proud to show the world</strong>.
      </>
    ),
    avatar: "H",
    color: "#ec4899",
  },
  {
    author: "Megh Patel",
    email: "megh@cavnex.in",
    date: "Jun 10th, 2024",
    title: "Client success is our success",
    body: (
      <>
        We measure our work not by lines of code but by{" "}
        <strong>business outcomes</strong>. When a client's app goes live and
        their users love it, <strong>that's the win</strong>. We take full
        ownership of every project and treat every problem as if it were{" "}
        <strong>our own business on the line</strong>.
      </>
    ),
    avatar: "M",
    color: "#06b6d4",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "Team Members" },
];

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <div
        className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(168,85,247,0.08) 0%, transparent 60%), #000",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl mx-auto mb-8 sm:mb-10 flex items-center justify-center"
          >
            <span
              className="text-3xl sm:text-4xl font-black"
              style={{
                background: "linear-gradient(135deg, #a855f7, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <img src={logoshort} alt="" />
            </span>
          </motion.div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            We build software that
            <br />
            businesses grow with
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Businesses deserve digital products that actually work — fast,
            beautiful, and built to scale. We're here to make that the standard,
            not the exception.
          </p>
        </motion.div>
      </div>

      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest mb-6"
          >
            Our story
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-px bg-gray-800 w-16 mx-auto mb-10 sm:mb-14"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-left text-gray-300 text-base sm:text-lg leading-relaxed"
          >
            <p>
              Cavnex was founded with a single frustration — too many businesses
              were paying for{" "}
              <strong className="text-white">mediocre software</strong> that
              didn't truly solve their problems. Websites that looked outdated,
              apps that crashed, backends that couldn't scale. We knew{" "}
              <strong className="text-white">there was a better way</strong>.
            </p>
            <p>
              As we worked with more clients,{" "}
              <strong className="text-white">a clear pattern emerged</strong> —
              the gap wasn't just in technology, it was in{" "}
              <strong className="text-white">
                communication, ownership, and craft
              </strong>
              . Most agencies built and walked away. We realized that what
              businesses truly needed was a{" "}
              <strong className="text-white">
                long-term technology partner
              </strong>
              , not just a vendor.
            </p>
            <p>
              So we built Cavnex info Tech — a full-service software and web
              development company that combines{" "}
              <strong className="text-white">
                technical excellence with genuine care
              </strong>{" "}
              for client outcomes. From custom websites and mobile apps to
              complex web platforms, we build digital products that are{" "}
              <strong className="text-white">
                fast, scalable, and built to last
              </strong>
              . We're proud of every project we ship.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-900">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            What we believe
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg"
          >
            Principles that guide how we think, build, and deliver.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8 sm:space-y-10">
          {beliefs.map((belief, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`rounded-2xl overflow-hidden ${
                i % 2 !== 0 ? "ml-0 sm:ml-8 md:ml-16" : ""
              }`}
              style={{
                background: "#0d0d0d",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-center justify-between px-5 sm:px-6 py-3 border-b border-gray-900">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-700" />
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-3.5 h-3.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {belief.date}
                </div>
              </div>
              <div className="p-5 sm:p-7 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${belief.color}, #1a1a1a)`,
                    }}
                  >
                    {belief.avatar}
                  </div>
                  <div>
                    <span className="text-white text-sm sm:text-base font-medium">
                      {belief.author}
                    </span>
                    <span className="text-gray-500 text-xs sm:text-sm ml-2">
                      &lt;{belief.email}&gt;
                    </span>
                  </div>
                </div>
                <h3
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {belief.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {belief.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-900">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            The team behind it
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto"
          >
            A passionate team of developers, designers, and strategists on a
            mission to build
            <br className="hidden sm:block" /> software that makes businesses
            thrive.
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/community")}
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white border border-gray-700 hover:border-gray-500 transition-colors"
          >
            Meet the team
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-4 h-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mx-auto rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div
            className="w-full aspect-video flex items-center justify-center relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #0d0d1a 0%, #1a0d1a 50%, #0d1a0d 100%)",
            }}
          >
            <div className="relative z-10 text-center px-6">
              <div className="flex justify-center gap-3 mb-6">
                {["A", "H", "M"].map((letter, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white font-bold text-lg border border-gray-700"
                    style={{
                      background: `linear-gradient(135deg, ${
                        ["#a855f7", "#ec4899", "#06b6d4"][i]
                      }, #1a1a1a)`,
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs sm:text-sm">
                Cavnex Core Team · Gujarat, India
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
