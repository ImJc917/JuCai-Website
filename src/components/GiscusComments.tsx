'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

export default function GiscusComments({ locale = 'zh' }: { locale?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!ref.current) return;
    // Clear previous giscus instance on theme change
    ref.current.innerHTML = '';

    const scriptEl = document.createElement('script');
    scriptEl.src = 'https://giscus.app/client.js';
    scriptEl.async = true;
    scriptEl.crossOrigin = 'anonymous';

    const giscusTheme = theme === 'cyber'
      ? 'dark'
      : 'light';

    // Use "specific" mapping with a fixed term so that all locale pages
    // (e.g. /zh/guestbook and /en/guestbook) share the same discussion thread
    scriptEl.setAttribute('data-repo', 'ImJc917/JuCai-Website');
    scriptEl.setAttribute('data-repo-id', 'R_kgDOTadtyQ');
    scriptEl.setAttribute('data-category', 'General');
    scriptEl.setAttribute('data-category-id', 'DIC_kwDOTadtyc4DCX_6');
    scriptEl.setAttribute('data-mapping', 'specific');
    scriptEl.setAttribute('data-term', 'guestbook');
    scriptEl.setAttribute('data-strict', '0');
    scriptEl.setAttribute('data-reactions-enabled', '1');
    scriptEl.setAttribute('data-emit-metadata', '0');
    scriptEl.setAttribute('data-input-position', 'top');
    scriptEl.setAttribute('data-lang', locale === 'zh' ? 'zh-CN' : 'en');
    scriptEl.setAttribute('data-theme', giscusTheme);

    ref.current.appendChild(scriptEl);
  }, [theme, locale]);

  return (
    <div ref={ref} />
  );
}
