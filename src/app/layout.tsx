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
    "Diamond Assam Tea Company (DATC) — Renowned as the best tea powder and kadak chai blenders in Mahbubnagar (Mahaboobnagar) since 2000. Master blenders of Star GoodLuck Tea, Mahek Elachi, Diamond Mixture (DMT), and Sultan Tea. Leading Assam CTC tea powder wholesale distributors across Telangana & South India.",
  keywords: [
    // Local Mahbubnagar & Spelling Variations
    'best tea in mahbubnagar',
    'best tea in mahaboobnagar',
    'best tea in mahabubnagar',
    'best tea powder in mahbubnagar',
    'best tea powder in mahaboobnagar',
    'best tea brand in mahbubnagar',
    'tea mahbubnagar',
    'assam tea mahbubnagar',
    'diamond assam tea mahbubnagar',
    'tea powder wholesale in mahbubnagar',
    'tea distributors mahbubnagar',
    'tea agency in mahbubnagar',
    'mbnr tea powder',
    // Chai Keywords
    'best chai in mahbubnagar',
    'best chai patti in telangana',
    'kadak chai powder mahbubnagar',
    'hotel tea powder suppliers mahbubnagar',
    // Brand Variations
    'star goodluck tea',
    'star good luck tea',
    'goodluck tea mahbubnagar',
    'diamond assam',
    'diamond assam tea company',
    'datc',
    'diamond assam tea co',
    'diamond mixture tea',
    'dmt tea powder',
    'mahek elachi tea',
    'mahek elaichi tea',
    'cardamom tea powder mahbubnagar',
    'sultan tea',
    'star tea',
    'telangana mixture tea',
    'tmt tea',
    // Regional & B2B Wholesale
    'tea powder wholesale telangana',
    'tea powder manufacturers in telangana',
    'tea powder wholesale jadcherla',
    'bulk assam ctc tea suppliers',
    'hotel chai powder wholesale',
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
      "Best tea powder and kadak chai in Mahbubnagar since 2000. Master blenders of Star GoodLuck Tea, Diamond Mixture, and Mahek Elachi. Wholesale & retail distribution across Telangana.",
    images: [
      {
        url: '/all-products-with-bg.png',
        width: 1200,
        height: 630,
        alt: 'Star GoodLuck Tea - Diamond Assam Tea Company Mahbubnagar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Star GoodLuck Tea | Blended by Diamond Assam Tea Co.',
    description:
      "Best tea powder and kadak chai in Mahbubnagar since 2000. Master blenders of Star GoodLuck Tea, Diamond Mixture, and Mahek Elachi.",
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
      '@type': ['LocalBusiness', 'WholesaleStore', 'Organization'],
      '@id': 'https://stargoodlucktea.datc.space/#organization',
      name: 'Diamond Assam Tea Company',
      alternateName: [
        'DATC',
        'Star GoodLuck Tea Mahbubnagar',
        'Diamond Assam Tea Co.',
        'Best Tea Powder in Mahbubnagar',
        'Best Tea in Mahbubnagar',
        'Best Tea in Mahaboobnagar',
        'Diamond Assam Tea Mahaboobnagar',
        'Best Chai Patti Mahbubnagar',
        'Kadak Chai Powder Mahbubnagar',
      ],
      url: 'https://stargoodlucktea.datc.space',
      logo: {
        '@type': 'ImageObject',
        url: 'https://stargoodlucktea.datc.space/main.png',
        caption: 'Diamond Assam Tea Company - Star GoodLuck Tea',
      },
      image: 'https://stargoodlucktea.datc.space/all-products-with-bg.png',
      foundingDate: '2000',
      description:
        'Master blenders and wholesale distributors of the best Assam CTC tea powder and kadak chai blends in Mahbubnagar, Telangana since 2000. Home of Star GoodLuck Tea, Diamond Mixture, and Mahek Elachi.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Mahbubnagar District',
        addressLocality: 'Mahbubnagar',
        addressRegion: 'Telangana',
        postalCode: '509001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 16.7470061,
        longitude: 77.9836853,
      },
      hasMap: 'https://maps.app.goo.gl/NLrYzwxVEsbgeesc7',
      telephone: '+91-9985342783',
      priceRange: '₹₹',
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Mahbubnagar' },
        { '@type': 'AdministrativeArea', name: 'Mahaboobnagar' },
        { '@type': 'AdministrativeArea', name: 'Mahabubnagar' },
        { '@type': 'AdministrativeArea', name: 'Jadcherla' },
        { '@type': 'AdministrativeArea', name: 'Wanaparthy' },
        { '@type': 'AdministrativeArea', name: 'Nagarkurnool' },
        { '@type': 'AdministrativeArea', name: 'Telangana' },
        { '@type': 'AdministrativeArea', name: 'South India' },
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91-9985342783',
          contactType: 'sales and wholesale distribution',
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
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Tea Powder & Chai Blends in Mahbubnagar',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Star GoodLuck Tea Powder',
              image: 'https://stargoodlucktea.datc.space/star-goodluck-tea-big.png',
              description: 'Best Assam CTC tea powder blend in Mahbubnagar with rich golden liquor.',
              brand: {
                '@type': 'Brand',
                name: 'Star GoodLuck Tea',
              },
              offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'INR',
                lowPrice: '70',
                highPrice: '450',
                offerCount: '3',
                availability: 'https://schema.org/InStock',
                url: 'https://stargoodlucktea.datc.space',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '142',
                bestRating: '5',
                worstRating: '1',
              },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Mahek Elachi Cardamom Chai',
              image: 'https://stargoodlucktea.datc.space/mahek.png',
              description: 'Premium Assam tea infused with real crushed green cardamom pods in Mahbubnagar.',
              brand: {
                '@type': 'Brand',
                name: 'Mahek Elachi',
              },
              offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'INR',
                lowPrice: '80',
                highPrice: '520',
                offerCount: '3',
                availability: 'https://schema.org/InStock',
                url: 'https://stargoodlucktea.datc.space',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '98',
                bestRating: '5',
                worstRating: '1',
              },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Diamond Mixture (DMT) Strong Kadak Tea',
              image: 'https://stargoodlucktea.datc.space/dmt-cutout.png',
              description: 'High-strength Assam CTC tea powder ideal for hotel chai and milk tea in Mahbubnagar.',
              brand: {
                '@type': 'Brand',
                name: 'Diamond Mixture (DMT)',
              },
              offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'INR',
                lowPrice: '65',
                highPrice: '420',
                offerCount: '3',
                availability: 'https://schema.org/InStock',
                url: 'https://stargoodlucktea.datc.space',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                reviewCount: '115',
                bestRating: '5',
                worstRating: '1',
              },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Wholesale Tea Powder Agency & Dealership',
              description: 'Bulk tea powder supply and dealership for hotels, retailers, and distributors in Mahbubnagar, Jadcherla, and Telangana.',
            },
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://stargoodlucktea.datc.space/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Which is the best tea powder in Mahbubnagar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Diamond Assam Tea Company (DATC), founded in 2000 in Mahbubnagar, is widely recognized as one of the best tea powder blenders in Mahbubnagar and Telangana, celebrated for Star GoodLuck Tea, Diamond Mixture (DMT), and Mahek Elachi cardamom tea.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where can I buy Star GoodLuck Tea wholesale in Mahbubnagar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Star GoodLuck Tea and Diamond Assam blends are available directly through Diamond Assam Tea Company’s wholesale and dealership network in Mahbubnagar, Telangana. Contact +91 99853 42783 for bulk dealership orders.',
          },
        },
        {
          '@type': 'Question',
          name: 'What brands are blended by Diamond Assam Tea Company in Mahbubnagar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Diamond Assam Tea Company blends and distributes Star GoodLuck Tea, Mahek Elachi (cardamom tea), Diamond Mixture (DMT), Sultan Tea, Star Tea, and Telangana Mixture (TMT).',
          },
        },
        {
          '@type': 'Question',
          name: 'Which tea brand is best for hotel kadak chai in Mahbubnagar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Diamond Mixture (DMT) and Star GoodLuck Tea by Diamond Assam Tea Company are preferred by hotels and tea stalls across Mahbubnagar for their high extraction strength, rich color, and authentic kadak Assam chai flavor.',
          },
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://stargoodlucktea.datc.space/#website',
      url: 'https://stargoodlucktea.datc.space',
      name: 'Star GoodLuck Tea | Diamond Assam Tea Company',
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
