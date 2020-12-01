import Vue from 'vue';
import VueHead from 'vue-head';
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
<<<<<<< HEAD
import Dashboard from '@/components/Dashboard.vue';
=======
import store from './store';
>>>>>>> feea944... Finished the create/edit ticket template wizard page

Vue.use(VueFormWizard);
Vue.use(VueHead);
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

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
