/*
 * @Description: 
 * @Autor: YuBiao
 * @Date: 2019-08-25 21:56:40
 */
//查看当前视口尺寸
function getViewportOffset() {
    if (window.innerHeight) {
        return {
            w: window.innerWidth,
            h: window.innerHeight
            //ie 8 以下不兼容
        }
    } else {
        if (Document.compatMode === "BackCompat") {
            return {
                w: document.body.clientWidth,
                h: document.body.clientHeight
                //适用于怪异模式下的游览器  没有加<1DOCTYPE html>时是怪异模式
            }
        } else {
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
                //适用于标准模式下的游览器
            }
        }

    }

}