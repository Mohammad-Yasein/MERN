const express = require('express');
const User = require('./models/User');
const Company = require('./models/Company');

const app = express();
const port = 8000;

app.get('/api/:data/new', (req, res) => {
  const data = req.params.data;
  data == 'users'
    ? res.json(new User())
    : data == 'companies'
    ? res.json(new Company())
    : res.json({ status: '404 Not Found' });
});

app.get('/api/user/company', (req, res) => res.json([new User(), new Company()]));

app.listen(port);
