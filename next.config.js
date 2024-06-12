const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  assetPrefix: "./",
  trailingSlash: true,
  /*  experimental: {
    forceSwcTransforms: true,
  }, */
};

module.exports = nextConfig;
