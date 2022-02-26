export class Person {
  name: string = '';
  last_name: string = '';
  age: number = 0;

  constructor(name: string, last_name: string, age: number) {
    this.name = name;
    this.last_name = last_name;
    this.age = age;
  }

  getFullName() {
    return `${this.name} ${this.last_name}`;
  }
}
