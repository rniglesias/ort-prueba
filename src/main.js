import Vue from 'vue'
import App from './App.vue'

// Mis imports
import router from './routes'
import './httpClient'
import store from './store'
import './form'
import './filters'
import './bootstrap'
import './mixins'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
