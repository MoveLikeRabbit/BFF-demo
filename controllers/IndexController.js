import Controller from './Controller';
class IndexController extends Controller {
  async actionIndex(ctx) {
    ctx.body = await ctx.render('index', {
      message: '二蛋今天开心'
    })
  }
}

module.exports =IndexController