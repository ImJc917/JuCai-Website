import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { ThemeProvider } from '@/components/ThemeProvider';
import ScrollFadeIn from '@/components/ScrollFadeIn';
import GiscusComments from '@/components/GiscusComments';

export default async function GuestbookPage({
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
              {isZh ? '留言板' : 'Guestbook'}
            </h1>
            <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
              {isZh ? '欢迎留下你的想法和建议' : 'Feel free to leave your thoughts and suggestions'}
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn delay={100}>
            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow)',
              }}
            >
              <GiscusComments />
            </div>
          </ScrollFadeIn>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
}
