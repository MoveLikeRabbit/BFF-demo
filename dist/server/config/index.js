"use strict";

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let config = {
  viewDir: _path.default.join(__dirname, '../../web/views'),
  staticDir: _path.default.join(__dirname, '../../web/assets')
};

if (process.env.NODE_ENV === 'development') {
  const devConfig = {
    port: 3000,
    cache: false
  };
  config = { ...config,
    ...devConfig
  };
}

if (false) {
  asdsd;
}

if (process.env.NODE_ENV === 'production') {
  const proConfig = {
    port: 80,
    cache: 'memory'
  };
  config = { ...config,
    ...proConfig
  };
}

module.exports = config;