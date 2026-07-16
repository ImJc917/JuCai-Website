import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { ThemeProvider } from '@/components/ThemeProvider';
import ScrollFadeIn from '@/components/ScrollFadeIn';

export default async function AboutPage({
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
              {isZh ? '关于我' : 'About Me'}
            </h1>
          </ScrollFadeIn>

          <ScrollFadeIn delay={100}>
            <div
              className="p-8 rounded-xl leading-relaxed text-base"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border)',
                color: 'var(--text-secondary)',
                boxShadow: 'var(--shadow)',
              }}
            >
              {isZh ? (
                <>
                  <p className="mb-4">
                    你好！我是一名即将进入大二的学生，热爱技术和编程。这个网站是我的个人空间，用来记录我的学习历程和分享我的想法。
                  </p>
                  <p className="mb-4">
                    在学习之余，我喜欢探索各种新技术，尝试用代码解决有趣的问题。我相信持续学习和分享是成长最好的方式。
                  </p>
                  <p>
                    欢迎来到我的网站，如果有什么想法或者建议，可以在留言板留言，我会尽快回复！
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-4">
                    Hello! I'm a rising sophomore passionate about technology and programming. This is my personal space where I document my learning journey and share my thoughts.
                  </p>
                  <p className="mb-4">
                    Outside of coursework, I love exploring new technologies and finding creative solutions through code. I believe that continuous learning and sharing are the best ways to grow.
                  </p>
                  <p>
                    Welcome to my website! Feel free to leave a message on the guestbook if you have any thoughts or suggestions.
                  </p>
                </>
              )}
            </div>
          </ScrollFadeIn>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
}
