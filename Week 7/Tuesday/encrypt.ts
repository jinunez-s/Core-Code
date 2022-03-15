export const encryptThis = (str: string): string => {
    if(str.length <=0) {
      return str;
    }
    const encryptWord = (word: string) => {
      const chars = word.split('');
    
      chars[0] = word.charCodeAt(0).toString();
      const tempLast = chars[chars.length - 1];
      chars[chars.length - 1] = chars[1];
      chars[1] = tempLast;
      
      return chars.join("");
    }
  
    return str.split(" ").map(encryptWord).join(" ");
  }