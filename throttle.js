/**
 * @description:节流
 * @param {*} fn
 * @param {*} wait
 */

let flag = true;
function throttle(fn, wait) {
  if (!flag) return;
  flag = false;

  setTimeout(() => {
    fn.apply(this, arguments);
    flag = true;
  }, wait);
}
