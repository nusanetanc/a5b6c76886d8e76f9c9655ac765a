var express = require('express');
var router = express.Router();
var Apartemens = require('../models/apartemens');
var Residentials = require('../models/residentials');
var Towers = require('../models/towers');
var Floors = require('../models/floors');
var Units = require('../models/units');
var Streets = require('../models/streets');
var NoStreets = require('../models/nostreets');

/* GET location listing. */
router.get('/apartemens/:city', function(req, res, next) {
    Apartemens.find({city: req.params.city}, { name: 1, _id: 0},  function(err, apartemens) {
      res.send(apartemens);
   });
});

/* GET location listing. */
router.get('/residentials/:city', function(req, res, next) {
    Residentials.find({city: req.params.city}, { name: 1, _id: 0},  function(err, residentials) {
      res.send(residentials);
   });
});

/* GET location listing. */
router.get('/towers/:apartemens', function(req, res, next) {
    Towers.find({apartemens: req.params.apartemens}, { name: 1, _id: 0},  function(err, towers) {
      res.send(towers);
   });
});

/* GET location listing. */
router.get('/floors/:towers', function(req, res, next) {
    Floors.find({towers: req.params.towers}, { floors: 1, _id: 0},  function(err, floors) {
      res.send(floors);
   });
});

/* GET location listing. */
router.get('/units/:floors', function(req, res, next) {
    Units.find({floors: req.params.floors}, { units: 1, _id: 0},  function(err, units) {
      res.send(units);
   });
});

/* GET location listing. */
router.get('/streets/:residentials', function(req, res, next) {
    Streets.find({residentials: req.params.residentials}, { name: 1, _id: 0},  function(err, streets) {
      res.send(streets);
   });
});

/* GET location listing. */
router.get('/nostreets/:name', function(req, res, next) {
    NoStreets.find({name: req.params.name}, { nos: 1, _id: 0},  function(err, nostreets) {
        res.send(nostreets);
   });
});

/* Add residentials */
router.post('/residentials', function(req, res, next) {
 if(req.body.accesskey !== 'a6bb894ac2a5e898c48671cd97dc3677'){
     return res.status(404).json({
      title: "Access not found"
    });
 } else {
  var residentials = new Residentials();
    residentials.city= req.body.city;
    residentials.name= req.body.name;

    residentials.save(function(err) {
      if (err)
        res.send(err);
        res.json({ message: 'Data saved in database!' });
  });
 }
});

/* Add streets */
router.post('/streets', function(req, res, next) {
 if(req.body.accesskey !== 'a6bb894ac2a5e898c48671cd97dc3677'){
     return res.status(404).json({
      title: "Access not found"
    });
 } else {
  var streets = new Streets();
    streets.residentials= req.body.residentials;
    streets.name= req.body.name;

    streets.save(function(err) {
      if (err)
        res.send(err);
        res.json({ message: 'Data saved in database!' });
  });
 }
});

/* Add no streets */
router.post('/nostreets', function(req, res, next) {
 if(req.body.accesskey !== 'a6bb894ac2a5e898c48671cd97dc3677'){
     return res.status(404).json({
      title: "Access not found"
    });
 } else {
  var nostreets = new NoStreets();
    nostreets.residentials= req.body.residentials;
    nostreets.name= req.body.name;
    nostreets.nos= req.body.nos;

    nostreets.save(function(err) {
      if (err)
        res.send(err);
        res.json({ message: 'Data saved in database!' });
  });
 }
});

module.exports = router;
