import { ArrowUpRight } from 'lucide-react';
import AnimatedSection from './animated-section';
import ButtonLink from './button-link';
import { profile } from '@/data/profile';

export default function Hero() {
  return (
    <AnimatedSection
      id="inicio"
      className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-24 pt-20 md:flex-row md:items-center"
    >
      <div className="flex-1 space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.4em] text-accent">
          Disponible
        </span>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            {profile.name}
          </h1>
          <p className="text-lg text-slate-300 md:text-xl">{profile.role}</p>
        </div>
        <p className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">{profile.headline}</p>
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <ButtonLink href="#proyectos">
            Ver proyectos
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </ButtonLink>
          <ButtonLink href="#contacto" variant="secondary">
            Contacto directo
          </ButtonLink>
        </div>
        <div className="grid grid-cols-1 gap-4 pt-10 sm:grid-cols-3">
          <Card label="Experiencia" value="+6 años" />
          <Card label="Stack principal" value="Next.js · TypeScript" />
          <Card label="Ubicación" value={profile.location} />
        </div>
      </div>
      <div className="flex-1">
        <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 text-sm text-slate-300 shadow-glow">
          <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-accent/20 blur-3xl" aria-hidden />
          <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl" aria-hidden />
          <div className="relative space-y-4">
            <h2 className="text-2xl font-semibold text-white">Sobre mí</h2>
            <p className="leading-relaxed text-slate-200">{profile.about}</p>
            <p className="text-sm text-slate-400">{profile.availability}</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

interface CardProps {
  label: string;
  value: string;
}

function Card({ label, value }: CardProps) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{label}</p>
      <p className="mt-2 text-lg font-semibold text-white">{value}</p>
    </div>
  );
}
