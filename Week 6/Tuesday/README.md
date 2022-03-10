## OOP Glosary
1. <b>Abstraction:</b> Abstraction is achieved by interfaces and abstract classes, abstraction is the property which only the essential details are displayed to the user. 
2. <b>Inheritance:</b> Is the mechanism by which one class is allowed to inherit the features of another class. Inherit fields and methods. 
3. <b>Polymorphism:</b> Allows to perfom a single action in different ways, polymorphism allows to define one interface and have multiple implementations. 
4. <b>Encapsulation:</b> Defines a protective shield that prevents the data form being accessed by the code outside this shield. The data can be only accessed through any member function of its own class in which is declared.  
5. <b>Class:</b> Is a user defined blueprint which objects are created. It represents the set of properties or methods that are common to all objects of one type. 
6. <b>Object:</b> It is a basic unit of Object-Oriented Programming and represents the entities. An object consist of, state that represents the attributes and properties of an object, behavior that represents the methods of the object, and identity that gives an unique name to an object and enables one object to interact with other objects. 
7. <b>Instance:</b>  Instances are group of methods that performs a particulas task. Instance method can access instance variables and instance methods directly and undeviatingly. 
8. <b>Interface:</b> Is an abstract type used to specify the behavior of a class. An interface is a blue print of a class.
9. <b>Access Modifiers:</b> Are keywords that helps to restrics the scope of a class, constructor, variable,  method, or data member. They are default (no keyword required), public, private, and protected.
10. <b>Constructors:</b> They are special methods that initialize objects. The constructor is called when an object of a class is created. It can be used to set initial values for objects attributes. 

## Example
*   [Link to Example OOP in typescript](https://github.com/jinunez-s/Core-Code-01/blob/master/Week%206/Tuesday/objectsExample.ts)
*   [Link to Example OOP in javascript](https://github.com/jinunez-s/Core-Code-01/blob/master/Week%206/Tuesday/objectsExample.js)

# Guide
Typescript is a Object oriented programming language created by Microsoft and it is a superset of JavaScript, typescript is a language of types. typescript code is converted to javascript becoming an advantage for implementing in javascript projects. 

### Why we use typescript?

With typescript we can create classes, objects more easily than with javascript, its easy to write and read. Typescript support object oriented programming which includes, inheritance, access modifiers, encapsulation, polymorphism and abstraction. 

### Install Typescript
```
npm install -g typescript
```

### Check if typescript intalled
```
npx tsc 
```

### Set up a project (Will create a package.json)
```
npm init
```

### Install a specific package
```
npm install --save-dev lite-server
```

### Add script to start the project
```
 "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "lite-server"
  },
```

### For start project
```
npm start
```
### Link your typescript file into a HTML file
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Typescript intro</title>
  </head>
  <body>
    <div id="root">
        <p>Hello...</p>
    </div>
    <script src="./index.js"></script> 
  </body>
</html>
```

### To compile typescript into javascript (Web browser only knows javascript)
```
tsc index.ts -w
```
#### -w is watch mode this command automatically compile the .ts file whenever the file have changes.

### Configure typescript (Initialize a tsconfog.json)
```
tsc --init 
```
### Understanding tsconfig.json

<code>Target:</code> This tells typescript the version of the javascript it should compile into. By default is set to JS version ES2016

<text>
<code>lib:</code> It provides libraries that we want to make available to Typescript globally. It contains some default values. <code>DOM</code>, <code>ES2016</code>, <code>DOM.Iterable</code>, and <code>ScriptHost</code> are the default libraries.<br>
<code> jsx: </code> Controls how JSX constructs are emitted in JavaScript files.<br>
<code>experimentalDecorators</code> This allow the use of <code>decorators</code> in the ts file. <br>
<code>sourceMap: </code> It useful to debug ts file in the browser´s dev tools.<br>
<code>allowJs: </code> When is enabled the js file will get compiled along with ts files.<br>
<code>rootDir: </code> It shows the path to the root folder or where ts file is located.<br>
<code>outDir: </code> Shows where will be the compiled js files. By default after compilation the .ts and .js file will stored in the root. <br>
<text>

### Change outDir location
```
"outDir": "./dist", 
```
#### Now running the next command, it will create the .js and .ts file in a folder named "dist"
```
tsc -w
```

