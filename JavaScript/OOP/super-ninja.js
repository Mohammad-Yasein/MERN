class Ninja {
  constructor(name, health = 10, speed = 3, strength = 3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
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

// ================================================================================

class Sensei extends Ninja {
  constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
    super(name, health, speed, strength);
    this.wisdom = wisdom;
  }
  speakWisdom() {
    this.drinkSake();
    console.log(`
    What one programmer can do in one month, two programmers can do in two months.
    `);
  }
}

const superSensei = new Sensei('Master Splinter');
superSensei.speakWisdom();
superSensei.showStats();
