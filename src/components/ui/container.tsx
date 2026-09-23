import { cn } from '@/src/lib/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({ children, className, as: Component = 'div' }: ContainerProps) {
  return (
    <Component className={cn('section-container', className)}>
      {children}
    </Component>
  );
}
