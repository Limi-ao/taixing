// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {api,get,post} from './assets/api'
import '@/assets/css/reset.css'
import '@/assets/css/basic.css'
import mBtn from '@/components/m-btn.vue'
Vue.component('mBtn',mBtn)

Vue.use(ElementUI)
Vue.config.productionTip = false

axios.defaults.timeout = 10000;
//axios.defaults.url = '/api';
//axios.defaults.baseURL = "http://192.168.1.21:8081";
axios.defaults.baseURL = "http://127.0.0.1:8081";


axios.interceptors.request.use((config) => {
  // Do something before request is sent
  // let token = localStorage.getItem('token');
     let token = sessionStorage.getItem('token');
  /*if (token && v.$route.path !== '/l-r/login' && v.$route.path !== '/l-r/register') {*/
    // config.headers.Authorization = 'channel:deviceid:none:1';
  /*}*/

  // if(!token){
  //   config.headers.Authorization = 'channel:deviceid:none:1';
  // }else{
  //   config.headers.Authorization = "channel:deviceid:"+token+":1";
  // }
  if(!token){
    config.headers.Authorization = 'none';
  }else{
    config.headers.Authorization = token;
  }

  if (config.data === FormData) {
    config.headers['Content-Type'] = 'multipart/form-data'
  }
  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});
axios.interceptors.response.use((response) => {
  // Do something before request is sent
  return response;
}, (error) => {
  return Promise.reject(error);
})

Vue.prototype.$api = api
Vue.prototype.$get = get
Vue.prototype.$post = post
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
