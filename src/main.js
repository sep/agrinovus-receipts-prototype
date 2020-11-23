import Vue from 'vue';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from '@/App.vue';
import Home from '@/components/Home.vue';
import TicketCaptor from '@/components/TicketCaptor.vue';
import TicketViewer from '@/components/TicketViewer.vue';
import LogIn from '@/components/LogIn.vue';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'camera',
    path: '/camera',
    component: TicketCaptor,
  },
  {
    name: 'tickets',
    path: '/tickets',
    component: TicketViewer,
  },
  {
    name: 'login',
    path: '/login',
    component: LogIn,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '/agrinovus-receipts-prototype/',
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
