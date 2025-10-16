import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
  className?: string;
}

export default function SectionHeading({ title, eyebrow, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-10 flex flex-col gap-3 text-left', className)}>
      {eyebrow && <span className="text-sm uppercase tracking-[0.4em] text-accent">{eyebrow}</span>}
      <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
    </div>
  );
}
