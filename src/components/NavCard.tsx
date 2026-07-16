'use client';

import { Link } from '@/i18n/navigation';

interface NavCardProps {
  path: string;
  icon: string;
  title: string;
  description: string;
}

export default function NavCard({ path, icon, title, description }: NavCardProps) {
  return (
    <Link href={path} className="block">
      <div
        className="p-6 rounded-xl cursor-pointer transition-all duration-300"
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'var(--shadow)';
        }}
      >
        <div className="text-3xl mb-3">{icon}</div>
        <h3 className="text-xl font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
          {title}
        </h3>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>
      </div>
    </Link>
  );
}
