module.exports = {
  /*
  ** Customize the progress bar color
  */
  loading: { 
    color: '#3B8070',
    height: '4px' 
  },
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}