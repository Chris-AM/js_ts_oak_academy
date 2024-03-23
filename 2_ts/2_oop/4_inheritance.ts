import { EncapsulatedPlayer } from "./3_encapsulation";

// Inheritance is a way to create a new class using details of an existing class
// The new class is called a derived class or child class
// The existing class is called a base class or parent class
// The derived class inherits the properties and methods of the base class
// The derived class can also have its own properties and methods
// Mario IS-A EncapsulatedPlayer
class Mario extends EncapsulatedPlayer {
  // Mario HAS-A hat type
  private hatType: string; // must use getter and setter methods to access this property
  // protected hatType: string; // protected access modifier

  // The constructor method is a special method
  // of a class for creating and initializing an object of that class
  // It is called when the class is instantiated
  // It can include parameters
  // The child class constructor must call parent class constructor
  // using the super() method
  // The super() method refers to the parent class
  // It is used to call the constructor of the parent class
  constructor() {
    super();
  }

  setHatType(hatType: string) {
    this.hatType = hatType;
  }
  getHatType(): string {
    return this.hatType;
  }
  // The derived class can also have its own properties and methods
  // The greet method is unique to the Mario class
  greet() {
    console.log(`It's me, ${this.getName()}! from my own class!!!`);
  }
}

class Peach extends EncapsulatedPlayer {
  dressColor: string;

  constructor() {
    super();
  }

  setDressColor(dressColor: string) {
    this.dressColor = dressColor;
  }
  getDressColor(): string {
    return this.dressColor;
  }

  greet(): void {
    console.log(`Hello! my name is ${this.getName()}! from my own class!!!`);
  }
}

const mario = new Mario();
mario.setHatType("King Hat");
mario.setName("Mario");
mario.setSpeed(10);
mario.setHealth(100);
mario.greet();
const mariosHat = mario.getHatType();
const mariosSpeed = mario.getSpeed();
const mariosHealth = mario.getHealth();
console.log("Mario's data => ", { mariosHat, mariosSpeed, mariosHealth });

const peach = new Peach();
peach.setName("Peach");
peach.setDressColor("Pink");
peach.setSpeed(10);
peach.setHealth(100);
peach.greet();
const peachsDressColor = peach.getDressColor();
const peachsSpeed = peach.getSpeed();
const peachsHealth = peach.getHealth();
console.log("Peach's data => ", {
  peachsDressColor,
  peachsSpeed,
  peachsHealth,
});

// By the way, Child classes can also has their own child classes
// Villian IS-A EncapsulatedPlayer
class Villian extends EncapsulatedPlayer {
  // Villian HAS-A moto
  private moto: string;

  setMoto(moto: string) {
    this.moto = moto;
  }
  getMoto(): string {
    return this.moto;
  }

  // Villian HAS-A call minions method
  callMinions() {
    console.log("Minions! Attack!");
  }
}

// Bowser IS-A Villian
class Bowser extends Villian {
  // Bowser HAS-A shell type
  private shellType: string;

  setShellType(shellType: string) {
    this.shellType = shellType;
  }
  getShellType(): string {
    return this.shellType;
  }

  greet(): void {
    console.log(`I'm ${this.getName()}! from my own class!!! FEAR ME!`);
  }
  // Bowser HAS-A call minions method
  callMinions() {
    console.log("Koopa Troopas! Attack!");
  }
}

const bowser = new Bowser();
bowser.setName("Bowser");
bowser.setShellType("Spiked");
bowser.setSpeed(3);
bowser.setHealth(100);
bowser.setMoto("Kidnapping Peach");
bowser.callMinions();
const bowsersShellType = bowser.getShellType();
const bowsersSpeed = bowser.getSpeed();
const bowsersHealth = bowser.getHealth();
const bowsersMoto = bowser.getMoto();
console.log("Bowser's data => ", {
  bowsersShellType,
  bowsersSpeed,
  bowsersHealth,
  bowsersMoto,
});