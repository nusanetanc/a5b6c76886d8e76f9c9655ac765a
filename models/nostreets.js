var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var NoStreetsSchema   = new Schema({
  residentials: String,
  name: String,
  nos : String
});

module.exports = mongoose.model('NoStreets', NoStreetsSchema);
