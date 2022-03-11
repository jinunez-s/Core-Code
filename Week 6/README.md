## Monday
### Input Class

* [Tasks](https://github.com/jinunez-s/Core-Code-01/tree/master/Week%206/Monday)

## Tuesday
* [Tasks](https://github.com/jinunez-s/Core-Code-01/tree/master/Week%206/Tuesday)
## Wednesday
* [Tasks](https://github.com/jinunez-s/Core-Code-01/blob/master/Week%206/Wednesday/Challenges.ts)
## Thursday
* Done
### OOP Absstraction, Inheritance, Polymorphism and Encapsulation.

```java
//Father class
public class Enemy {
  //Encapsulation (private int health)
  private int health;
  public void Talk(){
    System.out.println("I'm an enemy, run!");
  }

  public void getHealth(){
    System.out.println(health);
  }
  public void setHealth(int healt){
    health = health;
  }
}

//Children class 1
//Inheritance (Vampire extends Enemy)
public class Vampire extends Enemy{
  //Over writing the clas talk ->
  public void Talk(){
    System.out.println("I'm a vampire, give me your blood!");
  }
}
//Children class 2
public class werewolf extends Enemy{
  //Over writing the clas talk ->
  public void Talk(){
    System.out.println("I'm a werewolf, I want to bite you! ");
  }
}

//Main class
public Main {
  public static void main(String args[]{
    //Creating an Object Enemy called vampires
    //Abstraction (enemy.Talk())
    Enemy enemy = new Enemy();
    enemy.Talk(); //Will print: I'm an enemy, run!

    Vampire vampire = new Vampire();
    vampire.Talk(); //Will print: I'm a vampire, give me your blood!

    //Polymorphism (Enemy [] enemies = {vampire, werewolf};)
    Enemy [] enemies = {vampire, werewolf}

    enemies[0].Talk();
    enemies[1].Talk();
  }
}
```
### Abstract Classes vs Interfaces
- Abstract classes
1.  Generalize behavior.
2. An abstract class in Object-Oriented Programming (OOP) is a class that cannot be instantiated. In other words, you cannot create an object using the abstract class.
3. Constructors are allowed.
4.  Abstract class can have final, non-final, static and non-static variables
5. An abstract class may contain non-final variables.

- Interfaces standardize behavior
1. An interface can extend another Java interface only, an abstract class can extend another Java class and implement multiple Java interfaces.
2. The interface has only static and final variables.
3. Variables declared in a Java interface are by default final.
4. Interface can have only abstract methods.

