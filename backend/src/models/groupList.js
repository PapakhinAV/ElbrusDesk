const mongoose = require('mongoose')

const GroupSchema = mongoose.Schema({
  name:String,
	city: String,
	avatar: String,
  dateStart: String,
  dateEnd: String
})

module.exports = mongoose.model('GroupList', GroupSchema)
