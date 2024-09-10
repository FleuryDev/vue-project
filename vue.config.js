// vue.config.js file to be placed in the root of your repository
export default {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-project/'
    : '/'
}