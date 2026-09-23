import { cn } from '@/src/lib/cn';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  variant?: 'default' | 'muted' | 'accent';
  noNoise?: boolean;
}

export function Section({ children, id, className, variant = 'default', noNoise = false }: SectionProps) {
  const variants = {
    default: 'bg-background',
    muted: 'bg-card/30',
    accent: 'bg-muted/30',
  };

  return (
    <section
      id={id}
      className={cn(
        'section-padding relative overflow-hidden',
        variants[variant],
        !noNoise && 'noise-bg',
        className
      )}
    >
      {children}
    </section>
  );
}
