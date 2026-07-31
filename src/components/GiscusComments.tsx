'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

export default function GiscusComments() {
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
      : theme === 'glass'
        ? 'transparent_dark'
        : 'light';

    const giscusConfig = {
      repo: 'ImJc917/JuCai-Website',
      repoId: 'R_kgDOTadtyQ',
      category: 'General',
      categoryId: 'DIC_kwDOTadtyc4DCX_6',
      mapping: 'pathname',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'top',
      lang: 'zh-CN',
      theme: giscusTheme,
    };

    Object.entries(giscusConfig).forEach(([key, value]) => {
      scriptEl.setAttribute(`data-${key}`, value);
    });

    ref.current.appendChild(scriptEl);
  }, [theme]);

  return (
    <div ref={ref} />
  );
}
