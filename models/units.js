var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UnitsSchema   = new Schema({
  towers: String,
  floors: String,
  units : String
});

module.exports = mongoose.model('Units', UnitsSchema);
