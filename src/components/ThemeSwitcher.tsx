'use client';

import { useTheme } from './ThemeProvider';
import { useTranslations } from 'next-intl';

const themeEmojis: Record<string, string> = {
  cyber: '🌙',
  minimal: '☀️',
  macaron: '🥦',
};

export default function ThemeSwitcher() {
  const { theme, cycleTheme } = useTheme();
  const t = useTranslations('theme');

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-lg hover:opacity-80 transition-all duration-200"
      style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
      title={t('switch')}
      aria-label={t('switch')}
    >
      <span style={{ fontSize: '1.125rem', lineHeight: 1 }}>{themeEmojis[theme]}</span>
    </button>
  );
}
