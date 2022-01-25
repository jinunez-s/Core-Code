
function multiplication(midNumber){
  
    let l= 0;
    let w = 1;
    l = midNumber.toString().length;
    stringNumber = midNumber.toString();
    for(var i = 0; i < l; i++){
      w = stringNumber[i]* w;
    }
  return w;
}

function persistence(num) {
   //code me
  let a = 0;
  // Cuando el num tiene un solo numero
  if(num.toString().length == 1){
    return 0;
  }
  //mandarlo a la funcion multiplication  
  try{
    do{
    a = multiplication(num);  
  }while(a.toString().length != 1);// chequar si solo queda un numero
    
    return a;
  }catch(error){
    console.log("error en el codigo");
  }
  
}
