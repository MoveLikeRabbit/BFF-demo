"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _anyPromise = require("any-promise");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SafeRequest {
  static fetch(url) {
    let result = {
      code: 0,
      message: '',
      data: null
    };
    return new Promise(resolve => {
      (0, _axios.default)(url).then(data => {
        result.data = data.data;
        resolve(result);
      }).catch(e => {
        result.code = 1;
        result.message = e.message;
        result.data = [{
          id: 1,
          name: '《JS权威指南》'
        }, {
          id: 2,
          name: '《JS语言精粹》'
        }];
        resolve(result);
      });
    });
  }

}

var _default = SafeRequest;
exports.default = _default;