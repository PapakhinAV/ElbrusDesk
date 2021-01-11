import express from 'express';
import GroupList from "../models/groupList.js"


const router = express.Router();

//Добавление новой группы

router.post("/", async (req, res) => {
  const { name, city, avatar, dateStart, dateEnd } = req.body
  if (name.trim()) {
    const addGroup = new GroupList({
      name,
      city,
      avatar,
      dateStart,
      dateEnd,
    })
    await addGroup.save()
    return res.sendStatus(200)
  }
  return res.sendStatus(406)
})
export default router

