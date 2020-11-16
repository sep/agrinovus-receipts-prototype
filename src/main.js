import Vue from 'vue';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue';
import ReceiptCaptor from './components/ReceiptCaptor.vue';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

const routes = [
  { path: '/camera', component: ReceiptCaptor },
];

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
