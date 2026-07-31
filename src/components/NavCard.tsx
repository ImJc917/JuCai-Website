'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import type { ReactNode } from 'react';

interface NavCardProps {
  path: string;
  icon: ReactNode;
  title: string;
  description: string;
}

export default function NavCard({ path, icon, title, description }: NavCardProps) {
  return (
    <Link href={path} className="block">
      <motion.div
        className="p-6 rounded-xl cursor-pointer overflow-hidden relative"
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow)',
        }}
        whileHover={{ y: -4 }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
      >
        <div className="mb-3" style={{ color: 'var(--accent)' }}>{icon}</div>
        <h3 className="text-xl font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
          {title}
        </h3>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>
      </motion.div>
    </Link>
  );
}
