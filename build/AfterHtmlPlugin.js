const HtmlWebpackPlugin = require('html-webpack-plugin');
const pluginName = 'AfterHtmlPlugin';
function createHtml(type, array) {
  let result = ''
  if(type === 'js') {
    array.forEach(url => {
      result += `<script src="${url}"></script>`
    })
  }
  if(type === 'css') {
    array.forEach(url => {
      result += `<link href="${url}" rel="stylesheet" ></link>`
    })
  }
  return result
}

class AfterHtmlPlugin {
  apply(compiler) {
    // compiler 是 webpack 的编译对象
    // compilation 每一次构建
    // 拿取js css
    compiler.hooks.compilation.tap(pluginName, (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).beforeAssetTagGeneration.tapAsync(pluginName, (data, cb) =>  {
        console.log('静态资源', data.assets)
        this.jsArray = data.assets.js
        this.cssArray = data.assets.css
        cb(null, data)
      })

      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(pluginName, (data, cb) => {
        const scriptString = createHtml('js', this.jsArray);
        const linkString = createHtml('css', this.cssArray)
        data.html = data.html.replace("<!-- injectjs -->", scriptString)
        data.html = data.html.replace("<!-- injectcss -->", linkString)
        cb(null, data)
      })
    });


  }
}

module.exports = AfterHtmlPlugin;