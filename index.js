const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs')
const imageDownloader = require('./image-downloader');

const { BASE_URL } = require('./config');

const imageHost = 'https://img001.yayxcc.com/';

const getPageNum = (url) => {
  const pageNumStr = url.match(/[0-9]+/)[0];
  return Number(pageNumStr);
}

// axios.get(BASE_URL).then(res => {
//   const $ = cheerio.load(res.data);
//   const urlSelector = $('.comic-chapters .chapter-body ul > li > a');
//   const firstUrl = urlSelector.first().attr('href');
//   const lastUrl = urlSelector.last().attr('href');
//   console.log(firstUrl)
//   console.log(lastUrl)

//   const startIndex = getPageNum(firstUrl);
//   const endIndex = getPageNum(lastUrl);

//   console.log(startIndex + 1)
//   console.log(endIndex + 1)
// })

const firstChapterUrl = BASE_URL + '/204239.html';

console.log(firstChapterUrl)
axios.get(firstChapterUrl).then(res => {
  const $ = cheerio.load(res.data);
  
  console.log(script)
  eval(script);
  // console.log(chapterImages);
  console.log(pageImage)
  const image = `${imageHost}${chapterPath}${chapterImages[0]}`;
  // console.log(image)

  // axios.get(image).then(imgRes =>{
  //   // console.log(imgRes.data)
  //   fs.writeFileSync('king.jpg', imgRes.data)
  // })

  imageDownloader.download(pageImage, 'king.jpg')
})