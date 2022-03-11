## Typescript subtopics

### Decorators
Provide a way to add annotations and meta-programming syntax for class declarations and members. To enable experimental support for decorators you can enable the experimentalDecorators compiler option either on the command line or in the <cod>tsconfig.json</code>.
Command Line:
```
tsc --target ES5 --experimentalDecorators
```
tsconfig.json
```
{
  "compilerOptions": {
    "target": "ES5",
    "experimentalDecorators": true
  }
}
```
Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property or parameter. Decorators use the form <code>@expression</code>, where expression must be evaluate to a function that will be called at runtime with information about the decorated declaration. 

### Modules

### namespaces

### Type Assertion

### Typescript types

* Array
* Tuple
* Enum
* Union
* Literals
* Any
* Void
* Unknown 
* Never
* Function types
* Types Alias

