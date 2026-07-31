import { setRequestLocale } from 'next-intl/server';
import SocialContent from './SocialContent';

export default async function SocialPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <SocialContent locale={locale} />;
}
