'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="border-t mt-20"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            {t('copyright', { name: 'YourName' })}
          </p>
          <button
            onClick={scrollToTop}
            className="text-sm px-3 py-1 rounded-lg transition-colors duration-200 hover:opacity-70"
            style={{
              color: 'var(--accent)',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border)',
            }}
          >
            ↑ {t('copyright').includes('©') ? '回到顶部' : 'Back to Top'}
          </button>
        </div>
      </div>
    </footer>
  );
}
