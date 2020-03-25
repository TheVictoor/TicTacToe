import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSocketIO from 'vue-socket.io';

import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false;

Vue.use(new VueSocketIO({
  debug: true,
  connection: process.env.VUE_APP_SOCKET_HOST
}));

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
