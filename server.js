// Node Dependencies
var express = require('express');
var PORT = process.env.PORT || 8000;


var app = express();
app.use(express.static(process.cwd() + '/public'));


// Parse 
app.use(express.urlencoded({ extended: true }));

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var router = require('./controllers/burgers_controller.js');
app.use(router);

app.listen(PORT, function() {
    console.log("Listening on port:%s", PORT);
  });
  