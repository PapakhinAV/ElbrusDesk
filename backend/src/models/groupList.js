import mongoose from 'mongoose'

const GroupSchema = mongoose.Schema({
  name:String,
	city: String,
	avatar: String,
  dateStart: String,
  dateEnd: String
})

export default mongoose.model('GroupList', GroupSchema)
