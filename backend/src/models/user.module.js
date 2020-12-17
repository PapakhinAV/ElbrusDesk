import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,
    match: /^[A-Z]\w+$/i,
  },
  surname: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,
    match: /^[A-Z]\w+$/i,
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
    match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  tel: {
    type: String,
    match: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
  },
  stydyGroup: [{
    type: mongoose.Types.ObjectId,
    ref: 'Group',
  }],
  gitHub: String,
  linkidIn: String,
  social: Array,
  city: String,
  workPlace: Array,
  post: [{
    type: mongoose.Types.ObjectId,
    ref: 'Post',
  }],
  avatar: String,
  birthday: String,
})

export default mongoose.model('User', UserSchema)
