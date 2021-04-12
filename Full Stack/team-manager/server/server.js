const express = require('express');
const cors = require('cors');
const MongooseConfig = require('./config/mongoose.config');
// ====
const PlayerRoutes = require('./routes/player.routes');
// ====

const app = express();
const port = 8000;
// ====
const database = 'players';
// ====

app.use(express.json(), express.urlencoded({ extended: true }), cors());
MongooseConfig(database);
// ====
PlayerRoutes(app);
// ====
app.listen(port, () => console.log('THE SERVER IS ALL FIRED UP ON PORT ' + port + ' ...'));
