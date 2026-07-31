import { setRequestLocale } from 'next-intl/server';
import SkillsContent from './SkillsContent';

export default async function SkillsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <SkillsContent locale={locale} />;
}
