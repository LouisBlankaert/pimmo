/** @type {import('next').NextConfig} */

// Définir directement les domaines d'images
const IMAGE_DOMAINS = ['img.freepik.com'];

const nextConfig = {
  images: {
    domains: IMAGE_DOMAINS,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        pathname: '/**',
      },
    ],
  },
  // Enable strict mode for better development experience
  reactStrictMode: true,
};

module.exports = nextConfig;
