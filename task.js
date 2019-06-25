const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const logger = require('./logger');
const imageDownloader = require('./image-downloader');
const { BASE_DIR, BASE_URL, IMAGE_HOST } = require('./config');

const getPageDom = async (url) => {
  getPageDom.retryCount = getPageDom.retryCount || 0;
  try {
    logger.debug(`start loading page ${url}`)
    const res = await axios.get(url, {
      timeout: 160000
    });
    getPageDom.retryCount = 0;
    logger.debug(`done loading page ${url}`)
    return cheerio.load(res.data);
  } catch (e) {
    const errMsg = `error loading page ${url}`;
    logger.debug(errMsg);
    getPageDom.retryCount++;
    logger.debug(`retry ${url} - count ${getPageDom.retryCount}`);
    if (getPageDom.retryCount > 5) {
      getPageDom.retryCount = 0;
      return Promise.reject();
    }
    return getPageDom(url);
  }  
}

const processChapter = async (chapterUrl, destFolder) => {
  logger.debug(`processing ${chapterUrl}`)
  logger.debug(`processing ${destFolder}`)
  try {
    const $ = await getPageDom(chapterUrl);
    const script = $('body > script').html();
    eval(script);
    const images = chapterImages; // from eval
    logger.debug(`image length ${images.length}`)
    if (!fs.existsSync(destFolder)) {   
      logger.debug(`creating folder ${destFolder}`)   
      fs.mkdirSync(destFolder, {
        recursive: true
      });
      logger.debug(`done creating folder ${destFolder}`)   
    } else {
      return nextChapterData;
    }
    images.forEach(async (image, index) => {
      const imageUrl = `${IMAGE_HOST}${chapterPath}${image}`;
      const imageNum = String(index).padStart(2, '0');
      const destFile = `${destFolder}/${imageNum}.jpg`;
      await imageDownloader.download(imageUrl, destFile);
    });
    logger.debug(`processing ${chapterUrl} done`);
    return nextChapterData;
  } catch {
    const errMsg = `error process charpter number ${chapterUrl}`;
    logger.debug(errMsg);
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
      href: `${new URL(BASE_URL).origin}${href}`,
      dest: `${getDestFolder(index)}_${title}`
    });
  });
  fs.writeFileSync('links.json', JSON.stringify(links), 'utf-8');
  return links;
};

const crawl = async () => {
  const links = await processAllLinks();
  // links.forEach(async item => {
  //   await processChapter(item.href, item.dest);
  // });
  for (let index = 0; index < links.length; ++index) {
    await processChapter(links[index].href, links[index].dest);
  }
};


module.exports = {
  crawl,
  processChapter
};
