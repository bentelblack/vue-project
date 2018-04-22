// entry file of js
 
import Vue from 'vue'

import app from '@/App.vue'

// config VueRouter
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from '@/router.js'


//config Vuex
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    name: 'bentel'
  },
  mutation: {

  },
  getter: {

  }
})

// create Vue page
const vm = new Vue({
  el: '#app',
  render: c => c(app),
  router,
  store
})