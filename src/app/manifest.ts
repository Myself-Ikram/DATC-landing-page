import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Diamond Assam Tea Company',
    short_name: 'DATC',
    description: 'Master Blenders of Premium Assam CTC Teas Since 2000',
    start_url: '/',
    display: 'standalone',
    background_color: '#050706',
    theme_color: '#f59e0b',
    icons: [
      {
        src: '/main.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/main.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
