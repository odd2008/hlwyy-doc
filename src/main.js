// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import el from 'element-ui'
import ts from 'tesla-ui'
import moment from 'moment'
import 'tesla-ui/dist/index.css'
import '@/assets/sass/sass-index.scss'
Vue.prototype.$moment = moment
Vue.use(el)
Vue.use(ts)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
