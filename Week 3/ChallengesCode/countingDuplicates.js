function duplicateCount(text){
    let count = {};
    let contador = 0;
    let array_to_count = [];
    for (let index = 0; index < text.length; index++) {
        array_to_count.push(text[index].toUpperCase());
    }
    array_to_count.forEach(function(i){ count[i] = (count[i] || 0) + 1;});
    //console.log(count);

    for( const key in count ){
      //console.log(`${key}: ${count[key]}`);
      //console.log(typeof parseInt(`${count[key]}`));
      if(parseInt(`${count[key]}`) > 1){
        contador++;
      }
    }
    console.log(contador);
  
  }

duplicateCount("abccttcdddd");