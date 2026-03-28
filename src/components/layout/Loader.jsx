import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import C from "../../assets/c.svg";
import A from "../../assets/a.svg";
import V from "../../assets/v.svg";
import N from "../../assets/n.svg";
import E from "../../assets/e.svg";
import X from "../../assets/x.svg";

const LETTER_SVGS = [C, A, V, N, E, X];

export default function Loader({ onComplete }) {
  const containerRef = useRef(null);
  const lettersRef = useRef([]);
  const progressRef = useRef(null);
  const taglineRef = useRef(null);
  const codeLineRef = useRef([]);
  const cursorRef = useRef(null);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const letters = lettersRef.current.filter(Boolean);
    const progress = progressRef.current;
    const tagline = taglineRef.current;
    const codeLines = codeLineRef.current.filter(Boolean);
    const cursor = cursorRef.current;

    if (letters.length === 0) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            window.scrollTo(0, 0);
            document.body.style.overflow = "";
            onComplete();
          }, 1000);
        }, 400);
      },
    });

    gsap.set(letters, {
      opacity: 0,
      y: 60,
      scale: 0.8,
    });

    gsap.set(progress, {
      scaleX: 0,
    });

    gsap.set(tagline, {
      opacity: 0,
      y: 15,
    });

    gsap.set(codeLines, {
      opacity: 0,
      x: -20,
    });

    gsap.set(cursor, {
      opacity: 0,
    });

    tl.to(
      codeLines,
      {
        opacity: 0.3,
        x: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out",
      },
      0
    );

    tl.to(
      cursor,
      {
        opacity: 1,
        duration: 0.2,
      },
      0.3
    );

    gsap.to(cursor, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    tl.to(
      letters,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: {
          each: 0.08,
          from: "start",
        },
        ease: "power3.out",
      },
      0.3
    );

    tl.to(
      progress,
      {
        scaleX: 1,
        duration: 1.2,
        ease: "power2.inOut",
      },
      0.6
    );

    tl.to(
      tagline,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      1
    );

    tl.to(
      letters,
      {
        scale: 1.05,
        duration: 0.2,
        ease: "power2.out",
      },
      1.8
    );

    tl.to(
      letters,
      {
        scale: 1,
        duration: 0.2,
        ease: "power2.in",
      },
      2
    );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  const codeSnippets = [
    "<div className='cavnex'>",
    "  const innovation = true;",
    "  return <Excellence />;",
    "</div>",
  ];

  return (
    <>
      {!isExiting ? (
        <motion.div
          ref={containerRef}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          <div className="absolute top-8 left-8 sm:top-12 sm:left-12 font-mono text-[10px] sm:text-xs text-gray-600 hidden sm:block">
            {codeSnippets.map((line, i) => (
              <div
                key={i}
                ref={(el) => (codeLineRef.current[i] = el)}
                className="flex items-center"
              >
                <span className="text-gray-700 mr-3 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{line}</span>
              </div>
            ))}
            <div
              ref={cursorRef}
              className="inline-block w-2 h-4 bg-purple-500 ml-8 mt-1"
            />
          </div>

          <div className="absolute top-8 right-8 sm:top-12 sm:right-12 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500/50" />
            <span className="text-[10px] sm:text-xs text-gray-600 font-mono">
              loading
            </span>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div
              className="flex items-center justify-center mb-6 sm:mb-8"
              style={{ gap: "clamp(4px, 2vw, 16px)" }}
            >
              {LETTER_SVGS.map((src, i) => (
                <img
                  key={i}
                  ref={(el) => (lettersRef.current[i] = el)}
                  src={src}
                  alt={`letter-${i}`}
                  className="select-none pointer-events-none"
                  draggable={false}
                  style={{
                    height: "clamp(36px, 10vw, 90px)",
                    width: "auto",
                  }}
                />
              ))}
            </div>

            <div className="w-40 xs:w-48 sm:w-56 h-[2px] bg-gray-800/50 rounded-full overflow-hidden mb-3 sm:mb-4">
              <div
                ref={progressRef}
                className="h-full origin-left rounded-full"
                style={{
                  background: "linear-gradient(90deg, #8B5CF6, #A855F7)",
                }}
              />
            </div>

            <p
              ref={taglineRef}
              className="text-gray-500 text-[10px] xs:text-xs sm:text-sm tracking-[0.2em] uppercase font-light"
            >
              Building Digital Future
            </p>
          </div>

          <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 hidden sm:block">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-gray-700" />
              <span className="text-[10px] text-gray-600 font-mono">2024</span>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12">
            <div className="flex items-center gap-1.5">
              <motion.div
                className="w-1 h-1 rounded-full bg-purple-500"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
              />
              <motion.div
                className="w-1 h-1 rounded-full bg-purple-400"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              />
              <motion.div
                className="w-1 h-1 rounded-full bg-purple-300"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
              />
            </div>
          </div>

          <div className="absolute top-1/2 left-4 sm:left-8 -translate-y-1/2 hidden md:block">
            <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-gray-700 to-transparent" />
          </div>

          <div className="absolute top-1/2 right-4 sm:right-8 -translate-y-1/2 hidden md:block">
            <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-gray-700 to-transparent" />
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative z-10 flex flex-col items-center">
            <div
              className="flex items-center justify-center"
              style={{ gap: "clamp(4px, 2vw, 16px)" }}
            >
              {LETTER_SVGS.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`letter-${i}`}
                  className="select-none pointer-events-none"
                  draggable={false}
                  style={{
                    height: "clamp(36px, 10vw, 90px)",
                    width: "auto",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
