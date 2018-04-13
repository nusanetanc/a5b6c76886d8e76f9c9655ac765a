var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', { title: 'Groovy - Home' });
});

router.get('/features', function(req, res, next) {
  res.render('features', { title: 'Groovy - Features' });
});

router.get('/packages', function(req, res, next) {
  res.render('packages', { title: 'Groovy - Packages' });
});

router.get('/support', function(req, res, next) {
  res.render('support', { title: 'Groovy - Support' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Groovy - Contact' });
});

router.get('/subscribe-now/:package', function(req, res, next) {
    res.render('subscribe', { title: 'Groovy - Subscribe', selectpackage: req.params.package });
});

router.get('/subscribe-now/:package/location-promo/:location/:contract', function(req, res, next) {
  if(req.params.location = '68fe3a248c3adb714f407aa275bc0e2f'){
    var location = 'Perumahan Permata Gading'
  } else{
    var location = 'Error'
  }
  if(req.params.package = '1'){
    var price = '349.000'
    if(req.params.contract = '1'){
      var instalfee = '1.000.000'
    } else if (req.params.contract = '3'){
      var instalfee = '500.000'
    } else if (req.params.contract = '6'){
      var instalfee = '0.000 - Free'
    } else {
      var instalfee = 'Error'
    }
  } else if (req.params.package = '2'){
    var price = '449.000'
    if(req.params.contract = '1'){
      var instalfee = '1.000.000'
    } else if (req.params.contract = '3'){
      var instalfee = '500.000'
    } else if (req.params.contract = '6'){
      var instalfee = '0.000 - Free'
    } else {
      var instalfee = 'Error'
    }
  } else if (req.params.package = '3'){
    var price = '649.000'
    if(req.params.contract = '1'){
      var instalfee = '1.000.000'
    } else if (req.params.contract = '3'){
      var instalfee = '500.000'
    } else if (req.params.contract = '6'){
      var instalfee = '0.000 - Free'
    } else {
      var instalfee = 'Error'
    }
  } else if (req.params.package = '4'){
    var price = '999.000'
    if(req.params.contract = '1'){
      var instalfee = '1.000.000'
    } else if (req.params.contract = '3'){
      var instalfee = '500.000'
    } else if (req.params.contract = '6'){
      var instalfee = '0.000 - Free'
    } else {
      var instalfee = 'Error'
    }
  } else if (req.params.package = '5'){
    var price = '2.890.000'
    if(req.params.contract = '1'){
      var instalfee = '2.000.000'
    } else if (req.params.contract = '3'){
      var instalfee = '1.000.000'
    } else if (req.params.contract = '6'){
      var instalfee = '0.000 - Free'
    } else {
      var instalfee = 'Error'
    }
  } else if (req.params.package = '6'){
    var price = '4.690.000'
    if(req.params.contract = '1'){
      var instalfee = '2.000.000'
    } else if (req.params.contract = '3'){
      var instalfee = '1.000.000'
    } else if (req.params.contract = '6'){
      var instalfee = '0.000 - Free'
    } else {
      var instalfee = 'Error'
    }
  } else if (req.params.package = '7'){
    var price = '5.690.000'
    if(req.params.contract = '1'){
      var instalfee = '2.000.000'
    } else if (req.params.contract = '3'){
      var instalfee = '1.000.000'
    } else if (req.params.contract = '6'){
      var instalfee = '0.000 - Free'
    } else {
      var instalfee = 'Error'
    }
  } else {
    var price = 'Error'
    var instalfee = 'Error'
  }
  
  
    res.render('subscribe-location-promo', { title: 'Groovy - Subscribe', selectpackage: req.params.package, location: 'Elang Laut' , contract: req.params.contract, price: price, instalfee: instalfee, location:location });
});

router.get('/subscribe-done', function(req, res, next) {
    res.render('subscribe-done', { title: 'Groovy - Subscribe Done' });
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
