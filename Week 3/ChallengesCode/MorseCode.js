tocodeMorse = function(morseCode){
  //your code here
  const morse_code = {'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', ' ': '   '};

  var message = '';
  for(var i = 0; i < morseCode.length; i++){
    message += morse_code[morseCode[i]];
  }
  return message;
}

console.log(tocodeMorse('HEY JUDE'));