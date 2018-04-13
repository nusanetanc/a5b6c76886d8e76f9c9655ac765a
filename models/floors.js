var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var FloorsSchema   = new Schema({
  towers: String,
  floors: String
});

module.exports = mongoose.model('Floors', FloorsSchema);
