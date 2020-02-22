import { Configuration } from 'webpack'
import { Context } from '@nuxt/vue-app'

const pkg = require('./package')
const post_data = require('@/static/json/data.json')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config: Configuration, { isClient, isDev }: Context) {
      console.info('=============================================');
      if (isClient && isDev) {
        config.devtool = 'source-map'
      }
    }
  },
  router: {
    base: '/'
  },
  generate: {
    // fallback: true,
    routes: [
      '/detail/1'
    ]
  },
}
