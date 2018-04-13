var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var StreetsSchema   = new Schema({
  residentials: String,
  name: String,
  nos : String
});

module.exports = mongoose.model('Streets', StreetsSchema);
