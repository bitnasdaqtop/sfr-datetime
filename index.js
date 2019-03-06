'use strict';

const DATE_METHODS = {
    YYYY: ['getFullYear', 4],
    YY: ['getFullYear', 2],
    MM: ['getMonth', 2, 1],
    DD: ['getDate', 2],
    HH: ['getHours', 2],
    mm: ['getMinutes', 2],
    ss: ['getSeconds', 2],
    ms: ['getMilliseconds', 3]
};

const DATE_REGEX = /(?=(YYYY|YY|MM|DD|HH|mm|ss|ms))\1([:\/]*)/;

function dateFormat($date, $pattern) {
    function findMatch() {
        const matching = DATE_REGEX.exec($pattern);
        if (matching) {
            const matchTarget = DATE_METHODS[matching[1]];
            const stringAddPrefix = '00' + String($date[matchTarget[0]]() + (matchTarget[2] || 0));
            const stringExtract = stringAddPrefix.slice(-matchTarget[1]) + (matching[2] || '');
            $pattern = $pattern.replace(matching[0], stringExtract);
            findMatch();
        }
    }

    findMatch();
    return $pattern
}

Date.prototype.getUnixSeconds = function () {
    return Math.round(this.getTime() / 1000)
};

Date.prototype.getUnixMilliseconds = function () {
    return this.getUnixSeconds() * 1000
};

Date.prototype.getDateZeroTime = function () {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate(), 0, 0, 0)
};

Date.prototype.dateAdd = function ($days) {
    return this.setDate(this.getDate() + $days);
};

Date.prototype.dateDiff = function ($date) {
    return (this.getDateZeroTime() - $date) / 86400000
};

Date.prototype.format = function ($pattern = 'YYYY-MM-DD HH:mm:ss:ms') {
    return dateFormat(this, $pattern)
};