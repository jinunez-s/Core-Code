# Core-Code
## Week 1 - Tuesday
### 2. Search and answer the question: Java language is compiled or interpreted?
R. Java language is a interpreted language, also javaScript, python, C#, PHP are interpreted languages. PHP and javascript do not have bytecode and/or JIT compilation. JIT stands for Just in time Complier
### 3. Create an algorithm to calculate the equivalent of your local currencty to USD
```
var quetzales = prompt("Enter your amount in Quetzales please: ");
var usdRate = 7.8;

function currencyConvert(quetzales){
    var dolares = quetzales / usdRate;
    return console.log(dolares);
}
currencyConvert(quetzales);
```
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
Decimal Counting Decimal counting uses the ten symbols 0 through 9. Counting begins with the incremental substitution of the least
significant digit which is often called first digit. When the available symbols for this position are exhausted, the least significant
digit is reset to 0, and the next digit of higher significance (one position to the left) is incremented (overflow), and incremental
substitution of the low-order digit resumes. 

| Decimal Number | Binary Number |
| ----------- | ----------- |
| 0 | 0 |
| 1 | 1 |
| 2 | 10 |
| 3 | 11 |
| 4 | 100 |
| 5 | 101 |
| 6 | 110 |
| 7 | 111 |
| 8 | 1000 |
| 9 | 1001 |
| 10 | 1010 |
| 11 | 1011 |
| 12 | 1100 |
| 13 | 1101 |
| 14 | 1110 |
| 15 | 1111 |


### 2. Translating 1997 to binary, decimal, and hexadecimal.
    a.	11111001101 – binary
    b.	1997 - decimal
    c.	7CD – hexadecimal
    
### 3. Translate 51966 into hexadecimal and binary
    a.	CAFE – hexadecimal
    b.	1100101011111110 - binary
## Thursday
### 1. Real world applications for JavaScript

JavaScript was made for web development to help the creation of web client and web server where this two interacts to display information in the window of the web browser.
JavaScript has an abundance of libraries and frameworks: AngularJs, ReactJS, SvelteJS, and others.
On the front-end, JavaScript works for optimize web pages for the use. At the back end, JavaScript positions Node.js to manage dada and handle user requests.

Some applications of JavaScript:

**Web Development**
- Dynamic and interactive web page

**Server Applications**
- With Node.js you cand write, test, and debug code. With Node.js you can write server-side software.

**Web Applications**
- Angular and Vue.js are popular JavaScript Frameworks. 
- Netflix and Paypal were developed with AngularJs and APIs.

**Games**
- Use EaselJs library to create along with JavaScript and HTML5 web games. 
**Mobile Applications**
- React Native server the purpose of mobile app building. 
- Support Hybrid apps.
- Virtual DOM: ReactJS is used for building user interfaces. The DOM is consider an API for HTML and XML allowing the user to read and manipulate the content on a page. 
