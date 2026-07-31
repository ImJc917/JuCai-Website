'use client';

import { motion } from 'framer-motion';
import { School, BookOpen, GraduationCap, Landmark } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { ThemeProvider } from '@/components/ThemeProvider';
import ScrollFadeIn from '@/components/ScrollFadeIn';
import { timeline } from '@/data/timeline';

const timelineIcons = [
  <School className="w-5 h-5" key="school" />,
  <BookOpen className="w-5 h-5" key="book" />,
  <GraduationCap className="w-5 h-5" key="grad" />,
  <Landmark className="w-5 h-5" key="landmark" />,
];

export default function TimelineContent({ locale }: { locale: string }) {
  const isZh = locale === 'zh';

  return (
    <ThemeProvider>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <h1 className="text-3xl sm:text-4xl font-bold mb-12" style={{ color: 'var(--text-primary)' }}>
              {isZh ? '学习经历' : 'Timeline'}
            </h1>
          </ScrollFadeIn>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5"
              style={{ backgroundColor: 'var(--border)' }}
            />

            {timeline.map((entry, index) => (
              <ScrollFadeIn key={entry.school} delay={index * 0.12}>
                <motion.div
                  className="relative flex gap-6 mb-10 last:mb-0"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  {/* Dot */}
                  <motion.div
                    className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: 'var(--accent)',
                      color: '#fff',
                      boxShadow: 'var(--shadow)',
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    {timelineIcons[index]}
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="flex-1 p-5 rounded-xl"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      boxShadow: 'var(--shadow)',
                    }}
                    whileHover={{
                      y: -2,
                      boxShadow: 'var(--shadow-hover)',
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 25,
                    }}
                  >
                    <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                      {isZh ? entry.school : entry.schoolEn}
                    </h3>
                    <p className="text-sm mb-1" style={{ color: 'var(--accent)' }}>
                      {isZh ? entry.period : entry.periodEn}
                    </p>
                    {entry.department && (
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {isZh ? entry.department : entry.departmentEn}
                      </p>
                    )}
                  </motion.div>
                </motion.div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
}
