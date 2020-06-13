import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _490c595c = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _6ff812b1 = () => interopDefault(import('../pages/information/index.vue' /* webpackChunkName: "pages/information/index" */))
const _09ec9e26 = () => interopDefault(import('../pages/life/index.vue' /* webpackChunkName: "pages/life/index" */))
const _7a5ea3b7 = () => interopDefault(import('../pages/photo/index.vue' /* webpackChunkName: "pages/photo/index" */))
const _00b42ca8 = () => interopDefault(import('../pages/spine/index.vue' /* webpackChunkName: "pages/spine/index" */))
const _10f5e7f2 = () => interopDefault(import('../pages/tech/index.vue' /* webpackChunkName: "pages/tech/index" */))
const _0a34560b = () => interopDefault(import('../pages/travel/index.vue' /* webpackChunkName: "pages/travel/index" */))
const _67165d2c = () => interopDefault(import('../pages/detail/_id.vue' /* webpackChunkName: "pages/detail/_id" */))
const _35390a95 = () => interopDefault(import('../pages/life/_id.vue' /* webpackChunkName: "pages/life/_id" */))
const _41e027df = () => interopDefault(import('../pages/photo/_id.vue' /* webpackChunkName: "pages/photo/_id" */))
const _01b737a2 = () => interopDefault(import('../pages/tech/_id.vue' /* webpackChunkName: "pages/tech/_id" */))
const _4b33419a = () => interopDefault(import('../pages/travel/_id.vue' /* webpackChunkName: "pages/travel/_id" */))
const _5952a258 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _490c595c,
      name: "about"
    }, {
      path: "/information",
      component: _6ff812b1,
      name: "information"
    }, {
      path: "/life",
      component: _09ec9e26,
      name: "life"
    }, {
      path: "/photo",
      component: _7a5ea3b7,
      name: "photo"
    }, {
      path: "/spine",
      component: _00b42ca8,
      name: "spine"
    }, {
      path: "/tech",
      component: _10f5e7f2,
      name: "tech"
    }, {
      path: "/travel",
      component: _0a34560b,
      name: "travel"
    }, {
      path: "/detail/:id?",
      component: _67165d2c,
      name: "detail-id"
    }, {
      path: "/life/:id",
      component: _35390a95,
      name: "life-id"
    }, {
      path: "/photo/:id",
      component: _41e027df,
      name: "photo-id"
    }, {
      path: "/tech/:id",
      component: _01b737a2,
      name: "tech-id"
    }, {
      path: "/travel/:id",
      component: _4b33419a,
      name: "travel-id"
    }, {
      path: "/",
      component: _5952a258,
      name: "index"
    }],

    fallback: false
  })
}
