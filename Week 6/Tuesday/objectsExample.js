var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Defines a class Player with attributes
var Player = /** @class */ (function () {
    function Player() {
    }
    //Method 1
    Player.prototype.greet = function () {
        console.log("Hello my name is ".concat(this.name));
    };
    //Method 2
    //Set value of the privtate attribute
    Player.prototype.setLives = function (lives) {
        this.lives = lives;
    };
    Player.prototype.getLives = function () {
        if (this.lives < 1) {
            return "".concat(this.name, " have ").concat(this.lives, " lives, ").concat(this.name, " died");
        }
        else {
            return "".concat(this.name, " has ").concat(this.lives, " lives.");
        }
    };
    //Inheritance
    Player.prototype.attack = function () {
        console.log('Default attack');
    };
    Player.prototype.superPower = function () {
        console.log('Super Fire Bros');
    };
    return Player;
}());
//Inheritance: Override the method attack
var PlayerRankedUp = /** @class */ (function (_super) {
    __extends(PlayerRankedUp, _super);
    function PlayerRankedUp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayerRankedUp.prototype.attack = function () {
        console.log('Lava attack');
    };
    //Polymorphism
    PlayerRankedUp.prototype.superPower = function () {
        _super.prototype.superPower.call(this);
        console.log('SUPER FIRE BROS!!');
    };
    return PlayerRankedUp;
}(Player));
//Defines an Object Player named mario
var mario = new Player();
mario.name = 'Mario';
mario.health = 10;
mario.isInvincible = true;
mario.setLives(2);
var marioRanked = new PlayerRankedUp();
marioRanked.name = 'Super Mario';
//Defines an Object Player named peach
var peach = new Player();
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
