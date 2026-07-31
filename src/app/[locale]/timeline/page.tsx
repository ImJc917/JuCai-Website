import { setRequestLocale } from 'next-intl/server';
import TimelineContent from './TimelineContent';

export default async function TimelinePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <TimelineContent locale={locale} />;
}
