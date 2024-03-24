/**
 *
 *  User Stoty (US):
 * - As User, I'm happy with the Mario´s Game. Now, I want
 *  to create a new game of RPG. First I want to create an
 *  Archer, Mage, and Warrior classes. Each one of them
 * should have a Attack method that says "I'm [name]! I'm
 *  attacking with [weapon]!".
 */

class Hero {
  private name: string;
  private weapon: string;
  private health: number;

  setName(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
  setWeapon(weapon: string) {
    this.weapon = weapon;
  }
  getWeapon(): string {
    return this.weapon;
  }
  setHealth(health: number) {
    this.health = health;
  }
  getHealth(): number {
    return this.health;
  }

  attack() {
    console.log(`I'm ${this.name}! I'm attacking with ${this.weapon}!`);
  }
  getDamage() {
    console.log(
      `I'm ${this.name}! I'm getting damage!. My health is ${this.health}!`
    );
  }
}

class Archer extends Hero {
  arrows: number;
  constructor() {
    super();
    this.setWeapon("Bow");
  }

  setArrows(arrows: number) {
    this.arrows = arrows;
  }
  getArrows(): number {
    return this.arrows;
  }

  attack() {
    const arrows = (this.arrows -= 1);
    console.log(
      `I'm ${this.getName()}! I'm attacking with ${this.getWeapon()}! I have ${arrows} arrows left!`
    );
  }
  getDamage(): void {
    const health = this.getHealth();
    console.log(
      `I'm ${this.getName()}! I'm getting damage!. My health is ${health}!`
    );
  }
}

class Mage extends Hero {
  mana: number;
  constructor() {
    super();
    this.setWeapon("Staff");
  }

  setMana(mana: number) {
    this.mana = mana;
  }
  getMana(): number {
    return this.mana;
  }

  attack() {
    const mana = (this.mana -= 1);
    console.log(
      `I'm ${this.getName()}! I'm attacking with ${this.getWeapon()}! I have ${mana} mana left!`
    );
  }
  getDamage(): void {
    const health = this.getHealth();
    console.log(
      `I'm ${this.getName()}! I'm getting damage!. My health is ${health}!`
    );
  }
}

class Warrior extends Hero {
  swordHealth: number;
  constructor() {
    super();
    this.setWeapon("Sword");
  }

  setSwordHealth(swordHealth: number) {
    this.swordHealth = swordHealth;
  }
  getSwordHealth(): number {
    return this.swordHealth;
  }

  attack() {
    const health = (this.swordHealth -= 1);
    console.log(
      `I'm ${this.getName()}! I'm attacking with ${this.getWeapon()}! My sword have ${health} health left!`
    );
  }
  getDamage(): void {
    const health = this.getHealth();
    console.log(
      `I'm ${this.getName()}! I'm getting damage!. My health is ${health}!`
    );
  }
}

// Here the Polymorphism is shown
const legolas = new Archer();
legolas.setName("Legolas");
legolas.setArrows(10);
legolas.setHealth(100);
// legolas.attack();
// legolas.getDamage();

const gandalf = new Mage();
gandalf.setName("Gandalf");
gandalf.setMana(10);
gandalf.setHealth(100);
// gandalf.attack();
// gandalf.getDamage();

const aragorn = new Warrior();
aragorn.setName("Aragorn");
aragorn.setSwordHealth(10);
aragorn.setHealth(100);
// aragorn.attack();
// aragorn.getDamage();

// Now create a class Tribe which has many Heroes
// and each one of them has to attack and get damage

class Tribe {
  heroes: Hero[] = [];

  // contructing the Tribe with an array of Heroes
  // to be able to use the methods of the Hero class
  // So we don't need to create the methods again
  constructor(heroes: Hero[]) {
    this.heroes = heroes;
  }

 // setHeoes(heroes: Hero[]) {
//    this.heroes = heroes;
//  }
//  getHeroes(): Hero[] {
//    return this.heroes;
//  }

  multiAttack() {
    // for of loop
    for (const hero of this.heroes) {
      hero.attack();
    }
    // forEach loop
    // this.heroes.forEach((hero) => hero.attack());
  }
  multiGetDamage() {
    // for of loop
    for (const hero of this.heroes) {
      hero.getDamage();
    }
    // forEach loop
    // this.heroes.forEach((hero) => hero.getDamage());
  }
}

const heroes: Hero[] = [legolas, gandalf, aragorn];
const fellowship: Tribe = new Tribe(heroes);
fellowship.multiAttack();
fellowship.multiGetDamage();
console.log("Fellowship => ", fellowship);

class Wizard extends Mage {
  constructor() {
    super();
  }
}

class Elf extends Archer {
  constructor() {
    super();
  }
}

// this is syntactly correct
const wizard: Hero = new Wizard();
// but this is not correct
// const wizard2: Wizard = new Hero();