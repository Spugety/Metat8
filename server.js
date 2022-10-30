const express = require('express');
const session = require('express-session');
const routes= require('./controllers')
const exphbs = require('express-handlebars');
const Sequelize = require('./config/connection');
const app = express();
const hbs = exphbs.create({});
const PORT = process.env.PORT || 9999;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const days =require('./models/Day');
const users=require('./models/User');
const sequelize = require('./config/connection');

// create a route that listens for a get to '/'
// -- get any data needed from the db if applicable
// -- render your 'all' template to the user

//Today routes
app.use(routes);

sequelize.sync({force: true}).then(()=>{
  app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });
});


