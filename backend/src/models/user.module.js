const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  name: {
		type: String,
    required: true,
    unique: true,
    minlength: 4,
    match: /^[A-Z]\w+$/i,
	},
	surname:  {
		type: String,
    required: true,
    unique: true,
    minlength: 4,
    match: /^[A-Z]\w+$/i,
	},
  email: {
    type: String,
    unique: true,
  },
  pass: {
		type: String,
    required: true,
    minlength: 6,
	}
})

module.exports = mongoose.model('User', UserSchema)
