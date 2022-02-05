let str = "The salad cost $9.99";
//Check the next regex expressions!
str.match(/\$\d.\d\d/);
str.match(/\$\d\.\d\d/);
str.match(/\$\d\.\d\d/)[0];
str.match(/\$\d{1,3}\.\d\d/)[0];

let str2 = "Contact customer support on 0800 300 500";
str2.match(/\d{3,4}/g);
str2.match(/\d{3,4}\s{3}/g); //three spaces of number
console.log();

let str3 = "You can contact me on Twitter @codebubb or james@juniordevelopercental.com";
str3.match(/\S+@\S+\.\S+/);//(\S) --> match any caracter that is not an space in a string //Extract the email address in a string
