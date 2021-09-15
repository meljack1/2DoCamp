const path = require('path');
const express = require('express');
const session = require('express-session');
//const routes = require('./controllers');

const dbConnection = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'CDM best group!',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: dbConnection
    })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});