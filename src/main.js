import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import ProgressBar from 'vuejs-progress-bar'




Vue.config.productionTip = false
Vue.use(ProgressBar)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
