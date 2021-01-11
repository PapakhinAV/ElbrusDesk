import express from 'express';
import PostList from '../models/postList.js'
import User from "../models/user.module.js"


const router = express.Router();

router.post('/:id', async (req, res) => {
  const id = req.params.id;
  const { title, text, img } = req.body;
  const addNewPost = new PostList({
    title: title,
    text: text,
    img: img,
    authorID: id,
  })
  await addNewPost.save()
  const sessionUser = req.user.id;
  let user = await User.findById(sessionUser);
  user.post.push(addNewPost._id)
  await user.save()
  res.json(addNewPost._id)
}
);

export default router

