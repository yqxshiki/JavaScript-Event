// 实现add(1)(2)(3)(4)=10;
//  add(1)(1,2,3)(2)=9;

function add() {
  const _argu = [...arguments];

  function fn() {
    _argu.push(...arguments);
    return fn;
  }

  fn.toString = function () {
    return _argu.reduce((sum, cur) => sum + cur);
  };
  return fn;
}
