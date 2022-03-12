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

### Export statements
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
#### Default exports

Each module can optionally export a default export. Default exports are marked with the keyword default; and there can only be one default export per module. default exports are imported using a different import form.

default exports are really handy. For instance, a library like jQuery might have a default export of jQuery or $, which we’d probably also import under the name $ or jQuery.

```typescript
declare let $: JQuery;
export default $;
```

Default exports can also be just values. <br>
OneTwoThree.ts
```typescript
export default "123";
```
Log.ts
```typescript
import num from "./OneTwoThree";
console.log(num); // "123"
```

### namespaces

The module keyword was used when declaring an internal module, the namespace keyword can and should be used instead. This avoids confusing new users by overloading them with similarly named terms.

### Type Assertion

Type compatibility in TypeScript is based on structural subtyping. The basic rule for TypeScript’s structural type system is that x is compatible with y if y has at least the same members as x.

```typescript
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;
y = x; // OK
x = y; // Error
```

### Typescript types

* Array: Sepecify the type of array. <code>number[]</code>, <code>string[]</code> or use <code>const name: any[]</code>
* Tuple: A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions. [See Example](https://github.com/jinunez-s/Core-Code-01/blob/master/Week%207/Subtopics/example.ts)
* Enum: Enums allow a developer to define a set of named constants. Numeric enums (1, 2, 3), String enums (Copy the string), Heterogeneous enums (No = 0, Yes = "YES)
* Union: TypeScript allows us to use more than one data type for a variable or a function parameter. This is called union type. [See Example](https://www.tutorialsteacher.com/typescript/typescript-union)
* Literals: In javascript we can set const for do not change what is held inside variable. In typescript this is reflected by literals. [See example]
* Any: TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.
* Void: Similar to languages like Java, void is used where there is no data. For example, if a function does not return any value then you can specify void as return type.
* Unknown: All types are assignable to unknown. The unknown type is only assignable to the any type and the unknown type itself. [See Example](https://mariusschulz.com/blog/the-unknown-type-in-typescript)
* Never: TypeScript introduced a new type never, which indicates the values that will never occur. [see Example](https://www.tutorialsteacher.com/typescript/typescript-never)
* Function types: Named Functions, Anonymous Functions, Function Parameters, Optional Parameters and Default Parameters. [See Example](https://www.tutorialsteacher.com/typescript/typescript-function)
* Types Alias: We’ve been using object types and union types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name. A type alias is exactly that - a name for any type. [See Example]()


The DOM API can be used to change the document structure, style, and content. The API is so powerful that countless frontend frameworks (jQuery, React, Angular, etc.) have been developed around it in order to make dynamic websites even easier to develop.