var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
	mobileno: { type: Number, required: true, unique: true },
	firstname: String,
	lastname: String,
	gender: String,
	email:String,
	otp: { type: Number, required: true},
	active : Boolean,
	created_at: Date,
  	updated_at: Date
});

module.exports = mongoose.model('User', UserSchema);
