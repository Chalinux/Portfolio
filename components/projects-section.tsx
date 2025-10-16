import projects from '@/data/projects.json';
import AnimatedSection from './animated-section';
import SectionHeading from './section-heading';
import ProjectCard from './project-card';
import { Project } from '@/lib/types';

const typedProjects = projects as Project[];

export default function ProjectsSection() {
  return (
    <AnimatedSection id="proyectos" className="mx-auto w-full max-w-6xl px-6 pb-24">
      <SectionHeading eyebrow="Proyectos" title="Casos recientes" />
      <div className="grid gap-8 md:grid-cols-2">
        {typedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </AnimatedSection>
  );
}
