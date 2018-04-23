function Load() {
  //coverage area
  $("#location-residential").hide();
  $("#location-apartment").hide();
  $("#tower").hide();
  $("#floor").hide();
  $("#unit").hide();
  $("#no").hide();
  $("#street").hide();
  $("#type").hide();
  $("#coverage-tab").hide();
  $("#notcoverage").hide();
  $("#coverage-tab").hide();
  $("#customer-data-tab").hide();
  $("#summary-tab").hide();
  $("#customer-prev-tab").hide();
  $("#registerBroadbandFo").hide();
}
window.onload = Load;

//select city
function selectRegion() {
    $("#coverage-tab").hide();
    $("#customer-data-tab").hide();
    $("#summary-tab").hide();
    $("#customer-prev-tab").hide();
    $("#registerBroadbandFo").hide();
    $("#location-residential").hide();
    $("#location-apartment").hide();
    $("#tower").hide();
    $("#floor").hide();
    $("#unit").hide();
    $("#no").hide();
    $("#street").hide();
    $("#type").show(); 
}

//select type
function typeCheck() { 
    if (document.getElementById('apartment').checked) {
        $("#coverage-tab").hide();
        $("#customer-data-tab").hide();
        $("#summary-tab").hide();
        $("#customer-prev-tab").hide();
        $("#registerBroadbandFo").hide();
        $("#location-residential").hide();
        $("#location-apartment").show(); 
        $("#tower").hide();
        $("#floor").hide();
        $("#unit").hide();
        $("#no").hide();
        $("#notcoverage").hide();
        $("#street").hide();
        var selectedArr = (document.getElementById("city").value);
        var locations = document.getElementById('locationselectapartment');
        $.getJSON("http://groovy.id/location/apartemens/"+selectedArr, function(json){
            var arrLocation = json;
            arrLocation.forEach(Locationfunc);
        });
        function Locationfunc(array_element){
            var seloptions = document.createElement('option');
            seloptions.innerHTML = array_element.name;
            seloptions.value = array_element.name;
            locations.appendChild(seloptions);  
        } 
    }
    if (document.getElementById('residential').checked) {
        $("#coverage-tab").hide();
        $("#customer-data-tab").hide();
        $("#summary-tab").hide();
        $("#customer-prev-tab").hide();
        $("#registerBroadbandFo").hide();
        $("#location-residential").show();
        $("#location-apartment").hide();
        $("#tower").hide();
        $("#floor").hide();
        $("#unit").hide();
        $("#no").hide();
        $("#notcoverage").hide();
        $("#street").hide();
      var selectedArr = (document.getElementById("city").value);
      var locations = document.getElementById('locationselectresidential');
      $.getJSON("http://groovy.id/location/residentials/"+selectedArr, function(json){
          var arrLocation = json;
          arrLocation.forEach(Locationfunc);
      });
      function Locationfunc(array_element){
          var seloptions = document.createElement('option');
          seloptions.innerHTML = array_element.name;
          seloptions.value = array_element.name;
          locations.appendChild(seloptions);  
      }   
    }
}

//select Residential
function selectLocationResidential() {
  var selectedArr = (document.getElementById("locationselectresidential").value);
  var locations = document.getElementById('blokstreetSelect');
  if( selectedArr == '[Not Coverage]'){
    $("#coverage-tab").hide();
      $("#customer-data-tab").hide();
      $("#summary-tab").hide();
      $("#customer-prev-tab").hide();
      $("#registerBroadbandFo").hide();
      $("#notcoverage").show();
      $("#location").show();
      $("#tower").hide();
      $("#floor").hide();
      $("#unit").hide();
      $("#no").hide();
      $("#street").hide();
      $("#type").show(); 
  } else {
    $.getJSON("http://groovy.id/location/streets/"+selectedArr, function(json){
        var arrLocation = json;
        arrLocation.forEach(Locationfunc);
    });
    function Locationfunc(array_element){
        var seloptions = document.createElement('option');
        seloptions.innerHTML = array_element.name;
        seloptions.value = array_element.name;
        locations.appendChild(seloptions);  
    }
      $("#coverage-tab").hide();
      $("#customer-data-tab").hide();
      $("#summary-tab").hide();
      $("#customer-prev-tab").hide();
      $("#registerBroadbandFo").hide();
      $("#notcoverage").hide();
      $("#location").show();
      $("#tower").hide();
      $("#floor").hide();
      $("#unit").hide();
      $("#no").hide();
      $("#street").show();
      $("#type").show(); 
    }
  }

//select Street
function selectstreet() {
  var selectedArr = (document.getElementById("blokstreetSelect").value);
  var selectedRes = (document.getElementById("locationselectresidential").value);
  var locations = document.getElementById('noSelect');
  if( selectedArr == '[Not Coverage]'){
    $("#coverage-tab").hide();
    $("#customer-data-tab").hide();
    $("#summary-tab").hide();
    $("#customer-prev-tab").hide();
    $("#registerBroadbandFo").hide();
    $("#notcoverage").show();
    $("#location").show();
    $("#tower").hide();
    $("#floor").hide();
    $("#unit").hide();
    $("#no").hide();
    $("#street").show();
    $("#type").show(); 
  } else {
  $.getJSON("http://groovy.id/location/nostreets/"+selectedRes+"/"+selectedArr, function(json){
      var arrLocation = json;
      console.log(json)
      arrLocation.forEach(Locationfunc);
  });
  function Locationfunc(array_element){
      var seloptions = document.createElement('option');
      seloptions.innerHTML = array_element.nos;
      seloptions.value = array_element.nos;
      locations.appendChild(seloptions);  
  }
    $("#coverage-tab").hide();
    $("#customer-data-tab").hide();
    $("#summary-tab").hide();
    $("#customer-prev-tab").hide();
    $("#registerBroadbandFo").hide();
    $("#notcoverage").hide();
    $("#location").show();
    $("#tower").hide();
    $("#floor").hide();
    $("#unit").hide();
    $("#no").show();
    $("#street").show();
    $("#type").show(); 
  }
}

//select No Home
function selectno() {
  var selectedArr = (document.getElementById("noSelect").value);
  if( selectedArr == '[Not Coverage]'){
    $("#coverage-tab").hide();
    $("#customer-data-tab").hide();
    $("#summary-tab").hide();
    $("#customer-prev-tab").hide();
    $("#registerBroadbandFo").hide();
    $("#notcoverage").show();
    $("#location").show();
    $("#tower").hide();
    $("#floor").hide();
    $("#unit").hide();
    $("#no").show();
    $("#street").show();
    $("#type").show(); 
  } else {
    $("#coverage-tab").hide();
    $("#customer-data-tab").show();
    $("#summary-tab").hide();
    $("#customer-prev-tab").hide();
    $("#registerBroadbandFo").hide();
    $("#notcoverage").hide();
    $("#location").show();
    $("#tower").hide();
    $("#floor").hide();
    $("#unit").hide();
    $("#no").show();
    $("#street").show();
    $("#type").show(); 
  }
}

//select Apartement
function selectLocationApartment() {
  var selectedArr = (document.getElementById("locationselectapartment").value);
  if( selectedArr == '[Not Coverage]'){
    $("#coverage-tab").hide();
    $("#customer-data-tab").hide();
    $("#summary-tab").hide();
    $("#customer-prev-tab").hide();
    $("#registerBroadbandFo").hide();
    $("#notcoverage").show();
    $("#location").show();
    $("#tower").hide();
    $("#floor").hide();
    $("#unit").hide();
    $("#no").hide();
    $("#street").hide();
    $("#type").show();
  } else {
    var locations = document.getElementById('towerselect');
    $.getJSON("http://groovy.id/location/towers/"+selectedArr, function(json){
        var arrLocation = json;
        arrLocation.forEach(Locationfunc);
    });
    function Locationfunc(array_element){
        var seloptions = document.createElement('option');
        seloptions.innerHTML = array_element.name;
        seloptions.value = array_element.name;
        locations.appendChild(seloptions);  
    }   
      $("#coverage-tab").hide();
      $("#customer-data-tab").hide();
      $("#summary-tab").hide();
      $("#customer-prev-tab").hide();
      $("#registerBroadbandFo").hide();
      $("#notcoverage").hide();
      $("#location").show();
      $("#tower").show();
      $("#floor").hide();
      $("#unit").hide();
      $("#no").hide();
      $("#street").hide();
      $("#type").show(); 
  }
}

//select Tower
function selectTower() {
var selectedArr = (document.getElementById("towerselect").value);
  if( selectedArr == '[Not Coverage]'){
    $("#coverage-tab").hide();
    $("#customer-data-tab").hide();
    $("#summary-tab").hide();
    $("#customer-prev-tab").hide();
    $("#registerBroadbandFo").hide();
    $("#notcoverage").show();
    $("#location").show();
    $("#tower").show();
    $("#floor").hide();
    $("#unit").hide();
    $("#no").hide();
    $("#street").hide();
    $("#type").show();
  }else{
var locations = document.getElementById('floorselect');
  $.getJSON("http://groovy.id/location/floors/"+selectedArr, function(json){
      var arrLocation = json;
      arrLocation.forEach(Locationfunc);
  });
  function Locationfunc(array_element){
      var seloptions = document.createElement('option');
      seloptions.innerHTML = array_element.floors;
      seloptions.value = array_element.floors;
      locations.appendChild(seloptions);  
  }   
    $("#coverage-tab").hide();
    $("#customer-data-tab").hide();
    $("#summary-tab").hide();
    $("#customer-prev-tab").hide();
    $("#registerBroadbandFo").hide();
    $("#notcoverage").hide();
    $("#location").show();
    $("#tower").show();
    $("#floor").show();
    $("#unit").hide();
    $("#no").hide();
    $("#street").hide();
    $("#type").show(); 
  }  
}

//select Floor
function selectFloor() {
var selectedArr = (document.getElementById("floorselect").value);
  if( selectedArr == '[Not Coverage]'){
    $("#coverage-tab").hide();
    $("#customer-data-tab").hide();
    $("#summary-tab").hide();
    $("#customer-prev-tab").hide();
    $("#registerBroadbandFo").hide();
    $("#notcoverage").show();
    $("#location").show();
    $("#tower").show();
    $("#floor").show();
    $("#unit").hide();
    $("#no").hide();
    $("#street").hide();
    $("#type").show(); 
  }else {
var locations = document.getElementById('unitSelect');
  $.getJSON("http://groovy.id/location/units/"+selectedArr, function(json){
      var arrLocation = json;
      arrLocation.forEach(Locationfunc);
  });
  function Locationfunc(array_element){
      var seloptions = document.createElement('option');
      seloptions.innerHTML = array_element.units;
      seloptions.value = array_element.units;
      locations.appendChild(seloptions);  
  }   
    $("#coverage-tab").hide();
    $("#customer-data-tab").hide();
    $("#summary-tab").hide();
    $("#customer-prev-tab").hide();
    $("#registerBroadbandFo").hide();
    $("#notcoverage").hide();
    $("#location").show();
    $("#tower").show();
    $("#floor").show();
    $("#unit").show();
    $("#no").hide();
    $("#street").hide();
    $("#type").show(); 
  }
}

//select Unit
function selectUnit() {
var selectedArr = (document.getElementById("unitSelect").value);
  if( selectedArr == '[Not Coverage]'){
    $("#coverage-tab").hide();
    $("#customer-data-tab").hide();
    $("#summary-tab").hide();
    $("#customer-prev-tab").hide();
    $("#registerBroadbandFo").hide();
    $("#notcoverage").show();
    $("#location").show();
    $("#tower").show();
    $("#floor").show();
    $("#unit").show();
    $("#no").hide();
    $("#street").hide();
    $("#type").show();
  } else {
    $("#coverage-tab").hide();
    $("#customer-data-tab").show();
    $("#summary-tab").hide();
    $("#customer-prev-tab").hide();
    $("#registerBroadbandFo").hide();
    $("#notcoverage").hide();
    $("#location").show();
    $("#tower").show();
    $("#floor").show();
    $("#unit").show();
    $("#no").hide();
    $("#street").hide();
    $("#type").show(); 
  }
}

// customer data 
$('#fullname').bind('input', function() {
  var fullname = document.getElementById("fullname").value;
  var mobilephone = document.getElementById("mobilephone").value;
  var email = document.getElementById("email").value;
  var uploadKTP = document.getElementById("uploadKTP").value;
  if (fullname == "" || fullname == null || mobilephone == "" || mobilephone == null || email == "" || email == null || uploadKTP == "" || uploadKTP == null){
     $("#summary-tab").hide();
  } else {
    $("#summary-tab").show();
  }
});

$('#mobilephone').bind('input', function() {
  var fullname = document.getElementById("fullname").value;
  var mobilephone = document.getElementById("mobilephone").value;
  var email = document.getElementById("email").value;
  var uploadKTP = document.getElementById("uploadKTP").value;
  if (fullname == "" || fullname == null || mobilephone == "" || mobilephone == null || email == "" || email == null || uploadKTP == "" || uploadKTP == null){
     $("#summary-tab").hide();
  } else {
    $("#summary-tab").show();
  }
});

$('#email').bind('input', function() {
  var fullname = document.getElementById("fullname").value;
  var mobilephone = document.getElementById("mobilephone").value;
  var email = document.getElementById("email").value;
  var uploadKTP = document.getElementById("uploadKTP").value;
  if (fullname == "" || fullname == null || mobilephone == "" || mobilephone == null || email == "" || email == null || uploadKTP == "" || uploadKTP == null){
     $("#summary-tab").hide();
  } else {
    $("#summary-tab").show();
  }
});

// button tab
  $("#customer-data-tab").click(function(){
    $("#coverage-tab").show();
    $("#customer-data-tab").hide();
    $("#summary-tab").hide();
    $("#customer-prev-tab").hide();
    $("#registerBroadbandFo").hide();
  });
  
  $("#coverage-tab").click(function(){
    $("#coverage-tab").hide();
    $("#customer-data-tab").show();
    $("#summary-tab").hide();
    $("#customer-prev-tab").hide();
    $("#registerBroadbandFo").hide();
  });
  
  $("#summary-tab").click(function(){
    $("#coverage-tab").hide();
    $("#customer-data-tab").hide();
    $("#summary-tab").hide();
    $("#customer-prev-tab").show();
    $("#registerBroadbandFo").show();
  });
  
  $("#customer-prev-tab").click(function(){
    $("#coverage-tab").show();
    $("#customer-data-tab").hide();
    $("#summary-tab").show();
    $("#customer-prev-tab").hide();
    $("#registerBroadbandFo").hide();
  });