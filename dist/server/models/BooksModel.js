"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _safeRequest = _interopRequireDefault(require("../utils/safeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BooksModel {
  getBooksList() {
    return _safeRequest.default.fetch('xxx');
  }

  findBook(id) {}

}

var _default = BooksModel;
exports.default = _default;