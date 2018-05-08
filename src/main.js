import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'jquery/dist/jquery.slim.min'
import 'popper.js/dist/popper.min'

Vue.config.productionTip = false

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 403) {
    // auth
  }
  return Promise.reject(error);
});

router.beforeEach((to, from, next) => {
  // router before interceptor
  next()
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
