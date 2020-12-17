require('dotenv').config()
const cors = require('cors')
const express = require('express')

const mongoose = require('mongoose');

const app = express();
const fetch = require("node-fetch");


const PORT = process.env.PORT ?? 0

// mongoose options
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  autoIndex: true,
  poolSize: 10,
  bufferMaxEntries: 0,
}
mongoose.connect(process.env.MONGO_DB,
	options, 
	(err) => { if (err) return console.log(err)
    console.log("Mongooseeee is conecting ON Atlas")
  });


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res)=>{
	res.send("Test")
})

app.listen(PORT, () => {
  console.log('Server has been started on port ', PORT)
})
