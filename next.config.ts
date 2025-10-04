// next.config.js
const isDev = process.env.NODE_ENV === "development";

const nextConfig = {
  reactStrictMode: !isDev ? true : false,
};

module.exports = nextConfig;