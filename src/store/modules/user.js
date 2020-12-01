const initialState = () => ({
  name: '',
  email: '',
  persona: '',
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
