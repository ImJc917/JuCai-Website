'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

export default function LocaleSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const toggleLocale = () => {
    const newLocale = locale === 'zh' ? 'en' : 'zh';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={toggleLocale}
      className="px-3 py-1.5 rounded-lg text-sm font-medium hover:opacity-80 transition-all duration-200"
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border)',
        color: 'var(--text-primary)',
      }}
    >
      EN / 中
    </button>
  );
}
