'use client';

import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { User, BookOpen, Calendar, MessageSquare, Globe, Mail, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { ThemeProvider } from '@/components/ThemeProvider';
import ScrollFadeIn from '@/components/ScrollFadeIn';
import SpotlightCard from '@/components/SpotlightCard';
import ShinyText from '@/components/ShinyText';
import AnimatedSection, { AnimatedItem } from '@/components/AnimatedSection';
import { categories } from '@/data/skills';
import { socialLinks } from '@/data/social';

export default function HomeContent({ locale }: { locale: string }) {
  const isZh = locale === 'zh';
  const featuredSocials = socialLinks.filter((s) => s.featured);

  const navCards = [
    {
      key: 'about' as const,
      path: '/about',
      icon: <User className="w-7 h-7" />,
      title: isZh ? '关于我' : 'About Me',
      description: isZh ? '了解更多关于我的故事' : 'Learn more about my story',
    },
    {
      key: 'skills' as const,
      path: '/skills',
      icon: <BookOpen className="w-7 h-7" />,
      title: isZh ? '技能与课程' : 'Skills & Courses',
      description: isZh ? '我学过的课程和掌握的技能' : "Courses I've taken and skills I've learned",
    },
    {
      key: 'timeline' as const,
      path: '/timeline',
      icon: <Calendar className="w-7 h-7" />,
      title: isZh ? '学习经历' : 'Timeline',
      description: isZh ? '我的教育背景时间线' : 'My educational journey',
    },
    {
      key: 'guestbook' as const,
      path: '/guestbook',
      icon: <MessageSquare className="w-7 h-7" />,
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
            <motion.div
              className="w-32 h-32 rounded-full mb-6 overflow-hidden border-4 flex items-center justify-center"
              style={{ borderColor: 'var(--accent)', boxShadow: 'var(--shadow)' }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--bg-card)', color: 'var(--accent)' }}
              >
                <span style={{ fontSize: '3.5rem', lineHeight: 1 }}>🥦</span>
              </div>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
              {isZh ? '你好，我是' : "Hi, I'm"}{' '}
              <ShinyText className="font-bold">
                {isZh ? '巨菜' : 'JuCai'}
              </ShinyText>
            </h1>
          </ScrollFadeIn>

          {/* Featured Social Links */}
          {featuredSocials.length > 0 && (
            <ScrollFadeIn delay={0.1}>
              <div className="flex items-center gap-4 mb-4">
                {featuredSocials.map((social) => (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      boxShadow: 'var(--shadow)',
                      color: 'var(--text-primary)',
                    }}
                    title={social.platform}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    {social.icon === 'Globe' ? (
                      <Globe className="w-4 h-4" />
                    ) : social.icon === 'Mail' ? (
                      <Mail className="w-4 h-4" />
                    ) : (
                      <span className="text-xs font-bold">{social.platform.slice(0, 2).toUpperCase()}</span>
                    )}
                  </motion.a>
                ))}
                <Link
                  href="/social"
                  className="px-3 py-1.5 rounded-lg text-sm transition-all duration-200 hover:opacity-70 flex items-center gap-1"
                  style={{
                    color: 'var(--accent)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {isZh ? '更多' : 'More'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </ScrollFadeIn>
          )}
        </section>

        {/* Navigation Cards */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {navCards.map((card) => (
              <AnimatedItem key={card.key}>
                <Link href={card.path} className="block">
                  <SpotlightCard className="p-6 rounded-xl">
                    <div className="mb-3" style={{ color: 'var(--accent)' }}>{card.icon}</div>
                    <h3 className="text-xl font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                      {card.title}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {card.description}
                    </p>
                  </SpotlightCard>
                </Link>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </section>

        {/* Skills Overview */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <ScrollFadeIn>
            <SpotlightCard className="p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                {isZh ? '技能概览' : 'Skills Overview'}
              </h2>
              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <motion.span
                    key={cat.name}
                    className="px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1.5"
                    style={{
                      backgroundColor: 'var(--accent)',
                      color: '#fff',
                      opacity: 0.9,
                    }}
                    whileHover={{ scale: 1.05, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    {isZh ? cat.name : cat.nameEn}
                  </motion.span>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  href="/skills"
                  className="text-sm font-medium transition-colors duration-200 hover:opacity-70 inline-flex items-center gap-1"
                  style={{ color: 'var(--accent)' }}
                >
                  {isZh ? '查看全部' : 'View All'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </SpotlightCard>
          </ScrollFadeIn>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
}
