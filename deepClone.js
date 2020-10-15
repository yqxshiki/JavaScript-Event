let obj = {
  name: "yubiao",
  list: ["111", "222", "333"],
  temp: {
    age: "18",
  },
  isLogin: true,
  sex: "男",
};
// let result=JSON.parse(JSON.stringify(obj))

function deepClone(obj, result) {
  result = result || {};
  if (obj === null) return null;
  if (obj.constructor == Date) return new Date(obj);
  if (obj.constructor === RegExp) return new RegExp(obj);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object") {
        result[key] =
          Object.prototype.toString.call(obj[key]) === "[object Array]"
            ? []
            : {};
        deepClone(obj[key], result[key]);
      } else {
        result[key] = obj[key];
      }
    }
  }

  return result;
}
console.log(deepClone(obj));
