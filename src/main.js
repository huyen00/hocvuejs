import Vue from 'vue'
import App from './App.vue'
import './assets/styles/index.css';
import routes from './router';
// Import thư viện Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

window.Bus = new Vue();
window.axios = require('axios');
import stores from './store/store';
// window.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
import Vuex from 'vuex'

import VueRouter from 'vue-router';
library.add(fab, fas, far)
Vue.component('font-awesome-icon', FontAwesomeIcon)
import 'flowbite';
Vue.use(VueRouter);
Vue.use(Vuex)
const store = new Vuex.Store({
   modules: { stores },
});
// validate
import Vuelidate from 'vuelidate'
// import token from './store/token';

const router = new VueRouter({mode: 'history', routes});

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
router.beforeEach((to, from, next) => {
  console.log(stores)
  const isAuthenticated = stores.state.auth.isAuthenticated
  
  // next-line: check if route ("to" object) needs authenticated
  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login');
  } else if (isAuthenticated) {
    switch (to.name) {
      case 'login' :
        next({ path: '/contact' });
        break;
      case 'Home':
        next({ path: '/contact' });
        break;
      default:
        next();
        break;
    }
  } else next();

})
window.axios.defaults.headers['Authorization'] = `Bearer ${stores.state.auth.token}` 

Vue.use(Vuelidate)
const app = new Vue({
  render: h => h(App),
  store: store,
  router
})
app.$mount('#app')
