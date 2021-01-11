import express from 'express';
import User from "../models/user.module.js"
import PostList from "../models/postList.js"

const router = express.Router();

//Удаление постов
router.get("/:id", async (req, res) => {
  const id = req.params.id
  await PostList.findByIdAndDelete(id)
  const user = await User.findOne({ post: id })
  user.post = user.post.filter((el) => el.toString() !== id)
  await user.save()
  res.sendStatus(200)
})



export default router

