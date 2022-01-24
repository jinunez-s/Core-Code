<h1 align="center">Javascript - Week 2</h1>

# Week goal 🏁

<p>Learn about Javascript structure</p>

# Index
- [Monday](#monday)
- [Tuesday](#tuesday)
- [Wednsday](#wednsday)
- [Thursday](#thursday)
- [Conclusions](#conclusions)

## Monday
No code challange

## Tuesday
### Challenge 1 easy peasy
### Challenge 2
```javascript
function uniTotal (string) {
// total up dem unicodes!
      if(string === ""){
        return 0;
      }
      var suma = 0;
      let l = string.length;
      let value = 0;
  
      for(var i = 0; i < l; i++){
        value = string.charCodeAt(i);        
        suma = suma + value;
      }
      return suma;
}
```
### Challenge 3
```javascript
function getChar(c){
  return String.fromCharCode(c);
}
``` 
Another solution using const 
```javascript
const getChar = String.fromCharCode;
``` 
### Challenge 4
```javascript
function addBinary(a,b) {
  return Number(a+b).toString(2);
}
``` 
IDK why i used Number lol, here's with without that
```javascript
function addBinary(a,b){
  return (a+b).toString(2)
}
``` 

## Wednsday
### Challenge 1
```javascript
function dutyFree(normPrice, discount, hol){
  let amount, resp = 0;
  amount = hol / (normPrice * discount * 0.01);
  resp = parseInt(amount, 10);
  if( amount === Infinity){
    return Infinity;
  }else{
    return resp;
  }
}
``` 
other simple ways lmfao
```javascript
function dutyFree(normPrice, discount, hol){
  return(Math.floor(hol / normPrice / discount * 100))
}
``` 
```javascript
function dutyFree(normPrice, discount, hol){
  var saving = normPrice * discount / 100;
  return Math.floor(hol / saving);
}
``` 




### Challenge 2
```javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  let halfAgeDad, t, sonD = 0;
  sonD = sonYearsOld * 2;
  if( sonD > dadYearsOld){
    t = sonD - dadYearsOld;
    return t;
  }else{
    t = dadYearsOld - sonD;
    return t;
  }
}
``` 
### Challenge 3
```javascript
function validSpacing(s) {
  // write your code here
  let l= 0;
  l = s.length;
  //Chequea si el string viene vacio o con espacio
  if(l == 0 || l == 1){
    if( l[1] == "" ){      
      return true;
    }else if(l[1] == " "){
      return false;
    }else{
      return true;
    }
  }  
  //Chequea si hay espacios al principio y al final
    if(s[0] == " " || s[(l-1)] == " "){      
      return false;
    }else{
      //verificar si hay espacios entre los espacios de las palabras
      for(var i = 1; i < l; i++){
        if(s[i] == " "){
          //chequear si hay un espacio siguiente
          if(s[i+1] == " "){
            return false;
          }else{
            return true;
          }
        }
      }
      return true;
    }
  return true;
  
}
``` 
lol not at 100%
### Challenge 4
```javascript
function fakeBin(x){
 return x.split('').map((num) => num > 4 ? 1 : 0).join('');
}
``` 

### Another way of the solution XD
```javascript
function fakeBin(x) {
  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}
``` 
## Thursday
### Challenge 1
```javascript
function remove (string) {  
  let l = string.length;
  let i = l - 1;
  while ( string[i] === "!" ){
    i--;
  }
  return string.substring(0 , i+1);
}
``` 
Other Solutions using replace
```javascript
const remove = s => s.replace(/!+$/, '');
``` 
And
```javascript
function remove(s){
  return s.replace(/!+$/, '');
}
``` 
### Challenge 2
Best solution for me
```javascript
function shortcut (string) {  
  return string.replace(/[aeiou]/gi, "");  
}
``` 
If you want another solutions this is
```javascript
function shortcut(str) {
  return str.split('').filter(function(e) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
  }).join('')
}
``` 
### Challenge 3
```javascript
const rps = (p1, p2) => {
  if( p1 == "scissors" && p2 ==  "paper") {
    return "Player 1 won!";
  }else if( p1 == "scissors" && p2 == "rock"){
    return "Player 2 won!";
  }else if( p1 == "scissors" && p2 == "scissors"){
    return "Draw!";
  }else if(p2 == "scissors" && p1 == "rock"){
    return "Player 1 won!";
  }else if( p2 == "scissors" && p1 == "paper") {
    return "Player 2 won!";
  }else if( p2 == "rock" && p1 == "rock"  ){
    return "Draw!";
  }else if( p2 == "paper" && p1 == "paper"){
    return "Draw!";
  }else if( p1 == "paper" && p2 == "rock"){
    return "Player 1 won!";
  }else if(p2 == "paper" && p1 == "rock"){
    return "Player 2 won!";
  }
  //lol
};
``` 
Other Solutions that are more clever
```javascript
const rps = (p1, p2) => {
  if(p1 === p2) {
    return 'Draw!'
  }; 
  return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
}
``` 
And this is pretty short
```javascript
rps=(a,b)=>a==b?'Draw!':`Player ${/rp|ps|sr/.test(a[0]+b[0])?2:1} won!`;
``` 
## Conclusions
- Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index. --> string.charCodeAt()
- Method returns a string created from the specified sequence of UTF-16 code units --> fromCharCode()
- Number () is a primitive wrapped Object,  constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function.
- parseInt() is used to return a integer with a specified radix. 
- Math.floor() is a function returns the largest integer less than or equal to a given number.
- split() splits a string using a pattern string to determine where the splits should occur, returning a node-set containing the resulting strings.
- [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) object holds key-value pairs and remembers the original insertion order of the keys.
- [substring()](https://developer.mozilla.org/en-US/docs/Web/XPath/Functions/substring) The substring function returns a part of a given string.
- The [replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) method returns a new string with some or all matches of a pattern replaced by a replacement.
