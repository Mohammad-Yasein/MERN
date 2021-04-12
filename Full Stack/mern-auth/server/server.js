const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const MongooseConfig = require('./config/mongoose.config');
// ====
const UserRoutes = require('./routes/user.routes');
const BookRoutes = require('./routes/book.routes');
const CountryRoutes = require('./routes/country.routes');
// ====

const app = express();
const port = 8000;
// ====
const database = 'mern_auth';
// ====

app.use(
  express.json(),
  express.urlencoded({ extended: true }),
  cookieParser(),
  cors({ credentials: true, origin: 'http://localhost:3000' })
);

MongooseConfig(database);
// ====
UserRoutes(app);
BookRoutes(app);
CountryRoutes(app);
// ====
app.listen(port, () => console.log('THE SERVER IS ALL FIRED UP ON PORT ' + port + ' ...'));
