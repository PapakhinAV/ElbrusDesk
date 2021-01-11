import express from 'express';
import User from "../models/user.module.js"

const router = express.Router();

router.get('/:id', async (req, res) => {
  let idGroup = req.params.id
  if (idGroup) {
    const listOfPeopleInGroup = await User.find({ stydyGroup: idGroup }).populate('stydyGroup')
    return res.status(200).json(listOfPeopleInGroup)
  }
  return res.sendStatus(406)
})

export default router

