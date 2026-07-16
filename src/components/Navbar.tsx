'use client';

import { useState, useEffect } from 'react';
import { Link, usePathname } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import ThemeSwitcher from './ThemeSwitcher';
import LocaleSwitch from './LocaleSwitch';

const navItems = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'skills', path: '/skills' },
  { key: 'timeline', path: '/timeline' },
  { key: 'guestbook', path: '/guestbook' },
  { key: 'social', path: '/social' },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('nav');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'var(--navbar-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
            My Website
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.path}
                className="text-sm font-medium transition-colors duration-200 hover:opacity-70"
                style={{
                  color: pathname === (item.path === '/' ? `/${pathname.split('/')[1]}` : item.path)
                    ? 'var(--accent)'
                    : 'var(--text-secondary)',
                }}
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="flex items-center gap-2 ml-4">
              <ThemeSwitcher />
              <LocaleSwitch />
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeSwitcher />
            <LocaleSwitch />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2"
              style={{ color: 'var(--text-primary)' }}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="md:hidden pb-4 border-t"
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="flex flex-col gap-2 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  style={{
                    color: pathname === (item.path === '/' ? `/${pathname.split('/')[1]}` : item.path)
                      ? 'var(--accent)'
                      : 'var(--text-secondary)',
                    backgroundColor: pathname === (item.path === '/' ? `/${pathname.split('/')[1]}` : item.path)
                      ? 'var(--bg-card)'
                      : 'transparent',
                  }}
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
