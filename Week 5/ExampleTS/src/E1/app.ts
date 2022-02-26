class Song {
  name: string;
  author: string;

  constructor(x: string, a: string) {
    this.name = x;
    this.author = a;
  }

  mostrarBonito(this: Song) {
    //return `🎶 ${this.author} -- ${this.name}`;
    return '🎶 ' + this.author + ' === ' + this.name;
  }
}

let s0 = new Song('Despacito', 'Luis Fonci');
let s1 = new Song('Lorem', 'Ipsum');

console.log(s0.mostrarBonito());
console.log(s1.mostrarBonito());
