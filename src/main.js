import Vue from 'vue'
import App from './App.vue'
import vuetimeline from "@growthbunker/vuetimeline"
import KProgress from 'k-progress'
import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '@/assets/style/index.sass'
import '@/assets/style/responsive.sass'

Vue.use(BootstrapVue)

Vue.component('k-progress', KProgress)
Vue.use(vuetimeline)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
