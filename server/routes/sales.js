var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/', function(req, res) {
  models.Sale.create({
    from: req.body.from,
    to: req.body.to,
    description: req.body.description,
    amount: req.body.amount
  }).then(function(response) {
    res.send(response.dataValues);
  });
});

router.get('/', function(req, res) {
  models.Sale.findAll().then(function(sales){
    res.send(sales);
  });
});

router.get('/:id', function(req, res) {
  models.Sale.findById(req.params.id).then(function(sale){
    res.send(sale);
  });
});

module.exports = router;
