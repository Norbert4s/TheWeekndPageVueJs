import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/scss/main.scss';
import './../node_modules/jquery/dist/jquery.min.js';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
// import velocity  from '@/assets/velocity/velocity.min.js';
import VueYoutube from 'vue-youtube'

// Vue.use(jquery)

var VueScrollTo = require('vue-scrollto');

// Vue.use(VueScrollTo)

// You can also pass in the default options
Vue.use(VueScrollTo, {
     container: "body",
     duration: 1000,
     easing: "ease-out",
     offset: 0,
     cancelable: false,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })

Vue.use(VueYoutube)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
