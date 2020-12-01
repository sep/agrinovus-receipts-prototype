import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'es6-promise/auto';
import App from '@/App.vue';
import Home from '@/components/Home.vue';
import TicketCaptor from '@/components/TicketCaptor.vue';
import TicketViewer from '@/components/TicketViewer.vue';
import LogIn from '@/components/LogIn.vue';
import Account from '@/components/Account.vue';
import Dashboard from '@/components/Dashboard.vue';

Vue.use(Vuex);
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
  {
    name: 'account',
    path: '/account',
    component: Account,
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: Dashboard,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '/agrinovus-receipts-prototype/',
  routes,
});

const store = new Vuex.Store({
  state: {
    persona: '',
    name: '',
    email: '',
  },
  mutations: {
    setPersona(state, newPersona) {
      state.persona = newPersona;
    },
    setName(state, newName) {
      state.name = newName;
    },
    setEmail(state, newEmail) {
      state.email = newEmail;
    },
    clear(state) {
      state.persona = '';
      state.name = '';
      state.email = '';
    },
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
