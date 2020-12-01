import { getField } from 'vuex-map-fields';
import { addTicketByPath, getStaticTickets, getUploadedTickets } from '@/models/ticket';

// #region Helper Methods

const toMap = (tickets) => tickets.reduce((map, ticket) => {
  map.set(ticket.pathLong, ticket);
  return map;
}, new Map());

// #endregion

// #region Module Methods

const initialState = () => ({
  all: [],
});

const getters = {
  getField,
  existingTickets: (state) => state.all,
};

const mutations = {
  addTickets(state, tickets) {
    const existingTickets = toMap(state.all);
    const ticketsByPath = tickets.reduce(addTicketByPath, existingTickets);
    state.all = Array.from(ticketsByPath.values());
  },
};

const actions = {
  async fetchStaticTickets({ commit }) {
    const staticTickets = await getStaticTickets();
    commit('addTickets', staticTickets);
  },

  async fetchUploadedTickets({ commit }) {
    const uploadedTickets = await getUploadedTickets();
    commit('addTickets', uploadedTickets);
  },
};

// #endregion

export default {
  namespaced: true,
  actions,
  mutations,
  getters,
  state: initialState,
};
