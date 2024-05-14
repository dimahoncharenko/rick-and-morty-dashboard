/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com',
      },
    ],
  },
    experimental: {
        optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
      }
};

export default nextConfig;
