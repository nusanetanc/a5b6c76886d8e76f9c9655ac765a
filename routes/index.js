var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', { title: 'Home - Groovy' });
});

router.get('/features', function(req, res, next) {
  res.render('features', { title: 'Features - Groovy' });
});

router.get('/packages', function(req, res, next) {
  res.render('packages', { title: 'Packages - Groovy' });
});

router.get('/support', function(req, res, next) {
  res.render('support', { title: 'Support - Groovy' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact - Groovy' });
});


/* Promo Flyer. */
router.get('/864c445f0bd5c26cb3dbbaa08a82c850daaaa70f6a362cb1f0fd72be18810a51', function(req, res, next) {
  res.render('index', { title: 'Lokasi1' });
});
router.get('/388832377c81c5e8a4043ed83fc580f405c07c4eaed4e07e04e81905f2f5a5f9', function(req, res, next) {
  res.render('index', { title: 'Lokasi2' });
});
router.get('/b68f9b1194550f7b4f4499cab6005c45551cf46d7a8b544f77d1c8b94d440c32', function(req, res, next) {
  res.render('index', { title: 'Lokasi3' });
});
router.get('/9085f97251027575d6fe5f69ed34ce2ef0c5634d539f03255a78a67d52525a43', function(req, res, next) {
  res.render('index', { title: 'Lokasi4' });
});
router.get('/ab86e4f114cb4043cac70b3f2af12f61434962087c477da92c8132ffad43cf51', function(req, res, next) {
  res.render('index', { title: 'Lokasi5' });
});

module.exports = router;
