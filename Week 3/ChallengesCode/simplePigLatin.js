function pigIt(str){
    //Code here
    let text = str.split(' '); //['Pig', 'latin', 'is', 'cool']
    let arreglo_de_palabras, arreglo_por_letra = [];
    for (let index = 0; index < text.length; index++) {
        arreglo_de_palabras.push(text[index]);
    }
    let palabra_final = '';
    for (let index = 0; index < arreglo_de_palabras.length; index++) {
        for (let j = 0; j < arreglo_de_palabras[index].length; j++) {
            arreglo_por_letra.push(arreglo_de_palabras[index][j]);
            let primera_letra = arreglo_por_letra.shift();
            arreglo_por_letra.push(primera_letra);
            arreglo_por_letra.push("ay");
            palabra_final = arreglo_por_letra.join('')
        }
    }
    //let palabra_uno = arreglo_de_palabras[0]; //pig
    //let l = arreglo_de_palabras[0].length;
    //let arreglo_por_letra = [];
    //console.log(palabra_uno);

    for (let j = 0; j < l; j++) {
       arreglo_por_letra.push(arreglo_de_palabras[0][j]);        
    }
    console.log(arreglo_por_letra);
    //let primera_letra = arreglo_por_letra.shift();
    arreglo_por_letra.push(primera_letra);
    console.log(arreglo_por_letra);
    arreglo_por_letra.push("ay");
    console.log(arreglo_por_letra);
    console.log(arreglo_por_letra.join(''));
  }

  pigIt('Pig latin is cool');