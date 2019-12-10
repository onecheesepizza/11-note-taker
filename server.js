//dependencies
var express = require("express");

//init express as app
var app = express();

//set port
var PORT = process.env.PORT || 8080;

//config data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routing

//listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});