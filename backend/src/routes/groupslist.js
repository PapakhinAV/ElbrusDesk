import express from 'express';
import GroupList from "../models/groupList.js"

const router = express.Router();

router.get('/', async (req, res) => {
  const groupList = await GroupList.find()
  return res.json(groupList)
})


export default router

