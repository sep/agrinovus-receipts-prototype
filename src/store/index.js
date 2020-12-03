import Vue from 'vue';
import Vuex from 'vuex';
import TemplatesModule from '@/store/modules/templates';
import TicketModule from '@/store/modules/tickets';
import UserModule from '@/store/modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user: UserModule,
    tickets: TicketModule,
    templates: TemplatesModule,
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('store')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store'))),
        );
      }
    },
  },
  strict: process.env.NODE_ENV !== 'production',
});

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state));
});

export default store;
