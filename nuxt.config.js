import { Configuration } from 'webpack'
import { Context } from '@nuxt/vue-app'
const pkg = require('./package')

const techPostData = require('./static/json/tech.json');
const lifePostData = require('./static/json/life.json');
const photoPostData = require('./static/json/photo.json');
const travelPostData = require('./static/json/travel.json');

require('dotenv').config();
const { CTF_SPACE_ID, CTF_CDA_ACCESS_TOKEN } = process.env;

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
  env: {
    CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN
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
    routes() {
      let allRoutes = [];
      const techRoutes = techPostData['sourceFileArray'].map(item => {
        const techId = item.replace('assets/md/tech/', '').replace('.md', '')
        return `tech/${ techId }`;
      })
      techRoutes.forEach(element => {
        allRoutes.push(element)
      });

      const lifeRoutes = lifePostData['sourceFileArray'].map(item => {
        const lifeId = item.replace('assets/md/life/', '').replace('.md', '')
        return `life/${ lifeId }`;
      })
      lifeRoutes.forEach(element => {
        allRoutes.push(element)
      });

      const photoRoutes = photoPostData['sourceFileArray'].map(item => {
        const photoId = item.replace('assets/md/photo/', '').replace('.md', '')
        return `photo/${ photoId }`;
      })
      photoRoutes.forEach(element => {
        allRoutes.push(element)
      });

      const travelRoutes = travelPostData['sourceFileArray'].map(item => {
        const travelId = item.replace('assets/md/travel/', '').replace('.md', '')
        return `travel/${ travelId }`;
      })
      travelRoutes.forEach(element => {
        allRoutes.push(element)
      });

      return allRoutes;
    }
  },
}
