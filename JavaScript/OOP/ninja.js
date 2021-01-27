class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 10;
    this.speed = 3;
    this.strength = 3;
  }
  sayName() {
    console.log(`
    Ninja name is ${this.name}
    `);
  }
  showStats() {
    console.log(`
    Ninja name is ${this.name}
    Ninja health is ${this.health}
    Ninja speed is ${this.speed}
    Ninja strength is ${this.strength}
    `);
  }
  drinkSake() {
    this.health += 10;
  }
}

const ninja = new Ninja('Hyabusa');
ninja.sayName();
ninja.showStats();
ninja.drinkSake();
ninja.showStats();
