class ErrorHandler {
  static error (app, logger) {
    // 全局error catch
    app.use(async (ctx, next) => {
      try {
        await next();
        // 在 next后catch 执行顺序 中间件洋葱模型
      } catch (e) {
        logger.error(e)
        ctx.body = '500请求，正在积极修复';
      }
    });
    // 处理页面的 404
    app.use(async (ctx, next) => {
      await next();
      if (ctx.status === 404) {
        ctx.body = '<html><script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script></html>';
      }
    });
  }
}
module.exports = ErrorHandler;