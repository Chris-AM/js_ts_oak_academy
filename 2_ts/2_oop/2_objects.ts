// importing the class from 1_oop.ts
// and creating an instance of the class
import { Player } from "./1_classes";

// creating an instance of the class
// that's also known as "instantiation"
const mario: Player = new Player();
// you can access the properties and methods of the class
// using the dot notation
// dot notation is used to access properties and methods of objects
mario.name = "Mario";
mario.isInvincible = true;
mario.health = 100;
mario.speed = 10;

const peach: Player = new Player();
peach.name = "Peach";
peach.isInvincible = false;
peach.health = 100;
peach.speed = 10;

const luigi: Player = new Player();
luigi.name = "Luigi";
luigi.isInvincible = true;
luigi.health = 50;
luigi.speed = 50;
// creating different instances of the same class
// is also known as "polymorphism"
// "poly" means "many"
// "morph" means "form"
// "ism" means "condition"

mario.crush = peach;
// by typing a variable as a class
// you can access the properties and methods of the class
// using the dot notation
console.log("mario's crush name is: ", mario.crush.name); // Peach
mario.greet(); // Hello! my name is Mario!
peach.greet(); // Hello! my name is Peach!
// Why the greeting method shows the Player's name?
// Because the greeting method uses the "this" keyword
// to access the name property of the Player class
// "this" refers to the object that is calling the method
// in this case, mario and peach