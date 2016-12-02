// -----------------------------------------------------------------------------------------------|
// Route Directory                                                                                |
// -----------------------------------------------------------------------------------------------|

var router = require("express").Router();

router.use("/api/test", require("./controllers/test-person-controller"));

module.exports = router;
