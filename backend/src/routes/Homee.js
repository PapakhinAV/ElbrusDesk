import express from 'express';
import User from "../models/user.module.js"
import { checkAuthentication } from "../authMidlewear.js"

const router = express.Router();


//Получаем данные для профиля
router.get('/:id', checkAuthentication, async (req, res) => {
  let idUser = req.params.id
  if (idUser) {
    const infoUser = await User.find({ _id: idUser }).populate('stydyGroup')
    return res.status(200).json(infoUser)
  }
  return res.sendStatus(406)
})


export default router

