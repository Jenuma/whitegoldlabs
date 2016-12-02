// -----------------------------------------------------------------------------------------------|
// server.js                                                                                      |
//                                                                                                |
// This is the main entry point for the MEAN app.                                                 |
//                                                                                                |         
// Author: Clifton Roberts                                                                        |         
// Date: 2 December 2016                                                                          |         
// -----------------------------------------------------------------------------------------------|

var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var dbConfig = require("../../config/db");
var routes = require("./routes");

var app = express();

// -----------------------------------------------------------------------------------------------|
// Static Directories                                                                             |
// -----------------------------------------------------------------------------------------------|
app.use("/angular", express.static(path.join(__dirname, "../../node_modules/angular")));
app.use("/jquery", express.static(path.join(__dirname, "../../node_modules/jquery/dist")));
app.use("/views", express.static(path.join(__dirname, "../client/views")));
app.use("/controllers", express.static(path.join(__dirname, "../client/controllers")));

// -----------------------------------------------------------------------------------------------|
// MongoDB Connection Logic                                                                       |
// -----------------------------------------------------------------------------------------------|
mongoose.connect(dbConfig.prodUrl);
var connection = mongoose.connection;

connection.on("error", console.error.bind(console, "Connection error: "));

connection.once("open", function() {
   console.log("Connected to: db.test"); 
});

mongoose.Promise = global.Promise;

// -----------------------------------------------------------------------------------------------|
// Routes                                                                                         |
// -----------------------------------------------------------------------------------------------|
app.use("/", routes);

app.get("/*", function(req, res) {
    res.sendFile(path.resolve(path.join(__dirname, "../client/views/index.html")));
});

var port = process.env.PORT || 8080;

app.listen(port);
console.log("Server running on port " + port + "...");
