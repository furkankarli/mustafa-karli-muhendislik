import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.mustafakarlimuhendislik.com';

    // Statik sayfalar
    const routes = [
        '',
        '/hakkimizda',
        '/hizmetler',
        '/projeler',
        '/referanslar',
        '/iletisim',
        '/gizlilik-politikasi',
        '/kullanim-sartlari',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route.includes('gizlilik') || route.includes('kullanim') ? 'monthly' as const : 'weekly' as const,
        priority: route === '' ? 1 : route.includes('gizlilik') || route.includes('kullanim') ? 0.3 : 0.8,
    }));

    return routes;
}

