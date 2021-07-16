var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Received a GET HTTP method");
});

router.post("/", function (req, res, next) {
  res.send("Received a POST HTTP method");
});

router.put("/", function (req, res, next) {
  res.send("Received a PUT HTTP method");
});

router.delete("/", function (req, res, next) {
  res.send("Received a DELETE HTTP method");
});

module.exports = router;
