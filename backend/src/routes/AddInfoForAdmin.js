import express from 'express';
import { checkAuthentication } from "../authMidlewear.js"
import User from "../models/user.module.js"
import GroupList from "../models/groupList.js"

const router = express.Router();

//запрос данных для администратора
router.get("/", checkAuthentication, async (req, res) => {
  const allUsers = await User.find()
  const allGroups = await GroupList.find()
  const dataForAdmin = { admin: req.user.admin, users: allUsers, groups: allGroups }
  res.json(dataForAdmin)
})


export default router

