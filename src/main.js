import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入element.js文件
import './plugins/element.js'

// 引入font字体图标文件js文件
import './assets/font/iconfont.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
