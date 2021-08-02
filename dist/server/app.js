"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _co = _interopRequireDefault(require("co"));

var _koaSwig = _interopRequireDefault(require("koa-swig"));

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _log4js = _interopRequireDefault(require("log4js"));

var _koa2ConnectHistoryApiFallback = require("koa2-connect-history-api-fallback");

var _errorHandler = _interopRequireDefault(require("./middleware/errorHandler"));

var _controllers = _interopRequireDefault(require("./controllers"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa.default();

_log4js.default.configure({
  appenders: {
    globalError: {
      type: "file",
      filename: "./logs/error.log"
    }
  },
  categories: {
    default: {
      appenders: ["globalError"],
      level: "error"
    }
  }
});

const logger = _log4js.default.getLogger("cheese"); // swig 模板


app.context.render = _co.default.wrap((0, _koaSwig.default)({
  root: _config.default.viewDir,
  cache: _config.default.cache,
  varControls: ['[[', ']]']
})); // 初始化中间件

app.use((0, _koaStatic.default)(_config.default.staticDir));
app.use((0, _koa2ConnectHistoryApiFallback.historyApiFallback)({
  index: '/',
  whiteList: ['/api', '/books']
})); // 错误处理

_errorHandler.default.error(app, logger); // 初始化路由


(0, _controllers.default)(app);
app.listen(_config.default.port, () => {
  console.log('server is running at ' + _config.default.port);
});