import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { ThemeProvider } from '@/components/ThemeProvider';
import ScrollFadeIn from '@/components/ScrollFadeIn';
import HoverCard from '@/components/HoverCard';
import { skills, categories } from '@/data/skills';

export default async function SkillsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

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
              <ScrollFadeIn key={cat.name} delay={catIndex * 100}>
                <div className="mb-10">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                    <span>{cat.icon}</span> {isZh ? cat.name : cat.nameEn}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {catSkills.map((skill, skillIndex) => (
                      <HoverCard
                        key={skill.name}
                        className="p-5 rounded-xl hover:scale-[1.01]"
                      >
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
