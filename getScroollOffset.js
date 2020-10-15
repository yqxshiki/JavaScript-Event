/*
 * @Description: 
 * @Autor: YuBiao
 * @Date: 2019-08-25 21:47:31
 */
//滚动条的距离
function getScrollOffset() {

    if (window.pageXOffset) {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
            // ie 8 以下不兼容
        }
    }
    else {
        return {
            x: document.body.scrollLeft + document.documentElement.scrollLeft,
            y: document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}
