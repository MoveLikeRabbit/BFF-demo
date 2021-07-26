const Controller = require('./Controller');
class ApiController extends Controller {
  actionDataList(ctx) {
    ctx.body = [{
      id:1,
      data: 'aaaaaaaa'
    }, {
      id:2,
      data: 'bbbbbb'
    }]
  }
}

module.exports =ApiController