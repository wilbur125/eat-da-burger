require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js")

var PORT = process.env.PORT;
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});