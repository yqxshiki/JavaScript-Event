let arr = [1, [2, [3, [4, 5]]], 6]; // -> [1, 2, 3, 4, 5, 6]
// let str = JSON.stringify(ary);

// flat  Infinity为无限层数组都扁平化
ary = arr.flat(Infinity);

// replace split
// ary = arr.replace(/(\[|\])/g, "").split(",");
// replace + JSON.parse
str = arr.replace(/(\[|\]))/g, "");
str = "[" + str + "]";
ary = JSON.parse(str);

// 普通递归
let result = [];
let fn = function (ary) {
  for (let i = 0; i < ary.length; i++) {
    let item = ary[i];
    if (Array.isArray(ary[i])) {
      fn(item);
    } else {
      result.push(item);
    }
  }
};
// 利用reduce函数迭代
function flatten(ary) {
  return ary.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
}

// 扩展运算符
//只要有一个元素有数组，那么循环继续
while (ary.some(Array.isArray())) {
  ary = [].concat(...ary);
}

console.log(ary);
