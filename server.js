const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers/api/userRoutes');
const Sequelize = require('./config/connection');
const app = express();
const hbs = exphbs.create({});
const PORT = process.env.PORT || 9999;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const days =require('./models/Days');
const users=require('./models/Users');
const sequelize = require('./config/connection');

//Today routes
app.use('/today', require('./controllers/api/todayRoutes'));

sequelize.sync().then(()=>{
  app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });
});


