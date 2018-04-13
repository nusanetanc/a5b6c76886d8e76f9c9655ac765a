var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TowersSchema   = new Schema({
  apartemens: String,
  name: String
});

module.exports = mongoose.model('Towers', TowersSchema);
