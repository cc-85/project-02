//3rd party packages
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
// IMPORTANT
const bodyParser = require('body-parser');
//IMPORTANT used to make PUT and DELETE requests with forms
const methodOverride = require('method-override');
//IMPORTANT - this allows us to login (creates session cookies)
const session = require('express-session');
const flash = require('express-flash'); //allows flash messaging
//IMPORTANT - this checks that the user is logged in
const auth = require('./lib/auth');
const mongoose = require('mongoose');
const routes = require('./config/routes');

//create the app
const app = express();
const { port, dbURI } = require('./config/environment');

//connect to the database
mongoose.connect(dbURI);

//app settings
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

//use 3rd party packages
app.use(ejsLayouts);
app.use(express.static(`${__dirname}/public`));


//add body-parser BEFORE the routes
app.use(bodyParser.urlencoded({ extended: true }));
//add method-override BEFORE the routes
app.use(methodOverride(req => {
  if(req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

//add express-sessions BEFORE the routes
app.use(session({
  secret: 'shhh',
  resave: false,
  saveUninitialized: false
}));

//add express-flash AFTER express-session and BEFORE the routes
app.use(flash());

//use custom auth middlware, to check whether the user is logged in
// must go BEFORE the routes and AFTER the session
app.use(auth);

//routes
app.use(routes);

app.listen(port, () => console.log(`Express is running on port ${port}`));
