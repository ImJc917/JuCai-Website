'use client';

import { useRef, useEffect, useState, type ReactNode } from 'react';

interface ScrollFadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollFadeIn({ children, className = '', delay = 0 }: ScrollFadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Start as null to avoid SSR mismatch with opacity:0 inline style
  const [isVisible, setIsVisible] = useState<boolean | null>(null);

  useEffect(() => {
    // Client-side: start hidden, then animate in
    setIsVisible(false);

    const el = ref.current;
    if (!el) return;

    // Short delay to ensure the hidden state is painted before triggering animation
    const checkTimer = setTimeout(() => {
      const rect = el.getBoundingClientRect();
      const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (alreadyVisible) {
        const showTimer = setTimeout(() => setIsVisible(true), 100 + delay);
        return () => clearTimeout(showTimer);
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(checkTimer);
  }, [delay]);

  // During SSR and initial hydration, don't apply hidden styles
  if (isVisible === null) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
