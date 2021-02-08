const express = require('express');
const MongooseConfig = require('./server/config/mongoose.config');
const JokeRoutes = require('./server/routes/joke.routes');

const app = express();
const database = 'jokes';
const port = 8000;

app.use(express.json(), express.urlencoded({ extended: true }));
MongooseConfig(database);
JokeRoutes(app);
app.listen(port, () => console.log('THE SERVER IS ALL FIRED UP ON PORT ' + port + ' ...'));
