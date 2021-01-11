import express from 'express';
import User from "../models/user.module.js"


const router = express.Router();

router.post("/", async (req, res) => {
  const { latitude, longitude, userId } = req.body
  if (latitude && longitude && userId) {
    const temp = await User.findOne({ _id: userId })
    await User.findByIdAndUpdate(userId, {
      position: { lat: latitude, lon: longitude }
    })
    const users = await User.findOne({ _id: userId })
    const curentUsers = {
      img: users.img, userId: users._id, firstname: users.firstname, surname: users.surname, lat: users.position.lat, lon: users.position.lon
    }
    return res.json(curentUsers)
  }
  return res.sendStatus(406)
})

export default router

