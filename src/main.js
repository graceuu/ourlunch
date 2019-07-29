// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { MockContainer } from './mock/mockContainer'

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development') {
  new MockContainer(axios).init()
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
