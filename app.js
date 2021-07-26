const Koa = require('koa');
const config = require('./config');
const initController = require('./controllers');
const app = new Koa();

initController(app);

app.listen(config.port, () => {
  console.log('server is running at ' + config.port);
});