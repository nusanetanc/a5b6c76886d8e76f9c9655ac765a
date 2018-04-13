var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ApartemensSchema   = new Schema({
  city: String,
  name: String
});

module.exports = mongoose.model('Apartemens', ApartemensSchema);
