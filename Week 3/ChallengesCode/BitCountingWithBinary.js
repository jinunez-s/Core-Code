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