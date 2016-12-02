// -----------------------------------------------------------------------------------------------|
// server.js                                                                                      |
//                                                                                                |
// This is the main entry point for the MEAN app.                                                 |
//                                                                                                |         
// Author: Clifton Roberts                                                                        |         
// Date: 2 December 2016                                                                          |         
// -----------------------------------------------------------------------------------------------|

var express = require("express");
var path = require("path");

var app = express();

// -----------------------------------------------------------------------------------------------|
// Static Directories                                                                             |
// -----------------------------------------------------------------------------------------------|
app.use("/angular", express.static(path.join(__dirname, "../../node_modules/angular")));
app.use("/jquery", express.static(path.join(__dirname, "../../node_modules/jquery/dist")));
app.use("/views", express.static(path.join(__dirname, "../client/views")));

// -----------------------------------------------------------------------------------------------|
// Routes                                                                                         |
// -----------------------------------------------------------------------------------------------|
app.get("/*", function(req, res) {
    res.sendFile(path.resolve(path.join(__dirname, "../client/views/index.html")));
});

var port = process.env.PORT || 8080;

app.listen(port);
console.log("Server running on port " + port + "...");
