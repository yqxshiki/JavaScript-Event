Array.prototype.newMap = function (fn) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(fn(this[i], i, this));
  }
  return newArr;
};

// _this默认为本身
Array.prototype.myMap = function (fn, _this = this) {
  let arr = [];
  // 遍历数组，循环对元素执行回调函数
  for (let index in this) {
    // 执行回调函数时绑定this，并将结果push进新数组
    arr.push(fn.call(_this, this[index], index, this));
  }
  // 返回新数组
  return arr;
};

// 设置新增原型为不可枚举，不会被for...in遍历出来
Object.defineProperty(Array.prototype, "myMap", {
  enumerable: false,
});

Array.prototype.Emap = function (fn) {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    arr.push(fn(this[i], i, this));
  }
  return arr;
};
