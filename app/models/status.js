var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var StatusSchema   = new Schema({
	user_id : String,
	status: String,
	created_at: Date,
  	updated_at: Date
});

module.exports = mongoose.model('Status', StatusSchema);
