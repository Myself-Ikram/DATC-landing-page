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
  metadataBase: new URL('https://stargoodlucktea.datc.space'),
  title: {
    default: 'Star GoodLuck Tea | Blended by Diamond Assam Tea Co.',
    template: '%s | Star GoodLuck Tea',
  },
  description:
    "Diamond Assam Tea Company (DATC) — Master blenders of India's finest garden-fresh Assam CTC teas since 2000. Home to Star GoodLuck Tea, Diamond Mixture (DMT), Mahek Elachi, Sultan Tea, and Telangana Mixture (TMT). Wholesale distribution across South India.",
  keywords: [
    'Diamond Assam Tea Company',
    'DATC',
    'Diamond Assam Tea Co',
    'Assam Tea',
    'Assam CTC Tea',
    'Star GoodLuck Tea',
    'Diamond Mixture Tea',
    'DMT Tea',
    'Mahek Elachi Tea',
    'Telangana Mixture Tea',
    'TMT Tea',
    'Sultan Tea',
    'Star Tea',
    'Tea Wholesale Distributors Telangana',
    'Tea Powder Suppliers South India',
    'Mahbubnagar Tea Blenders',
    'Premium Black Tea India',
  ],
  authors: [{ name: 'Diamond Assam Tea Company', url: 'https://stargoodlucktea.datc.space' }],
  creator: 'Diamond Assam Tea Company',
  publisher: 'Diamond Assam Tea Company',
  category: 'Food & Beverage',
  alternates: {
    canonical: './',
  },
  icons: {
    icon: [
      { url: '/main.png', sizes: '32x32', type: 'image/png' },
      { url: '/main.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/main.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://stargoodlucktea.datc.space',
    siteName: 'Diamond Assam Tea Company',
    title: 'Star GoodLuck Tea | Blended by Diamond Assam Tea Co.',
    description:
      "Master blenders of India's finest garden-fresh Assam CTC teas since 2000. 25+ years of brewing legacy. Flagship house of Star GoodLuck Tea, Diamond Mixture, and Mahek Elachi.",
    images: [
      {
        url: '/all-products-with-bg.png',
        width: 1200,
        height: 630,
        alt: 'Diamond Assam Tea Company - Master Blends Collection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Star GoodLuck Tea | Blended by Diamond Assam Tea Co.',
    description:
      "Master blenders of India's finest garden-fresh Assam CTC teas since 2000. 25+ years of brewing legacy.",
    images: ['/all-products-with-bg.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://stargoodlucktea.datc.space/#organization',
      name: 'Diamond Assam Tea Company',
      alternateName: ['DATC', 'Diamond Assam Tea Co.', 'Diamond Assam Tea Company Mahbubnagar'],
      url: 'https://stargoodlucktea.datc.space',
      logo: {
        '@type': 'ImageObject',
        url: 'https://stargoodlucktea.datc.space/main.png',
        caption: 'Diamond Assam Tea Company Logo',
      },
      foundingDate: '2000',
      description:
        "Premier blenders and distributors of authentic Assam CTC black teas across South India. Founded in 2000 in Mahbubnagar, Telangana.",
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mahbubnagar',
        addressRegion: 'Telangana',
        addressCountry: 'IN',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91-9985342783',
          contactType: 'sales and wholesale inquiries',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi', 'Telugu', 'Urdu'],
        },
      ],
      brand: [
        { '@type': 'Brand', name: 'Star GoodLuck Tea' },
        { '@type': 'Brand', name: 'Diamond Mixture (DMT)' },
        { '@type': 'Brand', name: 'Mahek Elachi' },
        { '@type': 'Brand', name: 'Star Tea' },
        { '@type': 'Brand', name: 'Sultan Tea' },
        { '@type': 'Brand', name: 'Telangana Mixture (TMT)' },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://stargoodlucktea.datc.space/#website',
      url: 'https://stargoodlucktea.datc.space',
      name: 'Diamond Assam Tea Company',
      publisher: {
        '@id': 'https://stargoodlucktea.datc.space/#organization',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${prata.variable} ${sourceSans.variable} antialiased bg-[#050706] text-white selection:bg-amber-500/30 selection:text-amber-200`}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
