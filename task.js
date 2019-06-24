const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const imageDownloader = require('./image-downloader');
const { BASE_DIR, BASE_URL, IMAGE_HOST } = require('./config');

const getPageDom = async (url) => {
  let retryCount = 0;
  try {
    console.log(`start loading page ${url}`)
    const res = await axios.get(url, {
      timeout: 60000
    });
    console.log(`done loading page ${url}`)
    return cheerio.load(res.data);
  } catch (e) {
    const errMsg = `error loading page ${url}`;
    console.log(errMsg);
    console.log(`retry ${url}`);
    retryCount++;
    if (retryCount > 5) {
      return Promise.reject();
    }
    return getPageDom(url);
  }  
}

const processChapter = async (chapterUrl, destFolder) => {
  console.log(`processing ${chapterUrl}`)
  console.log(`processing ${destFolder}`)
  try {
    const $ = await getPageDom(chapterUrl);
    const script = $('body > script').html();
    eval(script);
    const images = chapterImages; // from eval
    console.log(`image length ${images.length}`)
    if (!fs.existsSync(destFolder)) {   
      console.log(`creating folder ${destFolder}`)   
      fs.mkdirSync(destFolder, {
        recursive: true
      });
      console.log(`done creating folder ${destFolder}`)   
    } else {
      return nextChapterData;
    }
    images.forEach(async (image, index) => {
      const imageUrl = `${IMAGE_HOST}${chapterPath}${image}`;
      const imageNum = String(index).padStart(2, '0');
      const destFile = `${destFolder}/${imageNum}.jpg`;
      await imageDownloader.download(imageUrl, destFile);
    });
    console.log(`processing ${chapterNum} done`);
    return nextChapterData;
  } catch {
    const errMsg = `error process charpter number ${chapterNum}`;
    console.log(errMsg);
    return Promise.reject(errMsg);
  }
}

const getDestFolder = (chapIndex) => {
  const destSubFolder = String(chapIndex).padStart(4, '0');
  return `${BASE_DIR}/${destSubFolder}`;
};

const processAllLinks = async () => {
  const $ = await getPageDom(BASE_URL);
  const links = []
  $('#chapter-list-4 > li > a').each((index, item) => {
    const href = $(item).attr('href');
    const title = $(item).find('span').text()
    links.push({
      href: `${BASE_URL}${href}`,
      dest: `${getDestFolder(index)}_${title}`
    });
  });
  fs.writeFileSync('links.json', JSON.stringify(links), 'utf-8');
  return links;
};

const crawl = async () => {
  const links = await processAllLinks();
  links.forEach(async item => {
    await processChapter(item.href, item.dest);
  });
};


module.exports = {
  crawl,
  processChapter
};
