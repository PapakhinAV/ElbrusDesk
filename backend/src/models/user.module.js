import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  googleId: String,
  githubId: String,
  firstname: String,
  surname: String,
  email: String,
  password: String,
  admin: Boolean,
  tel: String,
  stydyGroup: [{
    type: mongoose.Types.ObjectId,
    ref: 'GroupList',
  }],
  gitHub: String,
  linkidIn: String,
  telegram: String,
  instagram: String,
  vk: String,
  city: String,
  workPlace: Array,
  post: [{
    type: mongoose.Types.ObjectId,
    ref: 'PostList',
  }],
  avatar: String,
  birthday: String,
  work: String,
})

export default mongoose.model('User', UserSchema)
