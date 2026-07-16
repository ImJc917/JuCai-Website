'use client';

import { useRouter, usePathname } from '@/i18n/navigation';

export default function LocaleSwitch() {
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const currentLocale = pathname.split('/')[1];
    const newLocale = currentLocale === 'zh' ? 'en' : 'zh';
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.replace(newPath);
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
