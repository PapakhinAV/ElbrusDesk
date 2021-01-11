import express from 'express';
import User from "../models/user.module.js"


const router = express.Router();


//Удаление пользователя
router.get("/:id", async (req, res) => {
  const id = req.params.id
  await User.findByIdAndDelete(id)
  res.sendStatus(200)
})
export default router

