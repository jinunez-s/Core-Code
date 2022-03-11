"use strict";
exports.__esModule = true;
exports.towerBuilder = void 0;
//Challenge No. 1 - Build Tower
var towerBuilder = function (nFloors) {
    var result = [];
    var temp = '';
    for (var i = 1; i <= nFloors; i++) {
        temp = ' '.repeat(nFloors - i) + "*".repeat(2 * i - 1) + ' '.repeat(nFloors - i);
        result.push(temp);
    }
    return result;
};
exports.towerBuilder = towerBuilder;
