const CountryController = require('../controllers/country.controller');

module.exports = app => {
  app.get('/api/countries', CountryController.getAllCountries);
  app.post('/api/countries', CountryController.createCountry);
};
