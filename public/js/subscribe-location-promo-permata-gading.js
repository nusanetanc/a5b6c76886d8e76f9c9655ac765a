//coverage area
$("#no").hide();
$("#street").hide();
$("#coverage-tab").hide();
$("#coverage-tab").hide();
$("#customer-data-tab").hide();
$("#summary-tab").hide();
$("#customer-prev-tab").hide();
$("#registerBroadbandFo").hide();

//select Residential
function selectLocationResidential() {
  var selectedArr = (document.getElementById("locationselectresidential").value);
  var locations = document.getElementById('blokstreetSelect');
    $.getJSON("https://grry-v-2-nurhandiyudi.c9users.io/location/streets/"+selectedArr, function(json){
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
      $("#location").show();
      $("#no").hide();
      $("#street").show();
  }

//select Street
function selectstreet() {
  var selectedArr = (document.getElementById("blokstreetSelect").value);
  var locations = document.getElementById('noSelect');
  $.getJSON("https://grry-v-2-nurhandiyudi.c9users.io/location/nostreets/"+selectedArr, function(json){
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
      $("#location").show();
      $("#no").show();
      $("#street").show();
}

//select No Home
function selectno() {
  var selectedArr = (document.getElementById("noSelect").value);
    $("#coverage-tab").hide();
      $("#customer-data-tab").show();
      $("#summary-tab").hide();
      $("#customer-prev-tab").hide();
      $("#registerBroadbandFo").hide();
      $("#location").show();
      $("#no").show();
      $("#street").show();
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
  
//select coverage area
