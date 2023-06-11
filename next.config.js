/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    path: '/_next/image',
    deviceSizes: [320, 640, 768, 1024, 1280],
  },
}

module.exports = nextConfig
