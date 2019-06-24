const fs = require('fs');
const axios = require('axios');

/**
 * 
 * @param {String} src 
 * @param {String} dest 
 */
async function download(src, dest) {
  try {
    const res = await axios.request({
      responseType: 'arraybuffer',
      url: src,
      method: 'get',
      headers: {
        'Content-Type': 'image/jpg',
      }
    })
    fs.writeFileSync(dest, res.data)
  } catch {
    console.log('error downloading jpg files');
    return Promise.reject();
  }
}

module.exports = {
  download
};