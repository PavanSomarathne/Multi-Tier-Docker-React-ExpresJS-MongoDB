const express = require("express");
const router = express.Router();
const Place = require("../schemas/Place");
const auth = require("../Authentication/Auth");

router.post("/new-place", auth, function (req, res, next) {
  Place.create({
    name: req.body.name,
    description: req.body.description,
    COVID_status: req.body.COVID_status,
    image: req.body.image,
  })
    .then(function (item) {
      res.send(item);
    })
    .catch(next);
});

router.get("/places", function (req, res, next) {
  Place.find({}).then(function (item) {
    res.send(item);
  });
});

router.delete("/places", auth, function (req, res, next) {
  Place.findByIdAndRemove({ _id: req.body.id }).then(function (item) {
    res.send(item);
  });
});

module.exports = router;
