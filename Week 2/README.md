<h1 align="center">Javascript - Week 2</h1>

## Week goal 🏁

<p>Learn about Javascript structure</p>

# Challenge 1
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

# Challenge 2
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
# Challenge 3
# Challenge 4
