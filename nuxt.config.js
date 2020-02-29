import { Configuration } from 'webpack'
import { Context } from '@nuxt/vue-app'
const pkg = require('./package')

const data = require('./static/json/data.json');
let dynamicRoutes = () => {
  return new Promise(resolve => {
    resolve(data.map(el => `detail/${ el.id }`))
  })
}

module.exports = {
  mode: 'universal',
  buildModules: ['@nuxt/typescript-build'],
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
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    injected: true,
    breaks: true,
    html: true,
    linkify: true,
    typography: true
  },
  /*
  ** Build configuration
  */
  build: {
  },
  generate: {
    // fallback: true,
    routes: dynamicRoutes
  },
}
