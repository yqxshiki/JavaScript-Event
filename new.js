//new
// 创建一个新的 空对象
// 把新对象的原型绑定到构造函数的原型上
// 构造函数被执行，执行过程的this被绑定在新的对象上
// 返回这个新的对象(构造函数中一般不会显示返回，但有时也可以 return this)

function Person(name) {
  this.name = name;
  console.log("constructor");
}

const person2 = new Person("Jowie");

function newOperator(constructor) {
  // 创建一个新的 空对象
  let obj = {};
  // 把新对象的原型绑定到构造函数的原型上
  Object.setPrototypeOf(obj, constructor.prototype);
  // 构造函数被执行，执行过程的this被绑定在新的对象上
  constructor.call(obj, arguments);
  // 返回这个新的对象(构造函数中一般不会显示返回，但有时也可以 return this)
  return obj;
}
