// Is it really going to happen
// that we´ll instanciate a partent class?
//! const heroImplementation = new Hero();
// Abstract classes are classes that can't be instantiated
// but can be inherited by other classes
// Abstract classes are used to define a blueprint for other classes

abstract class Pokemon {
  protected name: string;
  protected types: string[];
  protected health: number;
  protected damageReceived: number;

  setName(name: string): void {
    this.name = name;
  }

  setTypes(types: string[]): void {
    this.types = types;
  }

  setHealth(health: number): void {
    this.health = health;
  }

  setDamageReceived(damageReceived: number): void {
    this.damageReceived = damageReceived;
  }

  getName(): string {
    return this.name;
  }

  getTypes(): string[] {
    return this.types;
  }

  getHealth(): number {
    return this.health;
  }

  getDamageReceived(): number {
    return this.damageReceived;
  }

  abstract getInfo(): void;
  abstract attack(): void;
  abstract getDamage(): void;
}

class Zubat extends Pokemon {
  getInfo(): void {
    const clearTypes: string = this.types.join(" and ");
    console.log(`${this.name} is a ${clearTypes} type Pokemon`);
  }
  attack(): void {
    console.log(`${this.name} used Wing Attack`);
  }
  getDamage(): void {
    if (this.damageReceived > 0) {
      const healthLeft: number = this.health - this.damageReceived;
      this.health -= this.damageReceived;
      console.log(
        `${this.name} received ${this.damageReceived} damage, has ${healthLeft} health left`
      );
    } else {
      console.log(`${this.name} has not received any damage`);
    }
  }
}

const zubat = new Zubat();
zubat.setName("Zubat");
zubat.setTypes(["Poison", "Flying"]);
zubat.setHealth(100);
zubat.setDamageReceived(20);
zubat.getInfo();
zubat.attack();
zubat.getDamage();

zubat.setDamageReceived(0);
zubat.getDamage();

enum Eras {
  PAST = "Past",
  FUTURE = "Future",
}

abstract class Paradox extends Pokemon {
  protected era: Eras;

  setEra(era: Eras): void {
    this.era = era;
  }

  getEra(): Eras {
    return this.era;
  }

  abstract callMainParadox(): void;
}

class IronHands extends Paradox {
  getInfo(): void {
    const clearTypes: string = this.types.join(" and ");
    console.log(`${this.name} is a ${clearTypes} type Paradox Pokemon`);
  }
  attack(): void {
    console.log(`${this.name} used Iron Fist`);
  }
  getDamage(): void {
    if (this.damageReceived > 0) {
      const healthLeft: number = this.health - this.damageReceived;
      this.health -= this.damageReceived;
      console.log(
        `${this.name} received ${this.damageReceived} damage, has ${healthLeft} health left`
      );
    } else {
      console.log(`${this.name} has not received any damage`);
    }
  }
  callMainParadox(): void {
    this.era === Eras.PAST
      ? console.log("Calling Koraidon")
      : console.log("Calling Miraidon");
  }
}

const ironHands = new IronHands();
ironHands.setName("Iron Hands");
ironHands.setTypes(["Electric", "Fighting"]);
ironHands.setHealth(100);
ironHands.setDamageReceived(30);
ironHands.setEra(Eras.FUTURE);
ironHands.getInfo();
ironHands.attack();
ironHands.getDamage();