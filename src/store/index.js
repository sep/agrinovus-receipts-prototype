import Vue from 'vue';
import Vuex from 'vuex';
import TemplatesModule from '@/store/modules/templates';
import TicketModule from '@/store/modules/tickets';
import UserModule from '@/store/modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: UserModule,
    tickets: TicketModule,
    templates: TemplatesModule,
  },
  strict: process.env.NODE_ENV !== 'production',
});
