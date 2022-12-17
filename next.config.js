/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  images: {
    /* add image from github user domain */
    domains: ['avatars.githubusercontent.com'],
  },
}

module.exports = nextConfig
