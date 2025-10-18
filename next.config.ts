// next.config.js
const isDev = process.env.NODE_ENV === "development";

const nextConfig = {
  reactStrictMode: !isDev ? true : false,
  output: 'export',
};

module.exports = nextConfig;