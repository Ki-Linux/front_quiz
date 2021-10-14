import Vue from 'vue'
import App from './App.vue'
import router from './router'
import $router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueHead from 'vue-head'

Vue.config.productionTip = false

Vue.use(VueAxios, axios, $router)
Vue.use(VueHead)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
