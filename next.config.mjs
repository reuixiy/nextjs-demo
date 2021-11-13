const basePath = '/nextjs-demo'
// const isProd = process.env.NODE_ENV === 'production'
const isExport = process.env.NEXT_EXPORT === 'true'

const nextConfig = {
  basePath: isExport ? basePath : '',
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
    concurrentFeatures: isExport ? false : true,
    serverComponents: isExport ? false : true,
    urlImports: ['https://cdn.skypack.dev'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
