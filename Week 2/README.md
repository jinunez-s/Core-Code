<h1 align="center">Javascript - Week 2</h1>

# Week goal 🏁

<p>Learn about Javascript structure</p>

# Index
- [Monday](#monday)
- [Tuesday](#tuesday)
- [Wednsday](#wednsday)
- [Thursday](#thursday)
- [Friday](#friday)

## Monday
No code challange

## Tuesday
### Challenge 1 easy peasy
### Challenge 2
``` 
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
``` 
function getChar(c){
  return String.fromCharCode(c);
}
``` 
Another solution using const 
``` 
const getChar = String.fromCharCode;
``` 
### Challenge 4
``` 
function addBinary(a,b) {
  return Number(a+b).toString(2);
}
``` 
IDK why i used Number lol, here's with without that
``` 
function addBinary(a,b){
  return (a+b).toString(2)
}
``` 

## Wednsday
### Challenge 1
``` 
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
``` 
function dutyFree(normPrice, discount, hol){
  return(Math.floor(hol / normPrice / discount * 100))
}
``` 
``` 
function dutyFree(normPrice, discount, hol){
  var saving = normPrice * discount / 100;
  return Math.floor(hol / saving);
}
``` 
### Challenge 2
``` 
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
``` 
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
``` 
function fakeBin(x){
 return x.split('').map((num) => num > 4 ? 1 : 0).join('');
}
``` 

### Another way of the solution XD
``` 

function fakeBin(x) {
  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}
``` 
## Thursday
### Challenge 1
``` 
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
``` 
const remove = s => s.replace(/!+$/, '');
``` 
``` 
function remove(s){
  return s.replace(/!+$/, '');
}
``` 
