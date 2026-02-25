export default function sitemap() {
    const baseUrl = 'https://pacewisp.com';

    const routes = [
        '',
        '/about',
        '/apply',
        '/blog',
        '/careers',
        '/faqs',
        '/features',
        '/pricing',
        '/privacy',
        '/products',
        '/support',
        '/terms',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));
}
