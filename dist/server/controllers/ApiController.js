"use strict";

var _Controller = _interopRequireDefault(require("./Controller"));

var _BooksModel = _interopRequireDefault(require("../models/BooksModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ApiController extends _Controller.default {
  async actionBooksList(ctx) {
    const booksModel = new _BooksModel.default();
    ctx.body = await booksModel.getBooksList();
  }

}

module.exports = ApiController;