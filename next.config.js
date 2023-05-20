/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ['@tremor/react']
  },
  images: {
    domains: [
      "placeimg.com",
      "i.postimg.cc",
      "images.unsplash.com",
      "img.freepik.com",
    ],
  },
};

module.exports = nextConfig;
