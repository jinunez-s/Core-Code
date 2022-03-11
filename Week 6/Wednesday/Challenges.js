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
//Highing Scoring World
// const abcd = 'abcdefghijklmnopqrstuvwxyz';
// const getLetterScore =(str: string): number => abcd.indexOf(str)+1;
// const getWordScore = (str: string): number => 
//     str
//         .split('')
//         .map(getLetterScore)
//         .reduce((acc, n)=> acc+n, 0)
// export const high = (str: string): string => 
//     str
//         .split(' ')
//         .reduce((acc, value) => 
//             getWordScore(value) > getWordScore(value) ? value : acc
//         )
// console.log(high('hol'));
//Equal sides of an Array
var arr = [1, 2, 3, 4];
var suma = arr.reduce(function (a, b) { return a + b; }, 0);
console.log(suma);
