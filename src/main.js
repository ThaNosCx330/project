import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入element.js文件
import './plugins/element.js'

// 引入font字体图标文件js文件
import './assets/font/iconfont.js'

// 引入axios
import axios from 'axios'

// axios请求共同地址设置
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

// 设置共同的axios请求头部
axios.interceptors.request.use(config => {
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
