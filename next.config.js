/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
};

module.exports = nextConfig;
