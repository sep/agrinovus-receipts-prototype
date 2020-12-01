// #region Helper Methods

// #endregion

// #region Module Methods

const initialState = () => ({
  existingTemplates: [],
  newTemplate: {
    name: '',
    ticket: null,
    regions: [],
  },
});

const getters = {
  hasExistingTemplates: (state) => state.existingTemplates.length > 0,

  existingTemplates: (state) => state.existingTemplates,

  readyToMarkRegions: (state) => !!state.newTemplate.name
      && state.newTemplate.name.trim() !== ''
      && !!state.newTemplate.ticket,

  selectedTicket: (state) => state.newTemplate.ticket?.pathLong,
};

const mutations = {
  setNewTemplateName(state, newName) {
    state.newTemplate.name = newName;
  },

  setNewTemplateTicket(state, newTicket) {
    state.newTemplate.ticket = newTicket;
  },

  addRegion(state, newRegion) {
    state.newTemplate.regions = Array.concat(state.newTemplate.regions, [newRegion]);
  },

  addTemplate(state, newTemplate) {
    state.existingTemplates = Array.concat(state.existingTemplates, [newTemplate]);
  },

  setExistingTemplates(state, templates) {
    state.existingTemplates = templates;
  },
};

const actions = {
  async fetchSavedTemplates({ commit }) {
    const storedTemplates = JSON.parse(localStorage.getItem('ticketTemplates')) || [];
    commit('setExistingTemplates', storedTemplates);
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
