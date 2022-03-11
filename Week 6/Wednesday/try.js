const library = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
};
const highScore = function(...str){
        let currentScore = 0;
        let maxScore = 0;
        let word = '';
        console.log('Arreglo: ');
        for (var i = 0; i < str.length; i++) {
            
            console.log(str[i]);
            console.log('Palabra: ');
            for (var j = 0; j < str[i].length; j++) {
                
                console.log(str[i][j]);
                console.log('Letras: ');
                for (var l = 0; l < str[i][j].length; l++) {
                    console.log(str[i][j][l]);
                    let a = str[i][j][l];
                    currentScore = library[a] + currentScore;
                }
                console.log('This word: ' + str[i][j] + ' have this score: '+ currentScore);
                if(maxScore < currentScore) {
                    maxScore = currentScore;
                    word = str[i][j];
                }
                currentScore = 0;
            }
        }
        console.log('Max score was: ' + maxScore);
        console.log('The word was: ' + word);
}

highScore(['hola','familiar', 'lleno']);
