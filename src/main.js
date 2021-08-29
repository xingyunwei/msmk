import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { baseUrl } from '@/config'
// import axios from "axios";
// Vue.prototype.$axios = axios;
import VueResource from 'vue-resource'
Vue.use(VueResource)
    // import Container from '@/components/Container';
import '@/plugins/vant.js'
console.log(baseUrl)
    // import 'lib-flexible/flexible'
Vue.config.productionTip = false

new Vue({
    router,
    store,
    // components: { App, Container },
    // template: '<App/>',
    render: h => h(App)
}).$mount('#app')