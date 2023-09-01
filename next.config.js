/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withReactSvg = require("next-react-svg");
const path = require("path");
const withVideos = require("next-videos");

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withPlugins(
  [
    withVideos,
    {
      include: path.resolve(__dirname, "assets/videos"),
    },
    [
      withReactSvg,
      {
        include: path.resolve(__dirname, "assets/icons"),
        webpack(config) {
          return config;
        },
      },
    ],
  ],
  nextConfig
);
