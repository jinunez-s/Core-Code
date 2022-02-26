import { Person } from './Person';

export class Student extends Person {
  classes: string[] = [];

  assignClass(className: string) {
    this.classes.push(className);
  }
}
