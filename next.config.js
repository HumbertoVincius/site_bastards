/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
}

const withNextIntl = require('next-intl/plugin')(
  './i18n.ts'
)

module.exports = withNextIntl(nextConfig)

