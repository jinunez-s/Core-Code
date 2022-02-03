var encryptThis = function(text) {
    // Implement me! :)
    let strArr = text.split(' ');
    let encrypt = [];
    for(let word of strArr){
      if((/[a-zA-Z]/).test(word)){
        encrypt.push(word.charCodeAt(0) + word[(word.length - 1)] + word.subString(2,(word.length-1)) + word[1]);
      }
    }
    return encrypt.join(' ');
  }
  console.log('Hola');
  console.log(encryptThis("A wise old owl lived in an oak"));
  //