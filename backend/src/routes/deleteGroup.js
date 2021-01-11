import express from 'express';
import GroupList from "../models/groupList.js"

const router = express.Router();

//Удаление группы
router.get("/:id", async (req, res) => {
  const id = req.params.id
  await GroupList.findByIdAndDelete(id)
  res.sendStatus(200)
})


export default router

