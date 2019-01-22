// Requires
var colors = require('colors');
var express = require('express');
var layouts = require('express-ejs-layouts');
var methodOverride= require('method-override');

// declar express app
var app = express();

// Set up views
app.set('view engine', 'ejs');

// Use Middleware
app.use(methodOverride('_method'));
app.use(layouts);
app.use(express.urlencoded({ extended: false }));
app.use('/', express.static('static'));

// Declare routes
app.get('/', (req, res)=> {
  res.render('home');
});

// Include any controllers
app.use("/favorites", require("./controllers/favorites"));

// Listen on a port
app.listen(process.env.PORT || 3000, ()=> {
    console.log(`♨︎ You're listening to the smooth sounds of port 3010 ♨︎` .magenta);
});