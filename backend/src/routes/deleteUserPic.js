import express from 'express';
import User from '../models/user.module.js';

const router = express.Router();

router.get("/:id", async (req, res) => {
  const userId = req.params.id
  let user = await User.findById(userId);
  user.img = "";
  await user.save()
  res.sendStatus(200);
})


export default router

