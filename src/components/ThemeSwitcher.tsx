'use client';

import { Moon, Sun, Leaf } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useTranslations } from 'next-intl';

const themeIcons: Record<string, React.ReactNode> = {
  cyber: <Moon className="w-5 h-5" />,
  minimal: <Sun className="w-5 h-5" />,
  macaron: <Leaf className="w-5 h-5" />,
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
      <span style={{ color: 'var(--text-primary)' }}>{themeIcons[theme]}</span>
    </button>
  );
}
