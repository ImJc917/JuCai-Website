'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

export default function GiscusComments() {
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const scriptEl = document.createElement('script');
    scriptEl.src = 'https://giscus.app/client.js';
    scriptEl.async = true;
    scriptEl.crossOrigin = 'anonymous';

    // Giscus configuration - user needs to update these
    const giscusConfig = {
      repo: 'your-username/your-repo',
      repoId: 'YOUR_REPO_ID',
      category: 'General',
      categoryId: 'YOUR_CATEGORY_ID',
      mapping: 'pathname',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'top',
      lang: 'zh-CN',
      theme: theme === 'cyber' ? 'dark' : theme === 'glass' ? 'preferred_color_scheme' : theme === 'macaron' ? 'light' : 'light',
    };

    Object.entries(giscusConfig).forEach(([key, value]) => {
      scriptEl.setAttribute(`data-${key}`, value);
    });

    ref.current.appendChild(scriptEl);
  }, [theme]);

  return (
    <div>
      <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
        留言板使用 Giscus，需要配置 GitHub 仓库才能使用。请参考{' '}
        <a
          href="https://giscus.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent)' }}
        >
          giscus.app
        </a>{' '}
        进行配置，然后更新 <code>GiscusComments.tsx</code> 中的参数。
      </p>
      <div ref={ref} />
    </div>
  );
}
