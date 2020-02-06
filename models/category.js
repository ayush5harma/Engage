var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: { type: String, unique: true, lowercase: true}
},{
usePushEach : true
});

module.exports = mongoose.model('Category', CategorySchema);
