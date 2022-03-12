## Typescript subtopics

### Decorators
Provide a way to add annotations and meta-programming syntax for class declarations and members. To enable experimental support for decorators you can enable the experimentalDecorators compiler option either on the command line or in the <cod>tsconfig.json</code>. <br>
<b>Command Line:</b>
```
tsc --target ES5 --experimentalDecorators
```
<b>tsconfig.json</b>
```
{
  "compilerOptions": {
    "target": "ES5",
    "experimentalDecorators": true
  }
}
```
Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property or parameter. Decorators use the form <code>@expression</code>, where expression must be evaluate to a function that will be called at runtime with information about the decorated declaration. 

type<code>@sealed</code>

```typescript
  function sealed(target) {
    // do something with 'target' ...
  }
```

#### Decorator Factories
Decorator factory is to customize how a decorator is applied to a declaration. 

#### Decorator Composition
Multiple decorators can be applied to a declaration on a single line
```
@f @g x
```

### Modules
Modules are executed within their own scope, not in the global scope; this means that variables, functions, classes, etc. declared in a module are not visible outside the module unless they are explicity exported using one fot the export forms. To consume a variable, function, class, interface, etc. exported from a different module, it has to be imported using one of the import forms.<br>
Exporting a declaration

StringValidator.ts
```typescript
export interface StringValidator {
  isAcceptable(s: string): boolean;
}
```

ZipCodeValidator.ts
```typescript
import { StringValidator } from "./StringValidator";
export const numberRegexp = /^[0-9]+$/;
export class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}
```

Export statements
Export statements are handy when export need to be renamed for consumers.
```typescript
class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}
export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };
```

Optionally, a module can wrap one or more modules and combine all their exports using export * from "module" syntax.
```typescript
export * from "./StringValidator"; // exports 'StringValidator' interface
export * from "./ZipCodeValidator"; // exports 'ZipCodeValidator' class and 'numberRegexp' constant value
export * from "./ParseIntBasedZipCodeValidator"; //  exports the 'ParseIntBasedZipCodeValidator' class
// and re-exports 'RegExpBasedZipCodeValidator' as alias
// of the 'ZipCodeValidator' class from 'ZipCodeValidator.ts'
// module.
```

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

