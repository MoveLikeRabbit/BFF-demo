'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = _interopDefault(require('path'));

let config = {
  viewDir: path.join(__dirname, '../../web/views'),
  staticDir: path.join(__dirname, '../../web/assets')

};

{
  const proConfig = {
    port: 80,
    cache: 'memory'
  };
  config = { ...config, ...proConfig};

}
module.exports = config;
