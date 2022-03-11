"use strict";
//Challenge No. 1 - Build Tower
// export const towerBuilder = (nFloors: number): string[] => {
//     let result: string[] = [];
//     let temp:string = '';
//     for(let i = 1; i <= nFloors; i++){
//         temp = ' '.repeat(nFloors-i) + "*".repeat(2 * i - 1) + ' '.repeat(nFloors-i);
//         result.push(temp);
//     }
//     return result;
// }
exports.__esModule = true;
exports.high = void 0;
//Highing Scoring World
var abcd = 'abcdefghijklmnopqrstuvwxyz';
var getLetterScore = function (str) { return abcd.indexOf(str) + 1; };
var getWordScore = function (str) {
    return str
        .split('')
        .map(getLetterScore)
        .reduce(function (acc, n) { return acc + n; }, 0);
};
var high = function (str) {
    return str
        .split(' ')
        .reduce(function (acc, value) {
        return getWordScore(value) > getWordScore(value) ? value : acc;
    });
};
exports.high = high;
console.log((0, exports.high)('hola taxi como estan estaran zzzzzzzzzsqwx'));
