toAlphabetFromMorseCode = function (morseCode) {
    var message, letter = '';
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
        '   ': ' '
    }
    var index = 0;
    var mensaj = '';
    do {
        let response = findSpaces(morseCode, index);
        var index = response.i;
        letter = morse[response.letterOFMessageInMorse];
        //console.log(letter);
        if(letter == undefined){
            letter = "";            
        }
        mensaj = mensaj + letter;
        index++;
    } while (index <= morseCode.length);
    return mensaj;
}

findSpaces = function (morseCode, index) {
    var positionOfSpaceInString = 0;
    var letterOFMessageInMorse = '';
    for (var i = index; i < morseCode.length; i++) {
        if (morseCode[i] == " ") {
            positionOfSpaceInString = i;
                
            break;
        }
    }
    letterOFMessageInMorse = morseCode.substring(index, i);
    return { letterOFMessageInMorse, i };
}
console.log(toAlphabetFromMorseCode('.... . -.--   .--- ..- -.. .'));