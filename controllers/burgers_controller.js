const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();


router.get("/", function(req, res) {

  res.render('index');

});

router.get("/api/burgers", function(req, res) {

  burger.selectAll(function(result) {
    console.log('whelp');
    res.json(result);
  });

});

router.post("/api/burgers", function(req, res) {

  burger.insert(req.body.burger_name, req.body.devoured, function(result) {
    res.json({ id: result.insertId });
  });
  
});

router.put("/api/burgers/:id", function(req, res) {

  burger.update(req.params.id, req.body.devoured, function(result) {

    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res
        .status(200)
        .json({ id: req.params.id, devoured: req.body.devoured })
        .end();

    }
  });

});

module.exports = router;