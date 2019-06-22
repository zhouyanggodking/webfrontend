const fs = require('fs');
const axios = require('axios');

/**
 * 
 * @param {String} src 
 * @param {String} dest 
 */
async function download(src, dest) {
  return axios.request({
    responseType: 'arraybuffer',
    url: src,
    method: 'get',
    headers: {
      'Content-Type': 'image/jpg',
    }
  }).then(res => {
    fs.writeFileSync(dest, res.data)
  });
}

module.exports = {
  download
};