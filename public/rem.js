(function (doc, win) {
    var result = window.matchMedia('(max-width: 750px)'),
        docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) {
                return;
            }
            // console.log(result.matches)
            if (result.matches) {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            } else {
                docEl.style.fontSize = "18px";
            }
        };
    if (!doc.addEventListener) {
        return;
    }
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    recalc()
})(document, window)