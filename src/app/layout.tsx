import type { Metadata, Viewport } from 'next';
import { Prata, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { ClientProviders } from '@/components/providers/ClientProviders';

const prata = Prata({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-prata',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://diamondassamtea.com'),
  title: 'Diamond Assam Tea Company | Premium Assam Teas Since 2000',
  description:
    "Diamond Assam Tea Company (DATC) — Curating India's finest garden-fresh Assam CTC teas since 2000. Home to Star GoodLuck Tea, Diamond Mixture (DMT), Mahek Elachi, Star Tea, Sultan, and Telangana Mixture (TMT).",
  keywords: [
    'Diamond Assam Tea Company',
    'DATC',
    'Assam Tea',
    'Star GoodLuck Tea',
    'Diamond Mixture Tea',
    'DMT',
    'Mahek Elachi Tea',
    'Telangana Mixture Tea',
    'TMT',
    'Sultan Tea',
    'Mahbubnagar Tea Company',
  ],
  icons: {
    icon: '/main.png',
  },
  openGraph: {
    title: 'Diamond Assam Tea Company | Premium Assam Teas',
    description:
      'Experience the gold standard in authentic Assam CTC blends. 25+ years of brewing legacy.',
    images: ['/all-products-with-bg.png'],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${prata.variable} ${sourceSans.variable} antialiased bg-[#050706] text-white selection:bg-amber-500/30 selection:text-amber-200`}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
