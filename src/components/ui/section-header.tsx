'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/src/lib/cn';

interface SectionHeaderProps {
  label: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  label,
  title,
  titleAccent,
  subtitle,
  align = 'left',
  className,
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={cn(
        'mb-16 md:mb-20 relative z-10',
        align === 'center' && 'text-center',
        className
      )}
    >
      <div className={cn('section-label', align === 'center' && 'justify-center')}>
        <div className="section-label-line" />
        <p className="section-label-text">{label}</p>/
        {align === 'center' && <div className="section-label-line" />}
      </div>

      <h2 className="text-display-lg text-foreground">
        {title}{' '}
        {titleAccent && (
          <span className="text-gradient-gold">{titleAccent}</span>
        )}
      </h2>

      {subtitle && (
        <p className={cn(
          'text-lg text-muted-foreground mt-6 leading-relaxed',
          align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-xl'
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
