import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

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

const GAP = 16;

const TestimonialCard = ({ t, cardWidth, onHover, onLeave }) => {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="testimonial-card flex-shrink-0 rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden cursor-default select-none"
      style={{
        width: cardWidth,
        minHeight: 260,
        background: "#1a1a1a",
        willChange: "transform",
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
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(380);
  const [isCardHovered, setIsCardHovered] = useState(false);

  const currentX = useRef(0);
  const targetX = useRef(0);
  const animationRef = useRef(null);

  const singleSetWidth = testimonials.length * (cardWidth + GAP);

  const infiniteCards = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    currentX.current = -singleSetWidth;
    targetX.current = -singleSetWidth;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${currentX.current}px)`;
    }
  }, [singleSetWidth]);

  useEffect(() => {
    const updateDimensions = () => {
      const newCardWidth =
        window.innerWidth < 640 ? 300 : window.innerWidth < 1024 ? 340 : 380;
      setCardWidth(newCardWidth);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const normalizePosition = useCallback(
    (pos) => {
      let newPos = pos;
      if (newPos < -singleSetWidth * 2) {
        newPos += singleSetWidth;
      } else if (newPos > 0) {
        newPos -= singleSetWidth;
      }
      return newPos;
    },
    [singleSetWidth]
  );

  useEffect(() => {
    const autoScrollSpeed = 0.3;
    const lerpFactor = 0.08;

    const animate = () => {
      if (!isCardHovered) {
        targetX.current -= autoScrollSpeed;
      }

      targetX.current = normalizePosition(targetX.current);

      const diff = targetX.current - currentX.current;

      if (Math.abs(diff) > singleSetWidth / 2) {
        currentX.current = targetX.current;
      } else {
        currentX.current += diff * lerpFactor;
      }

      currentX.current = normalizePosition(currentX.current);

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${currentX.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isCardHovered, normalizePosition, singleSetWidth]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();

      const scrollAmount = e.deltaY * 0.15;
      targetX.current -= scrollAmount;
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
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
      `}</style>

      <div className="px-4 sm:px-8 lg:px-16 mb-10 sm:mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight"
        >
          What Our
          <br />
          Clients Say
        </motion.h2>
      </div>

      <div ref={containerRef} className="relative w-full py-6">
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

        <div
          ref={trackRef}
          className="flex"
          style={{
            gap: GAP,
            willChange: "transform",
          }}
        >
          {infiniteCards.map((t, i) => (
            <TestimonialCard
              key={`card-${i}`}
              t={t}
              cardWidth={cardWidth}
              onHover={() => setIsCardHovered(true)}
              onLeave={() => setIsCardHovered(false)}
            />
          ))}
        </div>
      </div>

      {/* <div className="mt-10">
        {" "}
        <CavnexReveal />
      </div> */}
    </section>
  );
}
