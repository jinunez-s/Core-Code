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
2. Spread Operator
3. Template Strings
4. Arrow Functions
5. Functions as arguments
6. Regular expression
7. Promises
8. fetch
9. Async, Await
10. Falsy and thruthy values
11. && and || for deafult and required values
12. Clousures
13. this

## Monday
### Challenge No. 1
<p> The like system of Facebook</p>
```JavaScript
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

## Tuesday
## Wednsday
## Thursday
## Conclusions
