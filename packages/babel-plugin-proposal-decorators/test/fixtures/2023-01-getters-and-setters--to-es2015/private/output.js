var _call_a, _call_a2, _initProto, _Foo;
const dec = () => {};
var _a = /*#__PURE__*/new WeakMap();
class Foo {
  constructor() {
    babelHelpers.classPrivateFieldInitSpec(this, _a, {
      get: _get_a,
      set: _set_a
    });
    babelHelpers.defineProperty(this, "value", 1);
    _initProto(this);
  }
  getA() {
    return babelHelpers.classPrivateFieldGet(this, _a);
  }
  setA(v) {
    babelHelpers.classPrivateFieldSet(this, _a, v);
  }
}
_Foo = Foo;
function _get_a() {
  return _call_a(this);
}
function _set_a(v) {
  _call_a2(this, v);
}
[_call_a, _call_a2, _initProto] = babelHelpers.applyDecs2301(_Foo, [[dec, 3, "a", function () {
  return this.value;
}], [dec, 4, "a", function (v) {
  this.value = v;
}]], [], _ => _a.has(babelHelpers.checkInRHS(_))).e;
