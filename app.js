const Koa = require('koa');
const co = require('co');
const render = require('koa-swig');
const staticServe = require('koa-static');
const { historyApiFallback } = require('koa2-connect-history-api-fallback');

const initController = require('./controllers');
const config = require('./config');

const app = new Koa();

// swig 模板
app.context.render = co.wrap(render({
  root: config.viewDir,
  cache: config.cache
}));


// 初始化中间件
app.use(staticServe(config.staticDir));
app.use(historyApiFallback({index: '/', whiteList: ['/api'] }));

// 初始化路由
initController(app);

app.listen(config.port, () => {
  console.log('server is running at ' + config.port);
});