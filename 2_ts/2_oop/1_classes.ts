// Creating and exporting class
// export means that this class can be imported in other files
// that's also known as "modular" programming
// class Player {} couldn't be imported in other files

// class ClassName {} is a class declaration
export class Player {
  name: string; // public
  isInvincible: boolean;
  health: number;
  speed: number;
  crush: Player;

  greet() {
    console.log(`Hello! my name is ${this.name}!`);
  }
}


