export class Person {
  name: string;
  last_name: string;
  age: number;
  salary: number;
  main_class: string;
  classes: string[] = [];

  constructor(
    name: string,
    last_name: string,
    age: number,
    salary: number,
    main_class: string
  ) {
    this.name = name;
    this.last_name = last_name;
    this.age = age;
    this.salary = salary;
    this.main_class = main_class;
  }

  assignClass(className: string) {
    this.classes.push(className);
  }

  getFullName() {
    return `${this.name} ${this.last_name}`;
  }
}
