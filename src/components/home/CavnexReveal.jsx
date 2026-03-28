import { useEffect, useRef, useState } from "react";
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

export default function CavnexReveal() {
  const sectionRef = useRef(null);
  const lettersContainerRef = useRef(null);
  const lettersRef = useRef([]);
  const orbitRingsRef = useRef([]);
  const floatingOrbsRef = useRef([]);
  const particlesRef = useRef([]);
  const centerGlowRef = useRef(null);
  const bgGlowRef = useRef(null);
  const linesRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const letters = lettersRef.current.filter(Boolean);
    const orbitRings = orbitRingsRef.current.filter(Boolean);
    const floatingOrbs = floatingOrbsRef.current.filter(Boolean);
    const particles = particlesRef.current.filter(Boolean);
    const lines = linesRef.current.filter(Boolean);
    const centerGlow = centerGlowRef.current;
    const bgGlow = bgGlowRef.current;

    if (!section || letters.length === 0) return;

    gsap.set(letters, {
      opacity: 0.1,
      scale: 0.8,
    });

    gsap.set(orbitRings, {
      opacity: 0.6,
      scale: 1,
    });

    gsap.set(floatingOrbs, {
      opacity: 0.8,
      scale: 1,
    });

    gsap.set(particles, {
      opacity: 0.5,
    });

    gsap.set(lines, {
      opacity: 0.3,
    });

    gsap.set(centerGlow, {
      opacity: 0,
      scale: 0.5,
    });

    gsap.set(bgGlow, {
      opacity: 0,
    });

    orbitRings.forEach((ring, i) => {
      gsap.to(ring, {
        rotation: i % 2 === 0 ? 360 : -360,
        duration: 20 + i * 5,
        repeat: -1,
        ease: "none",
      });
    });

    floatingOrbs.forEach((orb, i) => {
      gsap.to(orb, {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        duration: 3 + i * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    particles.forEach((particle, i) => {
      gsap.to(particle, {
        y: "random(-30, 30)",
        x: "random(-30, 30)",
        opacity: "random(0.2, 0.8)",
        duration: 2 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.1,
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: isMobile ? "+=150%" : "+=200%",
        scrub: isMobile ? 1 : 1.5,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      },
    });

    tl.to(
      orbitRings,
      {
        scale: 3,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.inOut",
      },
      0
    );

    tl.to(
      floatingOrbs,
      {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: {
          each: 0.05,
          from: "random",
        },
        ease: "power2.in",
      },
      0.1
    );

    tl.to(
      particles,
      {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: {
          each: 0.02,
          from: "random",
        },
        ease: "power2.in",
      },
      0.1
    );

    tl.to(
      lines,
      {
        opacity: 0,
        strokeDashoffset: 1000,
        duration: 0.8,
        ease: "power2.in",
      },
      0.1
    );

    tl.to(
      centerGlow,
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      0.3
    );

    tl.to(
      letters,
      {
        opacity: 1,
        scale: 1,
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
  }, [isMobile, isTablet]);

  const getSize = (base, tablet, mobile) => {
    if (isMobile) return mobile;
    if (isTablet) return tablet;
    return base;
  };

  const orbitRingsData = [
    { size: getSize(600, 450, 280), borderWidth: 0, opacity: 0.2 },
    { size: getSize(500, 380, 240), borderWidth: 1, opacity: 0.25 },
    { size: getSize(400, 300, 200), borderWidth: 1, opacity: 0.3 },
    { size: getSize(300, 230, 160), borderWidth: 1, opacity: 0.2 },
  ];

  const floatingOrbsData = [
    {
      size: getSize(80, 60, 40),
      x: getSize(-280, -200, -120),
      y: getSize(-150, -100, -80),
      gradient: "from-purple-500/40 to-pink-500/40",
    },
    {
      size: getSize(60, 45, 30),
      x: getSize(300, 220, 130),
      y: getSize(-100, -80, -60),
      gradient: "from-blue-500/40 to-cyan-500/40",
    },
    {
      size: getSize(70, 50, 35),
      x: getSize(-250, -180, -100),
      y: getSize(180, 140, 100),
      gradient: "from-pink-500/40 to-orange-500/40",
    },
    {
      size: getSize(50, 40, 25),
      x: getSize(280, 200, 110),
      y: getSize(150, 120, 90),
      gradient: "from-cyan-500/40 to-purple-500/40",
    },
    {
      size: getSize(40, 30, 20),
      x: getSize(0, 0, 0),
      y: getSize(-220, -170, -120),
      gradient: "from-purple-500/40 to-blue-500/40",
    },
    {
      size: getSize(45, 35, 22),
      x: getSize(-150, -100, -70),
      y: getSize(0, 0, 0),
      gradient: "from-pink-500/40 to-purple-500/40",
    },
    {
      size: getSize(55, 42, 28),
      x: getSize(180, 130, 80),
      y: getSize(50, 40, 30),
      gradient: "from-blue-500/40 to-pink-500/40",
    },
    {
      size: getSize(35, 28, 18),
      x: getSize(-50, -40, -25),
      y: getSize(200, 150, 110),
      gradient: "from-cyan-500/40 to-pink-500/40",
    },
  ];

  const particlesData = Array.from(
    { length: isMobile ? 20 : isTablet ? 30 : 40 },
    (_, i) => ({
      size: Math.random() * (isMobile ? 4 : 6) + 2,
      x: (Math.random() - 0.5) * (isMobile ? 300 : isTablet ? 500 : 700),
      y: (Math.random() - 0.5) * (isMobile ? 300 : isTablet ? 400 : 500),
      opacity: Math.random() * 0.5 + 0.2,
    })
  );

  const connectionLines = [
    {
      x1: getSize(-280, -200, -120),
      y1: getSize(-150, -100, -80),
      x2: getSize(0, 0, 0),
      y2: getSize(-220, -170, -120),
    },
    {
      x1: getSize(300, 220, 130),
      y1: getSize(-100, -80, -60),
      x2: getSize(0, 0, 0),
      y2: getSize(-220, -170, -120),
    },
    {
      x1: getSize(-250, -180, -100),
      y1: getSize(180, 140, 100),
      x2: getSize(-50, -40, -25),
      y2: getSize(200, 150, 110),
    },
    {
      x1: getSize(280, 200, 110),
      y1: getSize(150, 120, 90),
      x2: getSize(180, 130, 80),
      y2: getSize(50, 40, 30),
    },
    {
      x1: getSize(-150, -100, -70),
      y1: getSize(0, 0, 0),
      x2: getSize(-280, -200, -120),
      y2: getSize(-150, -100, -80),
    },
    {
      x1: getSize(180, 130, 80),
      y1: getSize(50, 40, 30),
      x2: getSize(300, 220, 130),
      y2: getSize(-100, -80, -60),
    },
  ];

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
              "radial-gradient(circle at center, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
          }}
        />

        <svg
          className="absolute inset-0 w-full h-full z-10 pointer-events-none"
          style={{ overflow: "visible" }}
        >
          <defs>
            <linearGradient
              id="lineGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.3)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.3)" />
            </linearGradient>
          </defs>
          {connectionLines.map((line, i) => (
            <line
              key={i}
              ref={(el) => (linesRef.current[i] = el)}
              x1={`calc(50% + ${line.x1}px)`}
              y1={`calc(50% + ${line.y1}px)`}
              x2={`calc(50% + ${line.x2}px)`}
              y2={`calc(50% + ${line.y2}px)`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              strokeDasharray="5,5"
              style={{ opacity: 0.3 }}
            />
          ))}
        </svg>

        {orbitRingsData.map((ring, i) => (
          <div
            key={i}
            ref={(el) => (orbitRingsRef.current[i] = el)}
            className="absolute rounded-full pointer-events-none z-10"
            style={{
              width: ring.size,
              height: ring.size,
              border: `${ring.borderWidth}px solid`,
              borderColor: `rgba(139, 92, 246, ${ring.opacity})`,
              boxShadow: `0 0 20px rgba(139, 92, 246, ${ring.opacity * 0.5})`,
            }}
          />
        ))}

        {floatingOrbsData.map((orb, i) => (
          <div
            key={i}
            ref={(el) => (floatingOrbsRef.current[i] = el)}
            className={`absolute rounded-full bg-gradient-to-br ${orb.gradient} pointer-events-none z-15 backdrop-blur-sm`}
            style={{
              width: orb.size,
              height: orb.size,
              left: `calc(50% + ${orb.x}px - ${orb.size / 2}px)`,
              top: `calc(50% + ${orb.y}px - ${orb.size / 2}px)`,
              boxShadow: `0 0 30px rgba(139, 92, 246, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)`,
            }}
          />
        ))}

        {particlesData.map((particle, i) => (
          <div
            key={i}
            ref={(el) => (particlesRef.current[i] = el)}
            className="absolute rounded-full bg-white pointer-events-none z-15"
            style={{
              width: particle.size,
              height: particle.size,
              left: `calc(50% + ${particle.x}px)`,
              top: `calc(50% + ${particle.y}px)`,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 2}px rgba(255, 255, 255, 0.5)`,
            }}
          />
        ))}

        <div
          ref={centerGlowRef}
          className="absolute pointer-events-none z-20"
          style={{
            width: isMobile ? 300 : isTablet ? 400 : 500,
            height: isMobile ? 300 : isTablet ? 400 : 500,
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, rgba(236, 72, 153, 0.1) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div
          ref={lettersContainerRef}
          className="absolute z-30 flex items-center justify-center px-2 sm:px-4"
          style={{
            gap: isMobile ? "4px" : isTablet ? "12px" : "clamp(8px, 2vw, 24px)",
          }}
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
                height: isMobile
                  ? "clamp(28px, 8vw, 50px)"
                  : isTablet
                    ? "clamp(50px, 10vw, 80px)"
                    : "clamp(40px, 10vw, 120px)",
                width: "auto",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
