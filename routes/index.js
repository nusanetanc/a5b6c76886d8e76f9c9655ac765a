var express = require('express');
var router = express.Router();
var api = express.Router();
var nodemailer = require("nodemailer");
var flash = require('express-flash');
var Register = require('../models/register');
var path = require("path");

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "web.groovyplay",
        pass: "groovyplay"
    }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', { title: 'Groovy - Home' });
});

router.get('/features', function(req, res, next) {
  res.render('features', { title: 'Groovy - Features' });
});

router.get('/subscribe-inquiry-form', function(req, res, next) {
  res.render('subscribe-notcovered', { title: 'Groovy - Inquiry Form' });
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

router.get('/about-us', function(req, res, next) {
  res.render('about', { title: 'Groovy - About Us' });
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

router.get('/subscribe-done/:result', function(req, res, next) {
    res.render('subscribe-done', { title: 'Groovy - Subscribe Done', result:req.params.result });
});


/* Promo Flyer. */
//Promo Location 1 http://bit.ly/2qti6O6
router.get('/864c445f0bd5c26cb3dbbaa08a82c850daaaa70f6a362cb1f0fd72be18810a51', function(req, res, next) {
  res.render('index', { title: 'Loc.1' });
});

//Promo Location 2 http://bit.ly/2qvjW1K
router.get('/388832377c81c5e8a4043ed83fc580f405c07c4eaed4e07e04e81905f2f5a5f9', function(req, res, next) {
  res.render('index', { title: 'Loc.2' });
});

//Promo Location 3 http://bit.ly/2GUXCZB
router.get('/b68f9b1194550f7b4f4499cab6005c45551cf46d7a8b544f77d1c8b94d440c32', function(req, res, next) {
  res.render('index', { title: 'Loc.3' });
});

//Promo Location 4 http://bit.ly/2qt8UKD
router.get('/9085f97251027575d6fe5f69ed34ce2ef0c5634d539f03255a78a67d52525a43', function(req, res, next) {
  res.render('index', { title: 'Loc.4' });
});

//Promo Location 5 http://bit.ly/2vgmQw2
router.get('/ab86e4f114cb4043cac70b3f2af12f61434962087c477da92c8132ffad43cf51', function(req, res, next) {
  res.render('index', { title: 'Loc.5' });
});

// Add Submit POST Route
router.post('/subscribe-now/:selectpackage', function(req, res){
  //req.checkBody('fullname','Full Name is required').notEmpty();
  //req.checkBody('mobilephone','Mobile Phone is required').notEmpty();
 // req.checkBody('email','Email is required').notEmpty();

  // Get Errors
  //let errors = req.validationErrors();
  //if(errors){
    //res.render('register-broadband-fiber-optic2', {
     // title:'Registration - Nusanet Jakarta',
     // errors:errors,
     // selectpackage: req.params.selectpackage
   // });
 // } else {
 /*
 console.log(req.body.fullname)
    let fullName = req.body.fullname;
    if (req.files.uploadKTP == undefined || req.files.uploadKTP == '' ){
      console.log("no ktp uploaded")
    }else {
      let ktpFile = req.files.uploadKTP;
      // Use the mv() method to place the file somewhere on your server
      ktpFile.mv('./uploads/'+fullName+'.jpg', function(err) {
        if (err)
          return res.status(500).send(err);
     
        console.log('KTP upload succesfully');
      });
    } */ 
    var fileKtp = req.files.uploadKTP
    var saveFile = fileKtp.mv('./public/images/ktp/'+req.body.fullname+'.png');
    if (!req.body.locationselectapartment){
      var loc = req.body.locationselectresidential;
      var detloc = req.body.blokstreetSelect+', No. '+req.body.noSelect;
    } else if (!req.body.locationselectresidential){
      var loc = req.body.locationselectapartment;
      var detloc = req.body.towerselect+', Floor. '+req.body.floorselect+', Unit. '+req.body.unitSelect;
    }
    var mailOptions={
      to: "nurhandiy@gmail.com",
      subject : "Web Registration Groovy",
      html : `
        <h5>Dear All</h5>
        <h6>Berikut Customer Registrasi Groovy Online<br/>
        Nama: `+req.body.fullname+`<br/>
        Email: `+req.body.email+`<br/>
        mobilephone: `+req.body.mobilephone+`<br/>
        phone: `+req.body.phone+`<br/>
        packages: `+req.params.selectpackage+`<br/>
        place: `+loc+` - `+req.body.city+`<br/>
        detail place: `+detloc+`<br/>
        KTP: <img width="200px" src="cid:kartuidentitas"/><br/>
        Terimaksih`
      }
      console.log(mailOptions);
      smtpTransport.sendMail(mailOptions, function(error, response){
      if(error){
        console.log(error);
        res.redirect('/subscribe-done/Sorry Mail Server Error, Please Try Again');
      }else{
        var register = new Register({
        fullname: req.body.fullname,
        email: req.body.email,
        mobilephone : req.body.mobilephone,
        phone : req.body.phone,
        package : req.params.selectpackage,
        place : req.body.city+' - '+req.body.districs+' - '+req.body.villages+' - '+req.body.streets+' - '+req.body.streetnos,
        ktpurl : './uploads/'+req.body.fullname+'.jpg'
      })
      register.save(function(err, result) {
        console.log(err)
        console.log(result)
        console.log("Message sent: " + response.message);
        res.redirect('/subscribe-done/Thank You For Registration, We will Contact you');
      });
      } 
    });
//  }
});

// Add Submit POST Route
router.post('/subscribe-now/:selectpackage/location-promo/:contract', function(req, res){
  //req.checkBody('fullname','Full Name is required').notEmpty();
  //req.checkBody('mobilephone','Mobile Phone is required').notEmpty();
 // req.checkBody('email','Email is required').notEmpty();

  // Get Errors
  //let errors = req.validationErrors();
  //if(errors){
    //res.render('register-broadband-fiber-optic2', {
     // title:'Registration - Nusanet Jakarta',
     // errors:errors,
     // selectpackage: req.params.selectpackage
   // });
 // } else {
 /*
 console.log(req.body.fullname)
    let fullName = req.body.fullname;
    if (req.files.uploadKTP == undefined || req.files.uploadKTP == '' ){
      console.log("no ktp uploaded")
    }else {
      let ktpFile = req.files.uploadKTP;
      // Use the mv() method to place the file somewhere on your server
      ktpFile.mv('./uploads/'+fullName+'.jpg', function(err) {
        if (err)
          return res.status(500).send(err);
     
        console.log('KTP upload succesfully');
      });
    } */ 
    //var fileKtp = req.files.uploadKTP
    //var saveFile = fileKtp.mv('./public/images/ktp/'+req.body.fullname+'.png');
      var loc = req.body.locationselectresidential;
      var detloc = req.body.blokstreetSelect+', No. '+req.body.noSelect;
    var mailOptions={
      to: "nurhandiy@gmail.com",
      subject : "Web Registration Groovy",
      html : `
        <h5>Dear All</h5>
        <h6>Berikut Customer Registrasi Groovy Online<br/>
        Nama: `+req.body.fullname+`<br/>
        Email: `+req.body.email+`<br/>
        mobilephone: `+req.body.mobilephone+`<br/>
        phone: `+req.body.phone+`<br/>
        packages: Level `+req.params.selectpackage+`<br/>
        contract: `+req.params.contract+` month<br/>
        place: `+loc+`<br/>
        detail place: `+detloc+`<br/>
        KTP: <img width="200px" src="cid:kartuidentitas"/><br/>
        Terimaksih`
      }
      console.log(mailOptions);
      smtpTransport.sendMail(mailOptions, function(error, response){
      if(error){
        console.log(error);
        res.redirect('/subscribe-done/Sorry Mail Server Error, Please Try Again');
      }else{
        var register = new Register({
        fullname: req.body.fullname,
        email: req.body.email,
        mobilephone : req.body.mobilephone,
        phone : req.body.phone,
        package : req.params.selectpackage,
        place : req.body.city+' - '+req.body.districs+' - '+req.body.villages+' - '+req.body.streets+' - '+req.body.streetnos,
        ktpurl : './uploads/'+req.body.fullname+'.jpg'
      })
      register.save(function(err, result) {
        console.log(err)
        console.log(result)
        console.log("Message sent: " + response.message);
        res.redirect('/subscribe-done/Thank You For Registration, We will Contact you');
      });
      } 
    });
//  }
});

router.post('/contact', function(req, res){
  var mailOptions={
      to: "nurhandiy@gmail.com",
      subject : "Web Contact Groovy",
      html : `
        <h5>Dear All</h5>
        <h6>Berikut dari contact us website groovy<br/>
        Nama: `+req.body.name+`<br/>
        Email: `+req.body.email+`<br/>
        Message: `+req.body.message+`<br/>
        Terimaksih`
      }
      console.log(mailOptions);
      smtpTransport.sendMail(mailOptions, function(error, response){
      if(error){
        console.log(error);
        req.flash('result','Sorry Submit Contact Us Failed, Please Try Again');
        res.redirect('/contact');
      }else{
        req.flash('result','Message Contact Send');
        res.redirect('/contact');
      }
    });      
});

router.post('/groovy-online-registration/inquiry-form', function(req, res){
  var mailOptions={
      to: "nurhandiy@gmail.com",
      subject : "Web inquiry form (Form Permintaan Tidak Tercover) Groovy",
      html : `
        <h5>Dear All</h5>
        <h6>Berikut dari inquiry form (Form Permintaan Tidak Tercover) website groovy<br/>
        Nama: `+req.body.fullname+`<br/>
        Mobile Number: `+req.body.mobilenumber+`<br/>
        Email: `+req.body.emailaddr+`<br/>
        City: `+req.body.city+`<br/>
        Location: `+req.body.location+`<br/>
        Detail Location: `+req.body.detail+`<br/>
        Additional: `+req.body.addtional+`<br/>
        Terimaksih`
      }
      console.log(mailOptions);
      smtpTransport.sendMail(mailOptions, function(error, response){
      if(error){
        console.log(error);
        res.redirect('/subscribe-done/Sorry Submit Inquiry Failed, Please Try Again');
      }else{
        res.redirect('/subscribe-done/Your request you have received,we will call back if the service is ready');
      }
    });      
});

module.exports = router;
