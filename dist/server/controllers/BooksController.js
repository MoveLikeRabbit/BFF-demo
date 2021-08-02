"use strict";

var _Controller = _interopRequireDefault(require("./Controller"));

var _BooksModel = _interopRequireDefault(require("../models/BooksModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BooksController extends _Controller.default {
  async actionBooksListPage(ctx) {
    const booksModel = new _BooksModel.default();
    const data = await booksModel.getBooksList();
    ctx.body = await ctx.render('books/pages/list', {
      data: data.data
    });
  }

}

module.exports = BooksController;