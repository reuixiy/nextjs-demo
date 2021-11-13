const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
    concurrentFeatures: true,
    serverComponents: true,
    urlImports: ['https://cdn.skypack.dev'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
