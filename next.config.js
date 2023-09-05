const nextConfig = {
  assetPrefix: '.',
  output: 'export',
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol:
          process.env.NODE_ENV === 'development' ? 'http' : 'https',
        hostname: '**',
      },
    ],
    disableStaticImages: process.env.NODE_ENV === 'development',
  },
};

module.exports = nextConfig;
