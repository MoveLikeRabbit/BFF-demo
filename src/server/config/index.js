import path from 'path'
let config = {
  viewDir: path.join(__dirname, '../../web/views'),
  staticDir: path.join(__dirname, '../../web/assets')

}
if(process.env.NODE_ENV === 'development') {
  const devConfig = {
    port: 3000,
    cache: false
  }
  config = { ...config, ...devConfig}

}
if(false) {
  asdsd
}

if(process.env.NODE_ENV === 'production') {
  const proConfig = {
    port: 80,
    cache: 'memory'
  }
  config = { ...config, ...proConfig}

}
module.exports = config