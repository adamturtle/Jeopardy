import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './config/routes'

Vue.use(VueRouter)

/* eslint-disable no-new */

let router = new VueRouter({
    history: true
})

router.redirect({
    '*': '/seasons'
})

router.map(routes)

router.start(App, '#router')
