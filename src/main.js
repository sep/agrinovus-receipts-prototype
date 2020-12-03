import Vue from 'vue';
import VueHead from 'vue-head';
import VueRouter from 'vue-router';
import VueFormWizard from 'vue-form-wizard';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'es6-promise/auto';
import App from '@/App.vue';
import TicketCaptor from '@/components/TicketCaptor.vue';
import TicketViewer from '@/components/TicketViewer.vue';
import TemplateEditor from '@/components/TemplateEditor.vue';
import SignIn from '@/components/SignIn.vue';
import SignUp from '@/components/SignUp.vue';
import Account from '@/components/Account.vue';
import Dashboard from '@/components/Dashboard.vue';
import store from './store';

Vue.use(VueFormWizard);
Vue.use(VueHead);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

const routes = [
  {
    name: 'home',
    path: '/',
    component: SignIn,
    meta: { title: 'Sign In' },
  },
  {
    name: 'camera',
    path: '/camera',
    component: TicketCaptor,
    meta: { title: 'Capture Ticket' },
  },
  {
    name: 'tickets',
    path: '/tickets',
    component: TicketViewer,
    meta: { title: 'Tickets' },
  },
  {
    name: 'templates',
    path: '/templates',
    component: TemplateEditor,
    meta: { title: 'Process Ticket Data Using Templates' },
  },
  {
    name: 'signup',
    path: '/signup',
    component: SignUp,
    meta: { title: 'Sign Up' },
  },
  {
    name: 'account',
    path: '/account',
    component: Account,
    meta: { title: 'Account' },
  },
  {
    name: 'stats',
    path: '/stats',
    component: Dashboard,
    meta: { title: 'Your Stats' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '/agrinovus-receipts-prototype/',
  routes,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
