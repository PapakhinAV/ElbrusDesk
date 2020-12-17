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
	},
	tel: {
		type: String,
		match: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
	},
	stydyGroup:[{
    type: mongoose.Types.ObjectId,
    ref: 'Group',
  }],
	gitHub: String,
	linkidIn: String,
	social: Array,
	city: String,
	workPlace: Array,
	post:[{
    type: mongoose.Types.ObjectId,
    ref: 'Post',
	}],
	avatar: String,
  birthday: String,
})

module.exports = mongoose.model('User', UserSchema)
