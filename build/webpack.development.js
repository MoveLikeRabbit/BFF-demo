
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

module.exports = {
  watch: true,

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.join(__dirname, '../src/web/views/layouts'), to: "../views/layouts" },
        { from: path.join(__dirname, '../src/web/components'), to: "../components" },
        { from: path.join(__dirname, '../src/web/views/index.html'), to: "../views" },

      ],
    }),
    new BundleAnalyzerPlugin(),
    new WebpackBuildNotifierPlugin({
      title: "My Webpack Project",
      suppressSuccess: true, // don't spam success notifications
    })
  ]
}