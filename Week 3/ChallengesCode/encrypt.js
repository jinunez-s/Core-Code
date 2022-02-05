var encryptThis = function(text) {
  let strArr = text.split(' ');
  let encrypt = [];
  if(text.length == 1){
    return (text.charCodeAt(0)).toString();
  }
  for(let word of strArr){
    if((/[a-zA-Z]/).test(word)){
      if(word.length == 1){
        encrypt.push(word.charCodeAt(0));
      }else if(word.length == 2){
              encrypt.push(word.charCodeAt(0) + word[1] );
      }else{
          encrypt.push(word.charCodeAt(0) + word[(word.length - 1)] + word.substring(2,(word.length-1)) + word[1]);
      }      
    }
  }
  return encrypt.join(' ');
}
  console.log(encryptThis("A wise old owl lived in an oak"));
  //