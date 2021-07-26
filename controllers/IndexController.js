const Controller = require('./Controller');
class IndexController extends Controller {
  actionIndex(ctx) {
    ctx.body = 'action index'
  }
}

module.exports =IndexController