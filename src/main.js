import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './config/routes'
import Currency from './filters/Currency'

Vue.use(VueRouter)

Vue.filter('currency', Currency)

/* eslint-disable no-new */

let router = new VueRouter({
    history: true
})

router.redirect({
    '*': '/seasons'
})

router.map(routes)

router.start(App, '#router')
