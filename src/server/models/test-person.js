// -----------------------------------------------------------------------------------------------|
// Test-Person                                                                                    |
// -----------------------------------------------------------------------------------------------|
var mongoose = require("mongoose");

var TestPersonSchema = new mongoose.Schema({
    attr1: String, default: ""
});

exports.TestPerson = mongoose.model("Test-Person", TestPersonSchema, "tests");
