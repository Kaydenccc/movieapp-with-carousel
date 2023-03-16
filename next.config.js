/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['occ-0-6715-58.1.nflxso.net', 'demo.amytheme.com'],
  },
};

module.exports = nextConfig;
