import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { ThemeProvider } from '@/components/ThemeProvider';
import ScrollFadeIn from '@/components/ScrollFadeIn';
import { timeline } from '@/data/timeline';

export default async function TimelinePage({
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
              <ScrollFadeIn key={entry.school} delay={index * 150}>
                <div className="relative flex gap-6 mb-10 last:mb-0">
                  {/* Dot */}
                  <div
                    className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: 'var(--accent)',
                      color: '#fff',
                      boxShadow: 'var(--shadow)',
                    }}
                  >
                    <span className="text-lg">
                      {index === 0 ? '🏫' : index === 1 ? '📖' : index === 2 ? '🎓' : '🏛️'}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1 p-5 rounded-xl"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      boxShadow: 'var(--shadow)',
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
                  </div>
                </div>
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
