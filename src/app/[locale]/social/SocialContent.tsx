'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { ThemeProvider } from '@/components/ThemeProvider';
import ScrollFadeIn from '@/components/ScrollFadeIn';
import HoverCard from '@/components/HoverCard';
import LucideIcon from '@/components/LucideIcon';
import { socialLinks, socialCategories } from '@/data/social';

export default function SocialContent({ locale }: { locale: string }) {
  const isZh = locale === 'zh';

  return (
    <ThemeProvider>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
              {isZh ? '社交链接' : 'Social Links'}
            </h1>
            <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
              {isZh ? '你可以在这里找到我' : 'You can find me here'}
            </p>
          </ScrollFadeIn>

          {socialCategories.map((cat, catIndex) => {
            const links = socialLinks.filter(
              (s) => (isZh ? s.category : s.categoryEn) === (isZh ? cat.name : cat.nameEn)
            );
            if (links.length === 0) return null;

            return (
              <ScrollFadeIn key={cat.name} delay={catIndex * 0.1}>
                <div className="mb-8">
                  <h2 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                    {isZh ? cat.name : cat.nameEn}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {links.map((link, linkIndex) => (
                      <motion.a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: linkIndex * 0.06,
                          ease: [0.22, 1, 0.36, 1] as const,
                        }}
                      >
                        <HoverCard className="p-4 rounded-xl flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{
                              backgroundColor: 'var(--accent)',
                              color: '#fff',
                            }}
                          >
                            <LucideIcon name={link.icon} className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>
                              {isZh ? link.platform : link.platformEn}
                            </p>
                            <p className="text-xs truncate" style={{ color: 'var(--text-secondary)' }}>
                              {link.url}
                            </p>
                          </div>
                          <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--text-secondary)' }} />
                        </HoverCard>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </ScrollFadeIn>
            );
          })}
        </div>
      </main>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
}
