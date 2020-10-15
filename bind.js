Function.prototype._bind = function (ctx) {
  const func = this;
  //空函数
  let emptyFunc = function () {};

  //除一个参数外的参数
  args = [...arguments].slice(1);

  const temp = function () {
    //是否是构造函数
    if (this instanceof temp) {
      func.apply(this, args.concat([...arguments]));
    } else {
      func.apply(ctx, args.concat([...arguments]));
    }
  };
  //继承原函数原型链
  emptyFunc.prototype = this.prototype;
  //new   为了不改变 原函数
  temp.prototype = new emptyFunc();
  return temp;
};
