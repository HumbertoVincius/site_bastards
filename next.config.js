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
  // Configuração para o Sanity Studio
  transpilePackages: ['next-sanity'],
  // Configuração para styled-components
  compiler: {
    styledComponents: true,
  },
  // Ignorar erros de módulos opcionais durante o build
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    return config
  },
}

const withNextIntl = require('next-intl/plugin')(
  './i18n.ts'
)

module.exports = withNextIntl(nextConfig)

