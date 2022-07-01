import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入element.js文件
import './plugins/element.js'

// 引入font字体图标文件js文件
import './assets/font/iconfont.js'

// 引入axios
import axios from 'axios'

// axios的前置守卫
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
