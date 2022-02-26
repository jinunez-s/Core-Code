import { Person } from './Person';

export class Professor extends Person {
  salary: number;
  main_class: string;

  constructor(
    salary: number,
    name: string,
    last_name: string,
    main_class: string,
    age: number
  ) {
    super(name, last_name, age);
    this.salary = salary;
    this.main_class = main_class;
  }
}
