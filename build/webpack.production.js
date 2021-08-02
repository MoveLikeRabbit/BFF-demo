const CopyPlugin = require("copy-webpack-plugin");
var minify = require('html-minifier').minify;
const path = require('path')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  output: {
    filename: '[name].[contenthash].js'
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, '../src/web/views/layouts'), to: "../views/layouts",
          transform (content) {
            return minify(content.toString(), {
              collapseWhitespace: true
            });
          },
        },

        {
          from: path.join(__dirname, '../src/web/components'), to: "../components",
          transform (content) {
            return minify(content.toString(), {
              collapseWhitespace: true
            });
          },
        }
      ]
    }),
  ]
};