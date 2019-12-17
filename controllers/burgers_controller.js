// Node Dependencies
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


// Create routes
router.get('/', function (req, res) {
  res.redirect('/burgers');
});

router.get("/burgers", function(req, res) {
// express callback 
    burger.all(function(burgerData) {
// Index
      res.render("index", { burger_data: burgerData });
    });
  });
  
// post route -> back to index
  router.post("/burgers/create", function(req, res) {
// takes the request object using it as input for burger.addBurger
    burger.create(req.body.burger_name, function(result) {
// print to page
// render to index with handle
      console.log(result);
      res.redirect("/");
    });
  });
  
// route to index
  router.put("/burgers/:id", function(req, res) {
    burger.update(req.params.id, function(result) {
// render back to index with handle
      console.log(result);
// reload page 
      res.sendStatus(200);
    });
  });
  
  module.exports = router;
  