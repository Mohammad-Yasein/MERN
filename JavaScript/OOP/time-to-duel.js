class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

class Unit extends Card {
  constructor(name, cost, power, resilience) {
    super(name, cost);
    this.power = power;
    this.resilience = resilience;
  }
  attack(target) {
    if (target instanceof Unit) {
      target.resilience -= this.power;
      console.log(`reduce target's resilience by ${this.power}`);
    } else {
      console.log('Target must be a Unit!');
    }
  }
  showDetails() {
    console.log(`
    Name is ${this.name}
    Power is ${this.power}
    Resilience is ${this.resilience}
    `);
  }
}

class Effect extends Card {
  constructor(name, cost, state, magnitude) {
    super(name, cost);
    this.state = state;
    this.magnitude = magnitude;
  }
  applyEffect(target) {
    if (target instanceof Unit) {
      target[this.state] += this.magnitude;
      let action = this.magnitude >= 0 ? 'increase' : 'reduce';
      console.log(`${action} target's ${this.state} by ${Math.abs(this.magnitude)}`);
    } else {
      console.log('Target must be a Unit!');
    }
  }
}

const redBeltNinja = new Unit('Red Belt Ninja', 3, 3, 4);
const blackBeltNinja = new Unit('Black Belt Ninja', 4, 5, 4);

const hardAlgorithm = new Effect('Hard Algorithm', 2, 'resilience', 3);
const unhandledPromiseRejection = new Effect('Unhandled Promise Rejection', 1, 'resilience', -2);
const pairProgramming = new Effect('Pair Programming', 3, 'power', 2);

blackBeltNinja.showDetails();
redBeltNinja.attack(blackBeltNinja);
blackBeltNinja.showDetails();
