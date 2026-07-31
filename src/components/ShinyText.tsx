'use client';

import type { ReactNode } from 'react';

interface ShinyTextProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export default function ShinyText({
  children,
  className = '',
  speed = 3,
}: ShinyTextProps) {
  return (
    <span
      className={`inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: 'linear-gradient(120deg, var(--text-primary) 30%, var(--accent) 50%, var(--text-primary) 70%)',
        backgroundSize: '200% 100%',
        animation: `shiny-sweep ${speed}s linear infinite`,
      }}
    >
      {children}
      <style>{`
        @keyframes shiny-sweep {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </span>
  );
}
