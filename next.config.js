/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['images.unsplash.com', 'yt3.ggpht.com', 'sanity.io']
  }
}

module.exports = nextConfig
