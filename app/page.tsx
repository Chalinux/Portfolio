import Hero from '@/components/hero';
import ProjectsSection from '@/components/projects-section';
import AboutSection from '@/components/about-section';
import ContactSection from '@/components/contact-section';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
