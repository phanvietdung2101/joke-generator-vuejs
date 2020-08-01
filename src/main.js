import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './stores/index'
import './plugins/element.js'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
