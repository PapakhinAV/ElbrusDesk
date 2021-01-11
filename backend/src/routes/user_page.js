import express from 'express';
import User from "../models/user.module.js"


const router = express.Router();

router.get('/:id', async (req, res) => {
  let idUserPage = req.params.id
  if (idUserPage) {
    const infoUserPage = await User.find({ _id: idUserPage }).populate('stydyGroup')
    return res.json(infoUserPage)
  }
  return res.sendStatus(406)
})


export default router

