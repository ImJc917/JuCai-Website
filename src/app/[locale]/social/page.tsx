import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { ThemeProvider } from '@/components/ThemeProvider';
import ScrollFadeIn from '@/components/ScrollFadeIn';
import HoverCard from '@/components/HoverCard';
import { socialLinks, socialCategories } from '@/data/social';

export default async function SocialPage({
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
              <ScrollFadeIn key={cat.name} delay={catIndex * 100}>
                <div className="mb-8">
                  <h2 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                    {isZh ? cat.name : cat.nameEn}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {links.map((link) => (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <HoverCard className="p-4 rounded-xl flex items-center gap-3 hover:scale-[1.01]">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm"
                            style={{
                              backgroundColor: 'var(--accent)',
                              color: '#fff',
                            }}
                          >
                            {link.platform.slice(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>
                              {isZh ? link.platform : link.platformEn}
                            </p>
                            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                              {link.url}
                            </p>
                          </div>
                        </HoverCard>
                      </a>
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
