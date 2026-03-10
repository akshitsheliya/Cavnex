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
      <ServicesSection />
      <PricingPreview />
      <DemoProjects />
      <Community />
      <WorkProcess />
      <Testimonials />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <SectionTitle
            title="Let's Start Your Project"
            subtitle="Fill out the form and we'll get back to you within 24 hours"
          />
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
