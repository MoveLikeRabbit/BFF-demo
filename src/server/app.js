import Koa from 'koa';
import co from 'co';
import render from 'koa-swig';
import staticServe from 'koa-static';
import log4js from "log4js";

import { historyApiFallback } from 'koa2-connect-history-api-fallback';

import errorHandler from './middleware/errorHandler'
import initController from './controllers';
import config from './config';

const app = new Koa();

log4js.configure({
  appenders: { globalError: { type: "file", filename: "./logs/error.log" } },
  categories: { default: { appenders: ["globalError"], level: "error" } }
});
const logger = log4js.getLogger("cheese");

// swig 模板
app.context.render = co.wrap(render({
  root: config.viewDir,
  cache: config.cache,
  varControls: ['[[', ']]']
}));


// 初始化中间件
app.use(staticServe(config.staticDir));
app.use(historyApiFallback({index: '/', whiteList: ['/api', '/books'] }));


// 错误处理
errorHandler.error(app, logger)

// 初始化路由
initController(app);

app.listen(config.port, () => {
  console.log('server is running at ' + config.port);
});