module.exports = {
  siteUrl: 'https://www.22febmmwa.vercel.app',
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.22febmmwa.vercel.app/post-server-sitemap.xml',
      'https://www.22febmmwa.vercel.app/product-server-sitemap.xml',
      'https://www.22febmmwa.vercel.app/service-server-sitemap.xml',
    ],
  },
};
