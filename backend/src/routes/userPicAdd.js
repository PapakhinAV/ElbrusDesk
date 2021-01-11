import express from 'express';
import User from '../models/user.module.js';


const router = express.Router();

// Загрузка фото юзера
router.post('/:id', async (req, res) => {
  const userId = req.params.id;
  if (!req.files) {
    return res.status(500).send({ msg: "file is not found" })
  }
  const myFile = req.files.file;
  let user = await User.findById(userId);
  user.img = myFile.name;
  await user.save()
  myFile.mv(`${process.env.PWD}/public/userPic/${myFile.name}`, function (err) {
    if (err) {
      console.log(err)
      return res.status(500).send({ msg: "Error occured" });
    }
    return res.send({ name: myFile.name, path: `/userPic/${myFile.name}` });
  });
})


export default router

