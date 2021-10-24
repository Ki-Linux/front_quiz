import Vue from 'vue'
import App from './App.vue'
import router from './router'
import $router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAxios, axios, $router)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
