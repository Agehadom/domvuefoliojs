module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/domvuefoliojs/'
  : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
