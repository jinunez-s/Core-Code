//Node js
function add(x1, x2){
    return x1 + x2;
}
function substract(x1, x2){
   return x1 - x2;
}
function multiply(x1,x2){
   return x1 * x2;
}
function divide(x1, x2){
   if(x2 == 0){
       console.log('no se puede dividir por 0');
   }else{
       return x1 / x2;
   }
   
}
console.log(divide(1,5));
//exportando funciones
exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;
function hello(name) {
    //console.log("Hello, " + name);
    return "Hello, " + name;
}
exports.hello = hello;
//module.exports = hello;
