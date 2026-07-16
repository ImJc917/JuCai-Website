import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { ThemeProvider } from '@/components/ThemeProvider';
import ScrollFadeIn from '@/components/ScrollFadeIn';
import NavCard from '@/components/NavCard';
import { categories } from '@/data/skills';
import { socialLinks } from '@/data/social';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isZh = locale === 'zh';
  const featuredSocials = socialLinks.filter((s) => s.featured);

  const navCards = [
    {
      key: 'about' as const,
      path: '/about',
      icon: '👤',
      title: isZh ? '关于我' : 'About Me',
      description: isZh ? '了解更多关于我的故事' : 'Learn more about my story',
    },
    {
      key: 'skills' as const,
      path: '/skills',
      icon: '📚',
      title: isZh ? '技能与课程' : 'Skills & Courses',
      description: isZh ? '我学过的课程和掌握的技能' : "Courses I've taken and skills I've learned",
    },
    {
      key: 'timeline' as const,
      path: '/timeline',
      icon: '📅',
      title: isZh ? '学习经历' : 'Timeline',
      description: isZh ? '我的教育背景时间线' : 'My educational journey',
    },
    {
      key: 'guestbook' as const,
      path: '/guestbook',
      icon: '💬',
      title: isZh ? '留言板' : 'Guestbook',
      description: isZh ? '留下你想说的话' : 'Leave your thoughts here',
    },
  ];

  return (
    <ThemeProvider>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        {/* Profile Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <ScrollFadeIn>
            <div
              className="w-32 h-32 rounded-full mb-6 overflow-hidden border-4"
              style={{ borderColor: 'var(--accent)', boxShadow: 'var(--shadow)' }}
            >
              <div
                className="w-full h-full flex items-center justify-center text-5xl"
                style={{ backgroundColor: 'var(--bg-card)', color: 'var(--accent)' }}
              >
                😊
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
              {isZh ? '你好，我是' : "Hi, I'm"}{' '}
              <span style={{ color: 'var(--accent)' }}>YourName</span>
            </h1>
            <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
              {isZh ? '大二学生 · 热爱技术 · 欢迎来到我的个人空间' : 'Sophomore · Tech Enthusiast · Welcome to my space'}
            </p>
          </ScrollFadeIn>

          {/* Featured Social Links */}
          {featuredSocials.length > 0 && (
            <ScrollFadeIn delay={100}>
              <div className="flex items-center gap-4 mb-4">
                {featuredSocials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      boxShadow: 'var(--shadow)',
                      color: 'var(--text-primary)',
                    }}
                    title={social.platform}
                  >
                    <span className="text-sm font-bold">
                      {social.icon === 'github' ? 'GH' : social.icon === 'email' ? '@' : social.platform.slice(0, 2).toUpperCase()}
                    </span>
                  </a>
                ))}
                <Link
                  href="/social"
                  className="px-3 py-1.5 rounded-lg text-sm transition-all duration-200 hover:opacity-70"
                  style={{
                    color: 'var(--accent)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {isZh ? '更多 →' : 'More →'}
                </Link>
              </div>
            </ScrollFadeIn>
          )}
        </section>

        {/* Navigation Cards */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {navCards.map((card, index) => (
              <ScrollFadeIn key={card.key} delay={index * 100}>
                <NavCard
                  path={card.path}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              </ScrollFadeIn>
            ))}
          </div>
        </section>

        {/* Skills Overview */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <ScrollFadeIn>
            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow)',
              }}
            >
              <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                {isZh ? '技能概览' : 'Skills Overview'}
              </h2>
              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <span
                    key={cat.name}
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: 'var(--accent)',
                      color: '#fff',
                      opacity: 0.9,
                    }}
                  >
                    {cat.icon} {isZh ? cat.name : cat.nameEn}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  href="/skills"
                  className="text-sm font-medium transition-colors duration-200 hover:opacity-70"
                  style={{ color: 'var(--accent)' }}
                >
                  {isZh ? '查看全部 →' : 'View All →'}
                </Link>
              </div>
            </div>
          </ScrollFadeIn>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
}
