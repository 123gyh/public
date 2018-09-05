/*
author xixi
*/
// 获取样式
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}

function startMove(obj, attr, iTarget) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var iCur = 0;
        if (attr == 'opacity') {
            iCur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
        } else {
            iCur = parseInt(getStyle(obj, attr));
        }

        var steep = (iTarget - iCur) / 10;
        steep = steep > 0 ? Math.ceil(steep) : Math.floor(steep);
        if (iCur == iTarget) {
            clearInterval(obj.timer);
        } else {
            if (attr == 'opacity') {
                obj.style.fillter = 'alpha(opacity:' + (iCur + steep)
                ')';
                obj.style.opacity = (iCur + steep) / 100;
            } else {
                obj.style[attr] = iCur + steep + 'px';
            }
        }

    }, 30);
}