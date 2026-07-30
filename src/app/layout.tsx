import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JuCai',
  description: '巨菜的个人网站',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
