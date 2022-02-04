<h1 align="center">Javascript - Week 3</h1>

# Week goal 🏁

<p>Learn about Javascript behaviour</p>

# Index
- [Week Subtopics](#subtopic)
- [Monday](#monday)
- [Tuesday](#tuesday)
- [Wednsday](#wednsday)
- [Thursday](#thursday)
- [Conclusions](#conclusions)

## Subtopic
1. [Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope) The context in which values and expressions are "visible" or can be referenced. If a variable or other expression is not "in the current scope," then it is unavailable for use.
2. [Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) Allows to bring Array or string to be expanded where zero or more arguments are expected. 
3. Template Strings
4. Arrow Functions
5. Functions as arguments
6. Regular expression
7. Promises
8. fetch
9. Async, Await
10. Falsy and truthy values
11. && and || for default and required values
12. Closures
13. this

## Monday
### Challenge No. 1
<p> The like system of Facebook</p>

```javascript
function likes(names) {
  // Well it works but i don't like it jeje
  let likes = ' like this';
  let count = names.length;
  if(count == 0){
    return 'no one likes this';
  }else if(count == 1){
    return names + ' likes this';
  }else if(count == 2){
    var mensaje = '';
    mensaje = names[0] + ' and ' + names[1];
    return mensaje + likes;
  }else if(count == 3){
    var mensaje = '';
    for(var i = 0; i < (count-2); i ++){      
      mensaje += names[i] + ', ';
    }
    return mensaje + names[1] + ' and ' + names[2] + likes; 
  }else{
    return names[0] + ', ' + names[1] + ' and ' + (count-2) + ' others like this';
  }  
}
```
Other solution more clever
```javascript
function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}
```
### Challenge No. 2
```javascript
var countBits = function(n) {
  // By Julich-s :D
  var binaryNumber, suma = 0;
  var stringOfTheBinary = "";
  
  binaryNumber = Number(n).toString(2);
  
  stringOfTheBinary = binaryNumber.toString();
  for(var i = 0; i < stringOfTheBinary.length; i++){
    if(stringOfTheBinary[i] == 1){
        suma += parseInt(stringOfTheBinary[i]);
    }
  }
  return suma;  
};
```
# MorseCode Challenge 
```javascript
decodeMorse = function(morseCode){
  //your code here
  const morse = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '   ': ' ',
    '...---...': 'SOS',
    '.----': 1,
    '..---': 2,
    '...--': 3,
    '....-': 4,
    '.....': 5,
    '-....': 6,
    '--...': 7,
    '---..': 8,
    '----.': 9,
    '-----': 0,
    '.-.-.-': '.',
    '--..--': ',',
    '-.-.--':'!'
  }

let word = morseCode.trim().split('   ');
let letters = word.map(l => l.split(' '));
let matrizDeCodigo = [];

for(let i = 0; i < word.length; i++ ){
    matrizDeCodigo[i] = [];
    for(let j = 0; j < letters[i].length; j++)
      if(morse[letters[i][j]]){
        matrizDeCodigo[i].push(morse[letters[i][j]]);
      }
}

return matrizDeCodigo.map(l => l.join('')).join(' ');
}
```
## Tuesday
### Your Order List
```javascript
function order(words) {
  return words.split(' ').sort((wordA, wordB) => wordA.match(/\d+/) > wordB.match(/\d+/)).join(' ')
}
```
### Counting Duplicates
```javascript
function duplicateCount(text){
  let count = {};
    let contador = 0;
    let array_to_count = [];
    for (let index = 0; index < text.length; index++) {
        array_to_count.push(text[index].toUpperCase());
    }
    array_to_count.forEach(function(i){ count[i] = (count[i] || 0) + 1;});
    for( const key in count ){
      if(parseInt(`${count[key]}`) > 1){
        contador++;
      }
    }
    return contador;
}
```
Another solution will be 
```javascript
function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}
```
### PigLatin
```javascript
function pigIt(str){
  //split the string into an Array
  let strArr = str.split(' ');
  let pigLatin = []; // empty array
  //iterate the array
  for(let word of strArr){
    if((/([a-zA-Z])/).test(word)){//use regular expresion and test to check if the current element begins with alphabetic character
      pigLatin.push(word.substring(1) + word[0] + "ay");//so it used (1) for substract every character starting from the second. 
    } else{
      pigLatin.push(word);
    }
  }
  return pigLatin.join(' ');// convert the array back to string
}
```
## Wednsday
### Valid Parentheses
```javascript 
function validParentheses(parens) {
  let map = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  let stck = [];
  for(let i = 0; i < parens.length; i++){
    if(parens[i] === '(' || parens[i] === '[' || parens[i] === '{'){
      stck.push(parens[i]);
    }else if(stck[stck.length - 1] === map[parens[i]]) {
      stck.pop();
    }else return false;
  }
  return stck.length ? false : true;
}
```
### Convert String to camel case
```javascript
function toCamelCase(str){
  let newStr = '';
  if(str){
   let wordArr = str.split(/[-_]/g);//Use regular expresion and split to catch every dash and underscore in the string
    for(let i in wordArr){
      if(i > 0){
        newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
      }else{
        newStr += wordArr[i]
      }
    }
  } else{
    return newStr;
  }
  return newStr;
}
```
### Make an Unique Order Array
```javascript
var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  //Check first is iterable is a array
  let strArr = Array.isArray(iterable) ? iterable : iterable.split('');
  //unique is an array for unique values not repeated
  let unique = strArr.filter((letter, i) => {
    return strArr[i] != strArr[i + 1];
  });
  return unique;
}
```
## Thursday

### Encrypt This!
```javascript

```
## Conclusions
