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
      : 'light';

    // Use explicit data-attribute names with kebab-case
    // Giscus expects data-repo-id and data-category-id (not data-repoId / data-categoryId)
    scriptEl.setAttribute('data-repo', 'ImJc917/JuCai-Website');
    scriptEl.setAttribute('data-repo-id', 'R_kgDOTadtyQ');
    scriptEl.setAttribute('data-category', 'General');
    scriptEl.setAttribute('data-category-id', 'DIC_kwDOTadtyc4DCX_6');
    scriptEl.setAttribute('data-mapping', 'pathname');
    scriptEl.setAttribute('data-strict', '0');
    scriptEl.setAttribute('data-reactions-enabled', '1');
    scriptEl.setAttribute('data-emit-metadata', '0');
    scriptEl.setAttribute('data-input-position', 'top');
    scriptEl.setAttribute('data-lang', 'zh-CN');
    scriptEl.setAttribute('data-theme', giscusTheme);

    ref.current.appendChild(scriptEl);
  }, [theme]);

  return (
    <div ref={ref} />
  );
}
