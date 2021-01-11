import express from 'express';
import GroupList from "../models/groupList.js"


const router = express.Router();

//Редактирование группы
//Поиск:
router.get("/:id", async (req, res) => {
  const id = req.params.id
  const EditDataGroup = await GroupList.findById(id)
  res.json(EditDataGroup)
})
//Сохранение:

router.post("/", async (req, res) => {
  const { name, city, avatar, dateStart, dateEnd } = req.body.newGroup
  if (name.trim()) {
    let curentGroup = await GroupList.findById(req.body.id)
    curentGroup.name = name
    curentGroup.city = city
    curentGroup.avatar = avatar
    curentGroup.dateStart = dateStart
    curentGroup.dateEnd = dateEnd
    await curentGroup.save()
    return res.sendStatus(200)
  }
  return res.sendStatus(406)
})

export default router

