'use strict';

const YTD_MARK = {
    YYYY: ['getFullYear', 4],
    YY: ['getFullYear', 2],
    MM: ['getMonth', 2, 1],
    DD: ['getDate', 2],
    HH: ['getHours', 2],
    mm: ['getMinutes', 2],
    ss: ['getSeconds', 2],
    ms: ['getMilliseconds', 3]
};

Date.prototype.getTimestamp = function () {
    return Math.round(this.getTime() / 1000)
};

Date.prototype.addDays = function ($days) {
    return this.setDate(this.getDate() + $days);
};

Date.prototype.format = function ($pattern) {
    return format(this, $pattern || 'YYYY-MM-DD HH:mm:ss:ms')
};

function format($date, $pattern) {
    (function a() {
        const b = /(?=(YYYY|YY|MM|DD|HH|mm|ss|ms))\1([:\/]*)/;
        const c = b.exec($pattern);
        if (c) {
            const d = YTD_MARK[c[1]];
            const e = '00' + String($date[d[0]]() + (d[2] || 0));
            const f = e.slice(-d[1]) + (c[2] || '');
            $pattern = $pattern.replace(c[0], f);
            a();
        }
    })();
    return $pattern
}