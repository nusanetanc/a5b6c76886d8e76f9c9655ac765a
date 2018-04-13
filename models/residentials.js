var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ResidentialsSchema   = new Schema({
  city: String,
  name: String
});

module.exports = mongoose.model('Residentials', ResidentialsSchema);
