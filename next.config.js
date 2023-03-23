/** @format */

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/resources',
        permanent: false,
      },
    ]
  },
  images: { domains: ["resourchub-laravel.layouti.com", 'lh3.googleusercontent.com'] },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
