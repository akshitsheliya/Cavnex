import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import C from "../../assets/c.svg";
import A from "../../assets/a.svg";
import V from "../../assets/v.svg";
import N from "../../assets/n.svg";
import E from "../../assets/e.svg";
import X from "../../assets/x.svg";

gsap.registerPlugin(ScrollTrigger);

const LETTER_SVGS = [C, A, V, N, E, X];

const gridItems = [
  { text: "Innovation", row: 1, col: 1 },
  { text: "Creative", row: 1, col: 2 },
  { text: "Digital", row: 1, col: 3 },
  { text: "Solutions", row: 1, col: 4 },
  { text: "Modern", row: 1, col: 5 },
  { text: "Design", row: 2, col: 1 },
  { text: "Studio", row: 2, col: 5 },
  { text: "Premium", row: 3, col: 1 },
  { text: "Quality", row: 3, col: 5 },
  { text: "Expert", row: 4, col: 1 },
  { text: "Fast", row: 4, col: 2 },
  { text: "Reliable", row: 4, col: 3 },
  { text: "Scalable", row: 4, col: 4 },
  { text: "Secure", row: 4, col: 5 },
];

export default function CavnexReveal() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const lettersContainerRef = useRef(null);
  const lettersRef = useRef([]);
  const boxesRef = useRef([]);
  const centerGlowRef = useRef(null);
  const bgGlowRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;
    const lettersContainer = lettersContainerRef.current;
    const letters = lettersRef.current.filter(Boolean);
    const boxes = boxesRef.current.filter(Boolean);
    const centerGlow = centerGlowRef.current;
    const bgGlow = bgGlowRef.current;

    if (!section || !grid || letters.length === 0) return;

    gsap.set(letters, {
      opacity: 0.1,
    });

    gsap.set(boxes, {
      opacity: 1,
    });

    gsap.set(centerGlow, {
      opacity: 0,
    });

    gsap.set(bgGlow, {
      opacity: 0,
    });

    gsap.set(grid, {
      scale: 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=200%",
        scrub: 1.5,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      },
    });

    tl.to(
      grid,
      {
        scale: 2.5,
        duration: 1,
        ease: "power2.inOut",
      },
      0
    );

    tl.to(
      boxes,
      {
        opacity: 0,
        duration: 0.6,
        stagger: {
          each: 0.03,
          from: "edges",
        },
        ease: "power2.in",
      },
      0.1
    );

    tl.to(
      centerGlow,
      {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      0.3
    );

    tl.to(
      letters,
      {
        opacity: 1,
        duration: 0.8,
        stagger: {
          each: 0.08,
          from: "center",
        },
        ease: "power3.out",
      },
      0.3
    );

    tl.to(
      bgGlow,
      {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      0.4
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-black overflow-hidden"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          ref={bgGlowRef}
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(99,102,241,0.3) 0%, rgba(168,85,247,0.2) 25%, rgba(236,72,153,0.1) 45%, transparent 70%)",
          }}
        />

        <div
          ref={gridRef}
          className="absolute z-10"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gridTemplateRows: "repeat(4, 1fr)",
            gap: "1px",
            width: "min(100vw, 1500px)",
            height: "min(80vh, 1200px)",
            willChange: "transform",
          }}
        >
          {gridItems.map((item, i) => (
            <div
              key={i}
              ref={(el) => (boxesRef.current[i] = el)}
              className="flex items-center justify-center border border-white/10 bg-black/50"
              style={{
                gridRow: item.row,
                gridColumn: item.col,
              }}
            >
              <span className="text-white/20 text-[10px] sm:text-xs md:text-sm font-light tracking-[0.15em] uppercase text-center px-2">
                {item.text}
              </span>
            </div>
          ))}

          <div
            className="flex items-center justify-center border border-white/20"
            style={{
              gridRow: "2 / 4",
              gridColumn: "2 / 5",
            }}
          />
        </div>

        <div
          ref={centerGlowRef}
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(99,102,241,0.4) 0%, rgba(168,85,247,0.3) 30%, rgba(236,72,153,0.15) 50%, transparent 70%)",
            opacity: 0,
          }}
        />

        <div
          ref={lettersContainerRef}
          className="absolute z-30 flex items-center justify-center"
          style={{ gap: "clamp(8px, 2vw, 24px)" }}
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
                height: "clamp(40px, 10vw, 120px)",
                width: "auto",
              }}
            />
          ))}
        </div>

        <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-40">
          <span className="text-white/25 text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-light">
            Scroll
          </span>
          <div className="w-px h-5 sm:h-7 bg-gradient-to-b from-white/25 to-transparent" />
        </div>
      </div>
    </section>
  );
}
