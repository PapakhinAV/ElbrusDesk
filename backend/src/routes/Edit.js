import express from 'express';
import User from "../models/user.module.js"

const router = express.Router();


router.post('/:id', async (req, res) => {
  let idUserEdit = req.params.id
  let userOne = await User.findById({ _id: `${idUserEdit}` })
  let { firstname,
    surname,
    tel,
    city,
    telegram,
    gitHub,
    linkidIn,
    instagram,
    email,
    work,
    vk, selectIdGroup, selectIdDelete } = req.body


  if (
    firstname ||
    surname ||
    email ||
    work ||
    tel ||
    city ||
    telegram ||
    gitHub ||
    linkidIn ||
    instagram ||
    vk ||
    selectIdGroup || selectIdDelete) {

    if (firstname) {
      await User.findByIdAndUpdate(idUserEdit, { firstname: firstname }, function (err, firstname) {
        res.status(200)
      })
    }
    if (surname) {
      await User.findByIdAndUpdate(idUserEdit, { surname: surname }, function (err, surname) {
        res.status(200)
      })
    } else {
      await User.findByIdAndUpdate(idUserEdit, { surname: "" }, function (err, surname) {
        res.status(200)
      })
    }
    if (tel) {
      await User.findByIdAndUpdate(idUserEdit, { tel: tel }, function (err, tel) {
        res.status(200)
      })
    } else {
      await User.findByIdAndUpdate(idUserEdit, { tel: "" }, function (err, tel) {
        res.status(200)
      })
    }
    if (city) {
      await User.findByIdAndUpdate(idUserEdit, { city: city }, function (err, city) {
        res.status(200)
      })
    } else {
      await User.findByIdAndUpdate(idUserEdit, { city: "" }, function (err, city) {
        res.status(200)
      })
    }
    if (telegram) {
      await User.findByIdAndUpdate(idUserEdit, { telegram: telegram }, function (err, telegram) {
        res.status(200)
      })
    } else {
      await User.findByIdAndUpdate(idUserEdit, { telegram: "" }, function (err, telegram) {
        res.status(200)
      })
    }
    if (linkidIn) {
      await User.findByIdAndUpdate(idUserEdit, { linkidIn: linkidIn }, function (err, linkidIn) {
        res.status(200)
      })
    } else {
      await User.findByIdAndUpdate(idUserEdit, { linkidIn: "" }, function (err, linkidIn) {
        res.status(200)
      })
    }
    if (instagram) {
      await User.findByIdAndUpdate(idUserEdit, { instagram: instagram }, function (err, instagram) {
        res.status(200)
      })
    } else {
      await User.findByIdAndUpdate(idUserEdit, { instagram: "" }, function (err, instagram) {
        res.status(200)
      })
    }
    if (vk) {
      await User.findByIdAndUpdate(idUserEdit, { vk: vk }, function (err, vk) {
        res.status(200)
      })
    } else {
      await User.findByIdAndUpdate(idUserEdit, { vk: "" }, function (err, vk) {
        res.status(200)
      })
    }

    if (gitHub) {
      await User.findByIdAndUpdate(idUserEdit, { gitHub: gitHub }, function (err, gitHub) {
        res.status(200)
      })
    } else {
      await User.findByIdAndUpdate(idUserEdit, { gitHub: "" }, function (err, gitHub) {
        res.status(200)
      })
    }
    if (email) {
      await User.findByIdAndUpdate(idUserEdit, { email: email }, function (err, email) {
        res.status(200)
      })
    } else {
      await User.findByIdAndUpdate(idUserEdit, { email: "" }, function (err, gitHub) {
        res.status(200)
      })
    }
    if (work) {
      await User.findByIdAndUpdate(idUserEdit, { work: work }, function (err, work) {
        res.status(200)
      })
    } else {
      await User.findByIdAndUpdate(idUserEdit, { work: "" }, function (err, work) {
        res.status(200)
      })
    }
    if (selectIdGroup) {
      selectIdGroup.map(el => {
        if (!userOne.stydyGroup.includes(el.value)) {
          userOne.stydyGroup.push(el.value)
        }
      })
      await User.findByIdAndUpdate(idUserEdit, { stydyGroup: userOne.stydyGroup })

    }
    if (selectIdDelete) {
      selectIdDelete.forEach(async (element) => {
        userOne.stydyGroup = userOne.stydyGroup.filter((el) => el.toString() !== element.value)
      })
      await User.findByIdAndUpdate(idUserEdit, { stydyGroup: userOne.stydyGroup })
    }
    return res.sendStatus(200)

  }
  return res.sendStatus(406)
})


export default router

