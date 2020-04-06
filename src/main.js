import Vue from 'vue';
import VueCookies from 'vue-cookies'
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'

Vue.use(ElementUI)
Vue.use(VueCookies)

var axios = require('axios')
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:8081/api'
axios.defaults.withCredentials=true
Vue.config.productionTip = false

new Vue(
    {
      router,
  render: h => h(App),
}).$mount('#app')
