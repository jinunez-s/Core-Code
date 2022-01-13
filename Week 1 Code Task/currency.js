var quetzales = prompt("Enter your amount in Quetzales please: ");
var usdRate = 7.8;
currencyConvert(quetzales);
function currencyConvert(quetzales){
    var dolares = quetzales / usdRate;
    return console.log(dolares);
}