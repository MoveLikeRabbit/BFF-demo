// 1. 判断打包的环境
// 2. 遍历多有的入口文件
const {argv} = require('yargs')
const path = require('path')
const {merge} = require('webpack-merge')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode =argv.mode
const envConfig = require(`./build/webpack.${mode}.js`)
console.log('当前打包环境', mode)
const files = glob.sync('./src/web/views/**/*.entry.js')
const entrys ={}
const htmlPlugins = []

files.forEach(url => {
  if(/([a-zA-Z]+-[a-zA-Z]+)\.entry\.js$/.test(url)) {
    console.log(RegExp.$1)
    const entryKey = RegExp.$1
    const [pageName, actionName] = entryKey.split('-');
    entrys[entryKey] = `./src/web/views/${pageName}/${entryKey}.entry.js`
    htmlPlugins.push(new HtmlWebpackPlugin({
      filename: `../web/views/${pageName}/pages/${actionName}.html`,
      template: `./src/web/views/${pageName}/pages/${actionName}.html`,
      chunks: ['runtime', entryKey]
    }))
  }
})
console.log(files)
const baseConfig = {
  entry: entrys,
  output: {
    path: path.join(__dirname, './dist/assets'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
      test: /\.js\$/,
      use: ['babel-loader']
    },{
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader"],
    },]
  },
  plugins: [
    ...htmlPlugins,
    new MiniCssExtractPlugin()
  ]
}
module.exports = merge(baseConfig, envConfig)
