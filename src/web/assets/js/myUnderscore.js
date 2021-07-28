(function () {
  var root =
  (typeof self == 'object' && self.self === self && self) ||
  (typeof global == 'object' && global.global === global && global) ||
  Function('return this')() || {};

  function _$1(obj) {
    if (obj instanceof _$1) return obj;
    if (!(this instanceof _$1)) return new _$1(obj);
    this._wrapped = obj;
  }

  function each(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (typeof obj === 'array') {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var _keys = keys(obj);
      for (i = 0, length = _keys.length; i < length; i++) {
        iteratee(obj[_keys[i]], _keys[i], obj);
      }
    }
    return obj;
  }

  function mixin(obj) {
    each(functions(obj), function (name) {
      var func = (_$1[name] = obj[name]);
      _$1.prototype[name] = function () {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return chainResult(this, func.apply(_$1, args));
      };
    });
    return _$1;
  }
  var allExports = {
    __proto__: null,
    mixin
  }
  var _ = mixin(allExports);
    // Legacy Node.js API.
    _._ = _;

    return _;
})()