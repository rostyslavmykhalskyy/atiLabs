const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          // 'initial-scale=1,minimum-scale=1,maximum-scale=1,width=device-width'
          'user-scalable=yes,width=device-width'
      },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  styleResources: {
    sass: ['@/assets/scss/main.scss']
  },

  // css: ['@nuxtjs/style-resources', '@/assets/scss/main.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources', 'vue-scrollto/nuxt'],

  /*
   ** Build configuration
   */
  resolve: {
    extensions: [
      '.ts',
      '.js' // add this
    ]
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  }
}
