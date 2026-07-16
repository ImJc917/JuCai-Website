import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Personal Website',
  description: 'My personal website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
