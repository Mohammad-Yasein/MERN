const Country = require('../models/country.model');

module.exports.createCountry = (request, response) => {
  Country.create(request.body)
    .then(country => response.json(country))
    .catch(error => response.status(400).json(error));
};

module.exports.getAllCountries = (request, response) => {
  Country.find({})
    .then(countries => response.json(countries))
    .catch(error => response.status(400).json(error));
};
