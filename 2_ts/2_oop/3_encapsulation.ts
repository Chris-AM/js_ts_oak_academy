export class EncapsulatedPlayer {
  private name: string;
  private isInvincible: boolean;
  private health: number;
  private speed: number;
  private crush: EncapsulatedPlayer | null;

  // Constructor is a special method that is called when an object is created
  // It is used to initialize the object's properties
  // The constructor method is optional
  // If you don't provide a constructor method
  // TypeScript will provide a default constructor for you
  // The default constructor doesn't do anything
  // It's just an empty method
  //? PRO-TIP: You can use the constructor method to initialize the object's properties
  constructor() {
    this.name = "";
    this.isInvincible = false;
    this.health = 0;
    this.speed = 0;
    this.crush = null;
  }
  /*!
   * 2.A. Encapsulating properties
   */
  // you can access the private properties through methods
  // this is known as "encapsulation"
  // "encapsulate" means "to enclose in a capsule"
  // "capsule" means "a small case or container"
  // "encapsulation" means "to enclose in a capsule"

  // Setter methods are used to set the value of a property
  // So if you want to set the value of a private property
  // you don't use the dot notation directly
  // you use a method instead
  // Setters method receive a parameter
  // that is used to set the value of the private property
  setName(name: string) {
    this.name = name;
  }
  // Getter methods are used to get the value of a property
  // So if you want to get the value of a private property
  // you don't use the dot notation directly
  // you use a method instead
  // Getter methods don't receive parameters
  // they only return the value of the private property
  getName() {
    return this.name;
  }
  setIsInvincible(isInvincible: boolean) {
    this.isInvincible = isInvincible;
  }
  getIsInvincible() {
    return this.isInvincible;
  }
  setHealth(health: number) {
    if (health < 0) {
      console.log("Health can't be negative");
    }
    this.health = health;
  }
  // Since getter methods return the value of the private property
  // it is good practice to explicit the return type of the method
  getHealth(): number {
    return this.health;
  }
  setSpeed(speed: number) {
    speed < 0 ? console.log("Speed can't be negative") : (this.speed = speed);
  }
  getSpeed(): number {
    return this.speed;
  }
  setCrush(crush: EncapsulatedPlayer) {
    this.crush = crush;
  }
  getCrush(): EncapsulatedPlayer | null {
    return this.crush;
  }

  greet() {
    console.log(`Hello! my name is ${this.name}!`);
  }
}

const mario = new EncapsulatedPlayer();
/*!
 * 1. Accessing private properties directly is not allowed
 */
// this is imposible
// mario.name = "Mario";
// Because the name property is private
// and can't be accessed outside of the class
// This is known as "encapsulation"

/*!
 *   2.B. Accessing ecapsulated properties through methods
 */
// you can access the private properties through methods
mario.setName("Mario");
mario.setSpeed(10);
// By the way you can still set unwanted values
// mario.setHealth(-10); // Health can't be negative
mario.setHealth(100);

// you can directly reference the getmethod
// but it's not a good practice
// console.log(mario.getName());
// it's better to store the value in a variable
const marioName = mario.getName();
const marioSpeed = mario.getSpeed();
const marioHealth = mario.getHealth();
const marioCrush: EncapsulatedPlayer | string =
  mario.getCrush() === null ? "No crush" : mario.getCrush()!.getName();
//* PRO-TIP: Add params as object to console.log for better reading
// console.log({ marioName, marioSpeed, marioHealth, marioCrush });
