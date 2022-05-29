/** @type {import('next').NextConfig} */
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const useSass = withCSS(
  withSass({
    reactStrictMode: true,

    webpack(config, options) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
          },
        },
      });

      return config;
    },
  })
);
const nextConfig = {
  reactStrictMode: true,
  useSass,
};

module.exports = nextConfig;
