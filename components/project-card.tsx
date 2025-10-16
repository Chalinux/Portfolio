'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import ButtonLink from './button-link';
import { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-white/[0.03] shadow-lg shadow-black/10"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col gap-6 p-8">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
          <p className="text-sm leading-relaxed text-slate-300">{project.description}</p>
        </div>
        <ul className="flex flex-wrap gap-2 text-xs text-slate-400">
          {project.tech.map((tech) => (
            <li key={tech} className="rounded-full border border-white/10 px-3 py-1">
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-3">
          <ButtonLink href={project.demoUrl} target="_blank" rel="noreferrer">
            Demo
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </ButtonLink>
          <ButtonLink href={project.codeUrl} target="_blank" rel="noreferrer" variant="secondary">
            Código
            <Github className="ml-2 h-4 w-4" />
          </ButtonLink>
        </div>
      </div>
    </motion.article>
  );
}
