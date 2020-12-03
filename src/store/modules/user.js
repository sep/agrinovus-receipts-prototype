const initialState = () => ({
  name: '',
  email: '',
  persona: '',
  accounts: [],
});

const mutations = {
  setPersona(state, newPersona) {
    state.persona = newPersona;
  },

  setName(state, newName) {
    state.name = newName;
  },

  setEmail(state, newEmail) {
    state.email = newEmail;
  },

  addNewAccount(state, newAccount) {
    state.accounts = state.accounts || [];
    state.accounts.push(newAccount);
  },

  clear(state) {
    const newState = initialState();
    Object.keys(newState).forEach((key) => {
      state[key] = newState[key];
    });
  },
};

export default {
  namespaced: true,
  mutations,
  state: initialState,
};
