import { Person } from './Person';

let p = new Person('Alexa', 'Lorem', 30, 90000, 'Math');
let s = new Person('Josh', 'Ipsum', 17, 0, '');

console.log(p.getFullName());
console.log(s.getFullName());
s.salary = 1000000;

console.log(p.salary);
console.log(s.salary);

s.assignClass('Developer');
s.assignClass('History');
s.classes.push('Math');

console.log(s.classes);
console.log(p.classes);

console.log(s.main_class);
console.log(p.main_class);
