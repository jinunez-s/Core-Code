# Core-Code
## Week 1 - Tuesday
### 2. Search and answer the question: Java language is compiled or interpreted?
R. Java language is a interpreted language, also javaScript, python, C#, PHP are interpreted languages. PHP and javascript do not have bytecode and/or JIT compilation. JIT stands for Just in time Complier
### 3. Create an algorithm to calculate the equivalent of your local currencty to USD

var quetzales = prompt("Enter your amount in Quetzales please: ");
var usdRate = 7.8;

function currencyConvert(quetzales){
    var dolares = quetzales / usdRate;
    return console.log(dolares);
}
currencyConvert(quetzales);

### 5. Anwser to the question: Why is pseudocode helpful?
R. Pseudocode is great for problem solving, you can focus on how your algorithm will work instead of focusing in the syntax that it may be less important.
### 6. Create a pseudocode to calculate the aproximated age of a user base on the year they born, (you can define a variable with the actual year if you need it, like for example i could define Y <-- 2022).
R. Pseudocode: 
  1. Set variable currentYear to the value of current year. (2022)
  2. Ask the user his year born and savit in the variable userYearBorn.
  3. Check if the userYearBorn is different from 0, is a negative number or isn't a number. if yes then ask again the userYearBorn value. if not continue.
  4. Rest the userYearBorn to the currentYear, store the value in a variable called userAge.
  5. Show the value of userAge and add some string. (Congratulations! you have userAge years!)
### 8. Answer to the question: Why are flowcharts important to us as developers?
R. Flowcharts are import to explaing to others developers how your code or algorithm works, in can be easy to explain where you need the data, what kind of data, what to do with that data and using different symbols for operations, conditionals, decision and terminal. 

## Wednesday
### 1. Binary number
    Is a number expressed in the base-2 numeral system. It only uses two symbols, 0 zero and 1 one.
    Decimal Counting Decimal counting uses the ten symbols 0 through 9. Counting begins with the incremental substitution of the least           significant digit which is often called first digit. When the available symbols for this position are exhausted, the least significant       digit is reset to 0, and the next digit of higher significance (one position to the left) is incremented (overflow), and incremental         substitution of the low-order digit resumes. 

### 2. Translating 1997 to binary, decimal, and hexadecimal.
    a.	11111001101 – binary
    b.	1997 - decimal
    c.	7CD – hexadecimal
    
### 3. Translate 51966 into hexadecimal and binary
    a.	CAFE – hexadecimal
    b.	1100101011111110 - binary

