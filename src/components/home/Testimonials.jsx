import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const testimonials = [
  {
    id: 1,
    text: "Fantastic customer service. I shifted from a traditional bank to Sable [and] Sable's customer service helped me answer all the questions that I needed to switch.",
    name: "K Oiwake",
  },
  {
    id: 2,
    text: "The best bank for immigrants in the US. Thank you Sable! I have nothing but good things to say about you!",
    name: "E Berhe",
  },
  {
    id: 3,
    text: "Absolutely love the experience. The team was professional, fast, and delivered beyond expectations. Highly recommend!",
    name: "J Martinez",
  },
  {
    id: 4,
    text: "Working with CavNex was a game changer for our business. The website they built looks stunning and performs even better.",
    name: "A Patel",
  },
  {
    id: 5,
    text: "Incredible attention to detail and amazing communication throughout the project. They truly understand what clients need.",
    name: "S Johnson",
  },
  {
    id: 6,
    text: "From concept to launch, the team exceeded every expectation. Our conversion rates increased by 150% after the redesign.",
    name: "M Chen",
  },
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

const TestimonialCard = ({ t }) => {
  return (
    <div
      className="testimonial-card h-full rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden select-none"
      style={{
        minHeight: 260,
        background: "#1a1a1a",
      }}
    >
      <div className="card-glow absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500" />
      <div className="card-border absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="flex gap-4">
          <span
            className="quote-mark text-4xl sm:text-5xl font-black leading-none flex-shrink-0 text-teal-400/60 transition-colors duration-300"
            style={{ fontFamily: "Georgia, serif" }}
          >
            "
          </span>
          <p className="card-text text-white/70 text-sm sm:text-base leading-relaxed transition-colors duration-300">
            {t.text}
          </p>
        </div>
      </div>

      <div className="relative z-10 flex items-center gap-3 mt-6 sm:mt-8">
        <div className="name-line w-6 h-px bg-white/40 transition-all duration-300" />
        <span className="card-name text-white/60 text-sm font-medium transition-colors duration-300">
          {t.name}
        </span>
      </div>
    </div>
  );
};

export default function Testimonials() {
  const [cardWidth, setCardWidth] = useState(380);

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) {
        setCardWidth(300);
      } else if (window.innerWidth < 1024) {
        setCardWidth(340);
      } else {
        setCardWidth(380);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <section className="bg-black overflow-hidden pt-14 sm:pt-20 pb-0">
      <style>{`
        .testimonial-card {
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .testimonial-card:hover {
          transform: scale(1.03) translateY(-8px);
        }
        .testimonial-card:hover .card-glow {
          opacity: 1;
          background: linear-gradient(135deg, rgba(45,212,191,0.12) 0%, rgba(59,130,246,0.08) 50%, rgba(139,92,246,0.06) 100%);
        }
        .testimonial-card:hover .card-border {
          opacity: 1;
          box-shadow: inset 0 0 0 1px rgba(45,212,191,0.25);
        }
        .testimonial-card:hover .quote-mark {
          color: rgb(94, 234, 212);
        }
        .testimonial-card:hover .card-text {
          color: rgba(255,255,255,0.95);
        }
        .testimonial-card:hover .card-name {
          color: white;
        }
        .testimonial-card:hover .name-line {
          width: 2.5rem;
          background: linear-gradient(to right, rgb(45,212,191), rgb(59,130,246));
        }
        
        .testimonial-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>

      <div className="px-4 sm:px-6 md:px-8 lg:px-16 mb-8 sm:mb-10 md:mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight"
        >
          What Our
          <br />
          Clients Say
        </motion.h2>
      </div>

      <div className="relative w-full py-6">
        <div
          className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 lg:w-32 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #000 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 lg:w-32 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, #000 0%, transparent 100%)",
          }}
        />

        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={16}
          slidesPerView="auto"
          loop={true}
          loopAdditionalSlides={6}
          freeMode={{
            enabled: true,
            momentum: true,
            momentumRatio: 0.5,
            momentumVelocityRatio: 0.5,
          }}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={4000}
          grabCursor={true}
          allowTouchMove={true}
          className="testimonial-swiper"
        >
          {duplicatedTestimonials.map((t, index) => (
            <SwiperSlide key={`${t.id}-${index}`} style={{ width: cardWidth }}>
              <TestimonialCard t={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <div className="mt-10">
        {" "}
        <CavnexReveal />
      </div> */}
    </section>
  );
}
