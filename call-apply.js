Function.prototype._call = function (ctx) {
  //ctx为传入的第一个参数  没有传就默认window
  ctx = ctx || window;

  //this 就是函数  把它当做一个属性或者方法 给ctx   不懂看最下面
  //   ctx.fun = this;
  //  避免ctx里面有fun  覆盖了
  let fun = Symbol("独一无二");
  ctx[fun] = this;
  //args 为除第一个参数外的参数
  const args = [...arguments].slice(1);
  //执行函数
  const result = ctx[fun](...args);
  //删除方法
  delete ctx[fun];
  //返回
  return result;
};

Function.prototype._apply = function (ctx) {
  ctx = ctx || window;

  let fun = Symbol("独一无二");
  ctx[fun] = this;

  let result;
  //如果没有第二个参数 直接执行
  if (!arguments[1]) {
    result = ctx[fun]();
  } else {
    result = ctx[fun](...arguments[1]);
  }
  delete ctx[fun];

  return result;
};

let name = "yu";
let obj = {
  name: "biao",
};

function fnc() {
  console.log(this.name);
}
fnc._apply(obj, "yubiao");

/** 
  let obj = {
    name: "biao",
      ctx.fun=this  的作用
    fun:function (){
         console.log(this.name);
    }
}
**/
