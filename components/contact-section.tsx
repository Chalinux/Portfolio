import Link from 'next/link';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import AnimatedSection from './animated-section';
import SectionHeading from './section-heading';
import ButtonLink from './button-link';
import { profile } from '@/data/profile';

const icons = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Twitter,
};

export default function ContactSection() {
  return (
    <AnimatedSection id="contacto" className="mx-auto w-full max-w-6xl px-6 pb-32">
      <SectionHeading eyebrow="Contacto" title="Construyamos algo increíble" />
      <div className="grid gap-8 rounded-3xl border border-white/5 bg-white/[0.03] p-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6 text-slate-300">
          <p className="text-lg leading-relaxed">
            Estoy siempre abierto a escuchar nuevas ideas y colaborar con equipos que compartan una visión ambiciosa. Si mi trabajo resuena con lo que estás creando, escribime y coordinamos una charla.
          </p>
          <ButtonLink href={`mailto:${profile.email}`}>
            Escribime
            <Mail className="ml-2 h-4 w-4" />
          </ButtonLink>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-[0.4em] text-accent">Redes</h3>
          <ul className="space-y-3">
            {profile.socials.map((social) => {
              const Icon = icons[social.label as keyof typeof icons] ?? Mail;
              return (
                <li key={social.href}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-accent/60 hover:bg-accent/20"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-accent">
                        <Icon className="h-4 w-4" />
                      </span>
                      {social.label}
                    </span>
                    <span className="text-xs uppercase tracking-[0.3em] text-slate-400 transition group-hover:text-white">
                      Visitar
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
}
