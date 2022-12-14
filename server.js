const express = require('express');
const session = require('express-session');
const routes= require('./controllers')
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const SequelizeStore= require('connect-session-sequelize')(session.Store);
const app = express();
// const hbs = exphbs.create({defaultLayout: 'main'});


const hbs = exphbs.create({ defaultLayout: 'main',
layoutsDir: "",})
const PORT = process.env.PORT || 9999;

//creating a session middleware with cookie properties
const sess= {
  secret: 'no more breath',
  cookie: {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
  };
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, '/public')));

// const days =require('./models/Day');
// const users=require('./models/User');


//Today routes
app.use(routes);

sequelize.sync({force: false}).then(()=>{
  app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });
});


