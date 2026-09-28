import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://stargoodlucktea.datc.space/sitemap.xml',
    host: 'https://stargoodlucktea.datc.space',
  };
}
