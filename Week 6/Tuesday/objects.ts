//Defines a class Player with attributes
class Player {
    name: string;
    health: number;
    isInvincible: boolean;
    crush: Player;
    //Encapsulation of variable lives. can´t be edited 
    private lives: number;
    //Method 1
    greet(){
        console.log(`Hello my name is ${this.name}`);
    }
    
    //Method 2
    //Set value of the privtate attribute
    setLives(lives: number){
        this.lives = lives;
    }

    getLives(){
        if(this.lives < 1 ){
            return `${this.name} have ${this.lives} lives, ${this.name} died`;
        }else{
            return `${this.name} has ${this.lives} lives.`;
        }
    }
    //Inheritance
    attack(){
        console.log('Default attack');
    }

    superPower(){
        console.log('Super Fire Bros')
    }
}
//Inheritance: Override the method attack
class PlayerRankedUp extends Player {
    attack() {
        console.log('Lava attack');
    }

    //Polymorphism
    superPower(): void {
        super.superPower()
        console.log('SUPER FIRE BROS!!');        
    }

}

//Defines an Object Player named mario
const mario = new Player();
mario.name = 'Mario';
mario.health = 10;
mario.isInvincible = true;
mario.setLives(2);

const marioRanked = new PlayerRankedUp();
marioRanked.name = 'Super Mario';

//Defines an Object Player named peach
const peach = new Player();
peach.name = 'Peach';
peach.health = 8;
peach.isInvincible = true;



//console

mario.greet();
peach.greet();
console.log(mario.getLives());
console.log('Basic attack: ');
mario.attack();
console.log('Ranked up attack: ');
marioRanked.attack();
console.log('Reloading... ... ...');
marioRanked.superPower();
console.log('END');
/*
console:
Hello my name is Mario
Hello my name is Peach
Mario has 2 lives.
Basic attack:
Default attack
Ranked up attack:
Lava attack
Reloading... ... ...
Super Fire Bros
SUPER FIRE BROS!!
END

*/

