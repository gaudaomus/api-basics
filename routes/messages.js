var uuid = require("uuid");
var express = require("express");
var router = express.Router();

var messages = {
  1: {
    id: "1",
    text: "Hello World",
    userId: "1",
  },
  2: {
    id: "2",
    text: "By World",
    userId: "2",
  },
};

router.get("/", function (req, res, next) {
  res.send(Object.values(messages));
});

router.post("/", (req, res) => {
  const id = uuid.v4();
  const message = {
    id,
    text: req.body.text,
  };
  messages[id] = message;
  res.send(message);
});

router.get("/:messageId", function (req, res, next) {
  res.send(messages[req.params.messageId]);
});

module.exports = router;
