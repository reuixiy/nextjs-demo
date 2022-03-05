const basePath = '/nextjs-demo'
// const isProd = process.env.NODE_ENV === 'production'
const isExport = process.env.NEXT_EXPORT === 'true'

const nextConfig = {
  basePath: isExport ? basePath : '',
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
    urlImports: ['https://cdn.skypack.dev'],
    // https://nextjs.org/docs/advanced-features/react-18/overview
    // runtime: 'nodejs',
    // serverComponents: isExport ? false : true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
