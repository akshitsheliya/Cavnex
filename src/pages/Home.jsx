import Hero from "../components/home/Hero";
import ValueSection from "../components/home/ValueSection";
import ServicesSection from "../components/home/ServicesSection";

import DemoProjects from "../components/home/DemoProjects";
import Community from "../components/home/Community";

import Testimonials from "../components/home/Testimonials";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <ValueSection />
      <DemoProjects />
      <Testimonials />
      <Community />
      <ServicesSection />
    </div>
  );
}
