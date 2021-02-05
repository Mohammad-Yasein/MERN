const faker = require('faker');

class Company {
  constructor() {
    this._id = faker.random.uuid();
    this.name = faker.company.companyName();
    this.address = new Address();
  }
}

class Address {
  constructor() {
    this.street = faker.address.streetName();
    this.city = faker.address.city();
    this.state = faker.address.state();
    this.zipCode = faker.address.zipCode();
    this.country = faker.address.country();
  }
}

module.exports = Company;
