'use strict';

const YTD = {
    YYYY: ['getFullYear', 4],
    YY: ['getFullYear', 2],
    MM: ['getMonth', 2, 1],
    DD: ['getDate', 2],
    HH: ['getHours', 2],
    mm: ['getMinutes', 2],
    ss: ['getSeconds', 2],
    ms: ['getMilliseconds', 3]
};

/**
 * unix timestamp: Accurate to milliseconds
 * Date.prototype.getTime
 * */

/**
 * unix timestamp: seconds
 * */
Date.prototype.getTimeSeconds = function () {
    return Math.round(this.getTime() / 1000)
};

/**
 * unix timestamp: milliseconds
 * */
Date.prototype.getTimeMilliseconds = function () {
    return Math.round(this.getTime() / 1000) * 1000
};

/**
 * Date Calculator: Add to or Subtract From a Date
 * */
Date.prototype.calcDays = function ($days) {
    return this.setDate(this.getDate() + $days);
};

/**
 * DateFormatter
 * */
Date.prototype.format = function ($pattern = 'YYYY-MM-DD HH:mm:ss:ms') {
    const __date = this;

    (function a() {
        const b = /(?=(YYYY|YY|MM|DD|HH|mm|ss|ms))\1([:\/]*)/;
        const c = b.exec($pattern);
        if (c) {
            const d = YTD[c[1]];
            const e = '00' + String(__date[d[0]]() + (d[2] || 0));
            const f = e.slice(-d[1]) + (c[2] || '');
            $pattern = $pattern.replace(c[0], f);
            a();
        }
    })();

    return $pattern
};