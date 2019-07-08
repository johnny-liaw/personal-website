import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import '@/assets/main.scss'
import { store } from './store/store'
// import '@/assets/debug.css'

Vue.config.productionTip = false


new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
