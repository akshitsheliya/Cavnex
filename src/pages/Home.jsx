import Hero from "../components/home/Hero";
import ValueSection from "../components/home/ValueSection";
import ServicesSection from "../components/home/ServicesSection";
import PricingPreview from "../components/home/PricingPreview";
import DemoProjects from "../components/home/DemoProjects";
import Community from "../components/home/Community";
import WorkProcess from "../components/home/WorkProcess";
import Testimonials from "../components/home/Testimonials";
import ContactForm from "../components/contact/ContactForm";
import SectionTitle from "../components/common/SectionTitle";

export default function Home() {
  return (
    <div>
      <Hero />
      <ValueSection />
      <DemoProjects />
      <Testimonials />
      <Community />
      <ServicesSection />
      {/* 
      <PricingPreview />
      <WorkProcess /> */}
    </div>
  );
}
