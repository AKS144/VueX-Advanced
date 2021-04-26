import Vue from 'vue'
import VueRouter from 'vue-router'//added
import App from './App.vue'
import routes from './routes';//added for routes.js
import store from './store';//added
//added
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes,
  mode: 'history',
})

Vue.config.productionTip = false

new Vue({
  router,//added
  store,//added
  render: h => h(App),
}).$mount('#app')
