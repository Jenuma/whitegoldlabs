// -----------------------------------------------------------------------------------------------|
// Test-Person Controller                                                                         |
// -----------------------------------------------------------------------------------------------|

var router = require("express").Router();

router.get("/", getTestPerson);

function getTestPerson(req, res) {
    var TestPerson = require("../models/test-person").TestPerson;
    TestPerson.find({}).lean().exec()
        .then(function(results) {
            res.status(200).json(results);
        })
        .catch(function(err) {
            res.status(500).send(err.message);
        });
}

module.exports = router;
