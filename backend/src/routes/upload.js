import express from 'express';


const router = express.Router();

// Загрузка файлов на бэк
router.post('/', (req, res) => {

  if (!req.files) {
    return res.status(500).send({ msg: "file is not found" })
  }
  // accessing the file
  const myFile = req.files.file;
  //  mv() method places the file inside public directory
  myFile.mv(`${process.env.PWD}/public/${myFile.name}`, function (err) {
    if (err) {
      console.log(err)
      return res.status(500).send({ msg: "Error occured" });
    }
    // returing the response with file path and name
    return res.send({ name: myFile.name, path: `/${myFile.name}` });
  });
})

export default router

