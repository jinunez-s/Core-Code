## Monday
### Square sum
```typescript
export function squareSum(numbers: number[]): number {
    return numbers.reduce((prev, curr) => prev + curr * curr, 0);
}
```
### Growth of a population
```typescript
export class G964 {

    public static nbYear = (p0, percent, aug, p) => {
        let years : number = 0;
        let pop : number = p0;
        while(pop < p){
            pop += pop * percent / 100 + aug;
            years ++;
        }
        return years;
    }
}
```
### Mumbling
```typescript
export function accum(s: string): string {
   return s.split('')
  .map((item, idx) => item.toUpperCase() + (item.toLowerCase()).repeat(idx))
  .join('-');
}
```
### A wolf in sheep's clothing
```typescript
export function warnTheSheep(queue: string[]): string {
  const position = queue.reverse().indexOf('wolf');
    return ( position > 0 ) ? `Oi! Sheep number ${position}! You are about to be eaten by a wolf!` : 'Pls go away and stop eating my sheep';
}
```

## Tuesday
### Playing with digits
```typescript
export class G964 {

    public static digPow = (n: number, p: number) => {
        let string = n.toString();
  let len = string.length;
  let result = 0;
  for(var i = 0; i < len ; i++) {
    var numberser = parseInt(string.charAt(i),10);
    result +=  Math.pow(numberser, p + i)
  }
  var x = Math.pow(n,p);
  if(result === x){
    return p;
    } else if(result%n === 0) {
    return result / n;
  }else {
    return -1  
}
```
### Valid braces
```typescript
export function validBraces(braces: string): boolean {
   let brackets = "[]{}()<>"
  let stack = []

  for(let bracket of braces) {
    let bracketsIndex = brackets.indexOf(bracket)

    if(bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1)
    } else {
      if(stack.pop() !== bracketsIndex) {
        return false;
      }
    }
  }
  return stack.length === 0
}
```
### Tic Tac Toe Table generator
```javascript
function displayBoard(board, width){
let line = "-".repeat(3 * width + (width - 1));
  line = "\n" + line + "\n";
  console.log(line);
  let res = "";
  let breaks = [];
  for(let i = 0; i < (board.length / width) - 1; i++){
    breaks.push( Number((width * (i+1)) - 1 ));
  }  
  for(let i = 0; i < board.length; i++){
    res += ( board[i] != '') 
            ? " " + board[i] + " "
            : "   ";
    
    if(breaks.indexOf(i) >= 0){
      res += line;
    }
    else{
      res += "|";
    }
  }
  return res.slice(0, -1);
}
```


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
    }
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
