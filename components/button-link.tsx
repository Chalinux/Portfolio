import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  target?: string;
  rel?: string;
}

export default function ButtonLink({ href, children, variant = 'primary', className, target, rel }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
        variant === 'primary'
          ? 'bg-gradient-to-r from-accent via-accent-soft to-cyan-400 text-slate-900 shadow-glow hover:opacity-95'
          : 'border border-white/10 bg-white/5 text-slate-100 hover:border-accent/40 hover:text-white',
        className
      )}
      target={target}
      rel={rel}
    >
      {children}
    </Link>
  );
}
