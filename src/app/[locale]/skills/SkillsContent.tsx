'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { ThemeProvider } from '@/components/ThemeProvider';
import ScrollFadeIn from '@/components/ScrollFadeIn';
import HoverCard from '@/components/HoverCard';
import LucideIcon from '@/components/LucideIcon';
import { skills, categories } from '@/data/skills';

export default function SkillsContent({ locale }: { locale: string }) {
  const isZh = locale === 'zh';

  return (
    <ThemeProvider>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <h1 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
              {isZh ? '技能与课程' : 'Skills & Courses'}
            </h1>
          </ScrollFadeIn>

          {categories.map((cat, catIndex) => {
            const catSkills = skills.filter(
              (s) => (isZh ? s.category : s.categoryEn) === (isZh ? cat.name : cat.nameEn)
            );
            if (catSkills.length === 0) return null;

            return (
              <ScrollFadeIn key={cat.name} delay={catIndex * 0.1}>
                <div className="mb-10">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                    <span style={{ color: 'var(--accent)' }}>
                      <LucideIcon name={cat.icon} className="w-5 h-5" />
                    </span>
                    {isZh ? cat.name : cat.nameEn}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {catSkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: skillIndex * 0.08,
                          ease: [0.22, 1, 0.36, 1] as const,
                        }}
                      >
                        <HoverCard className="p-5 rounded-xl">
                          <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--text-primary)' }}>
                            {isZh ? skill.name : skill.nameEn}
                          </h3>
                          <p className="text-xs mb-2 font-medium" style={{ color: 'var(--accent)' }}>
                            {isZh ? skill.semester : skill.semesterEn}
                          </p>
                          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                            {isZh ? skill.description : skill.descriptionEn}
                          </p>
                        </HoverCard>
                      </motion.div>
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
