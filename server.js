const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, '/logs');
const session = require('express-session');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const hbs = exphbs.create({ helpers });

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};


// create a write stream (in append mode)
let accessLogStream = fs.createWriteStream(path.join(dirPath, 'apiRequests.log'), { flags: 'a' });

//start logging prior to routing
app.use(morgan('combined', { stream: accessLogStream }));

app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on port 3001'));
});
