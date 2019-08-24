/*
 * @Description: 
 * @Autor: YuBiao
 * @Date: 2019-08-24 21:51:41
 */
function deepClone(origin, target) {
    target = target || {};
    var toStr = Object.prototype.toString;//判断是不是原始值
    var arrStr = "[object Array]";
    for (var prop in origin) {
        if (origin.hasOwnProperty(prop)) {
            //hasOwnProperty方法返回一个布尔值，判断对象是否包含特定的自身（非继承）属性。

            if (typeof (origin[prop]) == "object") {
                //判断是不是对象

                // if (toStr.call(origin[prop]) == arrStr) {
                //     target[prop] = [];
                // } else {
                //     target[prop] = {};
                // }
                target[prop] = (toStr.call(origin[prop]) == arrStr) ? [] : {};
                //如果是数组就创建一个数组，如果是对象就创建一个对象

                deepClone(origin[prop], target[prop]);
                //递归
            } else {
                target[prop] = origin[prop];

                //原始值就直接赋值
            }
        }
    }
    return target;
}

//JSON自带方法
function deepClone(origin, target) {
    var i,
        proxy;
    proxy = JSON.stringify(origin); //把origin对象转换成字符串
    proxy = JSON.parse(proxy); //把字符串转换成对象，这是origin的一个副本
    target = target || {};
    for (i in proxy) {
        if (proxy.hasOwnProperty(i)) {
            target[i] = proxy[i];
        }
    }
    proxy = null; //因为proxy是中间对象，可以将它回收掉
    return target;
}

function deepClone(origin, target) {
    target = target || {};
    for (var i in origin) {
        if (origin.hasOwnProperty(i)) {
            //检测当前属性是否为对象
            if (typeof origin[i] === "object") {
                //如果当前属性为对象，还要检测它是否为数组
                //这是因为数组的字面量表示和对象的字面量表示不同
                //前者是[],而后者是{}
                target[i] = (Object.prototype.toString.call(origin[i]) === "[object Array]") ? [] : {};
                //递归调用extend
                deepClone(origin[i], target[i]);
            } else {
                target[i] = origin[i];
            }
        }
    }
    return target;
}