import Vue from 'vue';
<<<<<<< HEAD
import Vuex from 'vuex';
=======
import VueHead from 'vue-head';
>>>>>>> 3ccb071... Added start of template page
import VueRouter from 'vue-router';
import VueFormWizard from 'vue-form-wizard';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'es6-promise/auto';
import App from '@/App.vue';
import Home from '@/components/Home.vue';
import TicketCaptor from '@/components/TicketCaptor.vue';
import TicketViewer from '@/components/TicketViewer.vue';
import TemplateEditor from '@/components/TemplateEditor.vue';
import LogIn from '@/components/LogIn.vue';
import Account from '@/components/Account.vue';
import Dashboard from '@/components/Dashboard.vue';

<<<<<<< HEAD
Vue.use(Vuex);
=======
Vue.use(VueFormWizard);
Vue.use(VueHead);
>>>>>>> 3ccb071... Added start of template page
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
    name: 'templates',
    path: '/templates',
    component: TemplateEditor,
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
