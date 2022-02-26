import { Person } from './Person';
import { Student } from './Student';
import { Professor } from './Professor';
export class Main {
  start() {
    let p = new Professor(90000, 'Lorem', 'Alexa', 'Math', 30);
    let s = new Student('Josh', 'Ipsum', 17);

    console.log(p.getFullName());
    console.log(s.getFullName());

    console.log(s.age);
    console.log(s.last_name);

    console.log(p.age);
    console.log(p.last_name);

    console.log(p.salary);
    // console.log(s.salary);

    s.assignClass('Developer');
    s.assignClass('History');
    s.classes.push('Math');

    console.log(s.classes);
    // console.log(p.classes);

    // console.log(s.main_class);
    console.log(p.main_class);
  }
}
