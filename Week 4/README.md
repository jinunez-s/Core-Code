## Week subtopics

- What is npm?
- package.json
- What is npx?
- What is Typescript?
- Relation between Typescript and Javascript
- Typescript Hello World
- Introduction to Object Oriented Programming
  - Abstraction
  - Inheritance
  - Polymorphism
  - Encapsulation

## npm
<p>
It’s a software Packet  Manager and it’s largest software library. 
npm includes cli that is a command line client, CLI is a command-line interface that provides access to the IBM UrbanCode™ Deploy server. It can be used to find or set properties and to run numerous functions.And npm is installed with Node.js 
 npm stands for Node Package Manager, stems from when npm first was created as a package manager for Node.js
All npm packages are defined in files called package.json.
The content of package.json must be written in JSON.
At least two fields must be present in the definition file: name and versión. 
</p>

## package.json
<p>The package.json file is the heart of any Node project. It records important metadata about a project which is required before publishing to NPM, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package</p>

## npx
<p>NPX is an acronym for Node Package Execute The NPX package comes with npm
It is an npm package runner that can execute any package that you want from the npm registry without even installing that package
</p>

## TypeScript
<p>
TypeScript builds on top of JavaScript. First, you write the TypeScript code. Then, you compile the TypeScript code into plain JavaScript code using a TypeScript compiler.
TypeScript uses the JavaScript syntaxes and adds additional syntaxes for supporting Types.
</p>

## TypeScript and JavaScript
<p>
JavaScript can be used as a server-side programming language also. But JavaScript became heavy and complex. Then JavaScript was not able to full fill the requirements of an Object-oriented programming language. Then TypeScript was developed by the development team to bridge this gap. 
</p>
<h3>Difference between TypeScript and JavaScript</h3>
<li> TypeScript is known as an Object-oriented programming language whereas JavaScript is a scripting language.
<li> TypeScript has a feature known as Static typing but JavaScript does not have this feature.
<li> TypeScript gives support for modules whereas JavaScript does not support modules.
<li> TypeScript has Interface but JavaScript does not have an Interface.
<li> Generally, TypeScript takes time to compile the code.



## TypeScript Hello World
The file extension of a typescript file is ```.ts```
```typescript
let message: string = 'Hello, World!';
console.log(message);
```
If the file is called ```app.ts``` you can run in the terminal with the following command
```tsc app.ts ```
## Introduction to Object Oriented Programming


### Abstraction
<p>Data abstraction is the process of hiding certain details and showing only essential information to the user. This can be achieved with either abstract classes or interfaces.</p>

### Inheritance
<p>It is possible to inherit attributes and methods from one class to another.</p>

### Polymorphism 
<p>Polymorphism means "many forms", and it occurs when we have many classes that are related to each other by inheritance.

Like we specified in the previous chapter; Inheritance lets us inherit attributes and methods from another class. Polymorphism uses those methods to perform different tasks. This allows us to perform a single action in different ways. </p>

### Encapsulation
<p> The meaning of Encapsulation, is to make sure that "sensitive" data is hidden from users. To achieve this, you must set variables, functions private. </p>

## Monday

### TypeScript Object Types
```typescript
  //Here we are defining the interface user
  export interface User {
    name: String;
    age: number;
    occupation: String;
  }
  
  export const users: User[][
    {
      name: 'Julio Nunez',
      age: 24,
      occupation: 'Software developer'
    },
    {
      name: 'Isaias Nunez',
      age: 21,
      occupation: 'Chemical Engineer'
    }
  ];
  
  export function logPerson(user: User){
      console.log(`-${user.name}, ${user.age}`);
   }
  
  console.log('Users:');
  users.forEach(logPerson);
  
```
  
### TypeScript Union Types

### TypeScript in operator

### Challenge: Find the Odd Int
```javascript
function findOdd(A) {
  //happy coding!
  let count = 0;
  let arr = A.sort((a,b) => a-b);
  for(let i=0; i< arr.length; i++){
    for (let j= 0; j < arr.length; j++){
      if(arr[i] == arr[j]){
        count++;
      }
    }
    if(count % 2 !== 0){
      return arr[i];
    }
  }
  return count;
}
```

## Tuesday

## Wednesday

## Thursday

### Basic Typing

