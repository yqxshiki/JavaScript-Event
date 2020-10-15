/**
 * @description:防抖
 * @param {*} fn
 * @param {*} wait
 */

let timeOut;
function debounce(fn, wait) {
  clearTimeout(timeOut);

  timeOut = setTimeout(() => {
    fn.apply(this, arguments);
  }, wait);
}
