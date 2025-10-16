import { profile } from '@/data/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-slate-950/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-center text-sm text-slate-400 md:flex-row md:text-left">
        <p>&copy; {year} {profile.name}. Todos los derechos reservados.</p>
        <p className="text-slate-500">Hecho con Next.js &amp; Tailwind CSS.</p>
      </div>
    </footer>
  );
}
