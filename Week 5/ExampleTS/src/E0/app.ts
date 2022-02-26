class Song {
  name: string;

  constructor(x: string) {
    this.name = x;
  }
}

let s0 = new Song('Despacito'); // instanciando un objecto de la clase Song

let s1 = { name: 'Despacito' };

console.log(s0);
console.log(s0 instanceof Number);
console.log(s0 instanceof Song);
console.log(s0 instanceof Array);
console.log(s0 instanceof Object);

console.log('==============================');

console.log(s1);
console.log(s1 instanceof Number);
console.log(s1 instanceof Song);
console.log(s1 instanceof Array);
console.log(s1 instanceof Object);
