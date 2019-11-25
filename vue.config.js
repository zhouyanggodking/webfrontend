module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://nlp-demo.shannonai.com'
      }
    }
  }
};
