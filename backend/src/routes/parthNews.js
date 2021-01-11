import express from 'express';
import axios from "axios"
import cheerio from "cheerio"


const router = express.Router();


router.get("/", async (req, res) => {
  const response = await axios('https://3dnews.ru/news');
  const result = response.data;
  //cheerio
  const $ = cheerio.load(result);
  const header = [];
  const news = [];
  $('a.entry-header > h1').each((i, element) => {
    const title = $(element).text();
    header.push(title);
  });
  $('div.cntPrevWrapper > p').each((i, element) => {
    const newsBody = $(element).text();
    news.push(newsBody);
  });


  const allData = []
  header.map((element, i) => {
    if (element && news[i]) {
      if (!element.split().toString().match(/.*3DNews.*/)
        &&
        !news[i].split().toString().match(/.*3DNews.*/)) {
        allData.push([element, news[i]])
      }
    }
  });
  const newAllDada = allData.slice(0, 15);
  res.json(newAllDada)
})


export default router

