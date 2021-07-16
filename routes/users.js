var express = require("express");
var router = express.Router();

var users = {
  1: {
    id: "1",
    username: "Robin Wieruch",
  },
  2: {
    id: "2",
    username: "Dave Davids",
  },
};

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send(Object.values(users));
});

router.post("/", function (req, res, next) {
  res.send("Received a POST HTTP method on user resource");
});

router.get("/:userId", function (req, res, next) {
  res.send(users[req.params.userId]);
});

router.put("/:userId", function (req, res, next) {
  res.send(`Received a PUT HTTP method on user/${req.params.userId} resource`);
});

router.delete("/:userId", function (req, res, next) {
  res.send(
    `Received a DELETE HTTP method on user/${req.params.userId} resource`
  );
});

module.exports = router;
