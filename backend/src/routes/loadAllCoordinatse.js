import express from 'express';
import User from "../models/user.module.js"


const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.find()
  const usersWithPosition = users.filter((element) => element.position)
  const curentUsers = usersWithPosition.map((element) => ({ img: element.img, userId: element._id, firstname: element.firstname, surname: element.surname, lat: element.position.lat, lon: element.position.lon }))
  res.json(curentUsers)
})

export default router

