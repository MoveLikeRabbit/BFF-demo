"use strict";

var _Controller = _interopRequireDefault(require("./Controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class IndexController extends _Controller.default {
  async actionIndex(ctx) {
    ctx.body = await ctx.render('index', {
      message: '二蛋今天开心'
    });
  }

}

module.exports = IndexController;