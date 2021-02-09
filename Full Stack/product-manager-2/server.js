const express = require('express');
const cors = require('cors');
const MongooseConfig = require('./server/config/mongoose.config');
const ProductRoutes = require('./server/routes/product.routes');

const app = express();
const database = 'products';
const port = 8000;

app.use(express.json(), express.urlencoded({ extended: true }), cors());
MongooseConfig(database);
ProductRoutes(app);
app.listen(port, () => console.log('THE SERVER IS ALL FIRED UP ON PORT ' + port + ' ...'));
