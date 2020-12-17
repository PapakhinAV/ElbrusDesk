import mongoose from 'mongoose'

const PostSchema = mongoose.Schema({
  title:{
		type: String,
		required: true
	},	
		text: {
			type: String,
			required: true
		},
	img: String
})

export default mongoose.model('PostList', PostSchema)
