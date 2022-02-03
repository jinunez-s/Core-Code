function order(words) {
    let word_separate = words.trim().split(' ');
    let letters = word_separate.map(l => l.split(' '));
    let arrayInOrder = [];
    //console.log(word_separate);// palabras en un arreglo
    var regex = /(\d+)/g;
    for (let index = 0; index < letters.length; index++) {
        for (let j = 0; j < letters[index].length; j++) {
            //console.log(letters[index][j]);//string
            // retorna el numero que posee
                arrayInOrder[letters[index].toString().match(regex)] = letters[index];
        }
    }
    console.log(arrayInOrder.join(' ').trim());
}

order('is2 Thi1s T4est 3a');