const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const helper = require('handlebars-helpers')();
const routes = require('./routes/index');
const helpers = require('./views/helpers/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    helpers: helpers
  })
);

// exphbs.registerHelper('upperCase', (name) => {
//   return name.toUpperCase();
// });

app.set('port', process.env.PORT || 3000);
app.use(routes);

module.exports = app;
