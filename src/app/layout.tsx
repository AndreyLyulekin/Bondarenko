import type { Metadata } from 'next';
import './globals.css';
import { getContent } from '@/lib/content';

export const metadata: Metadata = (() => {
  const c = getContent();
  return {
    title: c.meta.title,
    description: c.meta.description,
    metadataBase: new URL('https://example.com'),
    openGraph: {
      title: c.meta.title,
      description: c.meta.description,
      type: 'website',
      locale: 'ru_RU'
    }
  };
})();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
