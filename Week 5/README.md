## Monday

### TypeScript Object Types
```typescript
```
## Tuesday
## Wednesday
### Duplciate Encoder
```typescript
export function duplicateEncode(word: string){
    return word.toLowerCase()
          .split('')
          .reduce((acc, char, i, arr) => {
            const symbol = arr.filter(letter => letter === char).length < 2 ? '(' : ')'
    
            return acc + symbol;
    }, '');
}
```
### Find the odd int
```typescript
export const findOdd = (xs: number[]): number => {
    return xs.reduce( (a,b)=> a^b);
};
```
### Which are in?
```typescript
function inArray(a1: string[], a2: string[]): string[] {
    let res : string[] = [];
    for(let i = 0; i < a1.length; i++){

        for(let j = 0; j < a2.length; j++){
            if( a2[j].includes(a1[i])){
                res.push(a1[i]);
            }
        }

    }//END FOR I

    return res.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1]; });
}
```
### Sums of Parts
```typescript
export function partsSums(ls: number[]): number[] {
  let sum = ls.reduce((x, y) => x + y, 0);
  let resultArr = [];
  let x = 0;
  
  if(ls.length === 0) {
    return [0];
  }
  
  for(let i = 0; i <= ls.length; i += 1) {
    resultArr.push(sum);
    x = ls[i];
    sum -= x;
  }
  
  return resultArr;
  
  // let total = ls.reduce((acc, cur) => acc + cur, 0)
  //return [ ...[total], ...ls.map(num => total -= num) ]
}
```
### Consecutive Strings
```typescript
export function longestConsec(strarr: string[], k: number): string {
  if (strarr.length == 0 || k > strarr.length || k <= 0) return '';
    
    let longStr : string = '';
    
    let newStr : string[] = [];
    
    for (let i = 0; i < strarr.length; i++){
      newStr = strarr.slice(i, i+k);
      if (newStr.join('').length > longStr.length ){
        longStr = newStr.join('');
      }
    }
    
    return longStr;
}
```
