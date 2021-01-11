import express from 'express';
import PostList from "../models/postList.js"

const router = express.Router();

router.get('/:id', async (req, res) => {
  const id = req.params.id
  const postList = await PostList.find({ authorID: id })
  return res.json(postList)
})

export default router

