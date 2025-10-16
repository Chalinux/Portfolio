import AnimatedSection from './animated-section';
import SectionHeading from './section-heading';
import { profile } from '@/data/profile';

export default function AboutSection() {
  return (
    <AnimatedSection id="sobre-mi" className="mx-auto w-full max-w-6xl px-6 pb-24">
      <SectionHeading eyebrow="Sobre mí" title="Diseño, código y estrategia" />
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <p className="text-lg leading-relaxed text-slate-300">{profile.about}</p>
        <div className="grid gap-6 rounded-3xl border border-white/5 bg-white/[0.02] p-8">
          <div>
            <h3 className="text-sm uppercase tracking-[0.4em] text-accent">Skills</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {profile.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-[0.4em] text-accent">Stack</h3>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
              {profile.stack.map((tool) => (
                <span key={tool} className="rounded-full border border-white/10 px-3 py-1">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
